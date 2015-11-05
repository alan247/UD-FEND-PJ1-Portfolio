/* Menu */
$(window).scroll(function() {
    if ($('main').position().top - $(window).scrollTop() > -706) {
        $('.top-bar-section ul li').removeClass('active');
        $('.top-bar').removeClass('top-bar-scrolled');
        $('.title-area').removeClass('title-area-scrolled');
    }
    if ($('#projects').position().top - $(window).scrollTop() < 58) {
        $('.menu-projects').parent().addClass('active').siblings().removeClass('active');
        $('.top-bar').addClass('top-bar-scrolled');
        $('.title-area').addClass('title-area-scrolled');
    }
    if ($('#skills').position().top - $(window).scrollTop() < 96) {
        $('.menu-skills').parent().addClass('active').siblings().removeClass('active');
    }
    if ($('#about').position().top - $(window).scrollTop() < 96) {
        $('.menu-about').parent().addClass('active').siblings().removeClass('active');
    }
});


/* Type text animation */
$('.welcome-text').empty().typetype('var hello = "Hi, I\'m Alan, a front-end developer";', {
    e: 0.03,
    t: 80
}).delay(800).backspace(51, {
    t: 20,
    callback: function() {
        $('.welcome-text').addClass('take-a-look');
    }
}).typetype('TAKE A LOOK AROUND!');


/* Projects */
$('#projects ul li').mouseenter(function() {
    $(this).find('a').addClass('mouseover');
}).mouseleave(function() {
    $(this).find('a').removeClass('mouseover');
});


/* Skills */
var el = $('#skills'),
    inited = false;

el.appear({
    force_process: true
});

el.on('appear', function() {
    if (!inited) {

        $('.skill-html5').circleProgress({
            value: 0.85,
            size: 250,
            thickness: 30,
            fill: {
                color: "#E44D26"
            }
        });
        $('.skill-css3').circleProgress({
            value: 0.75,
            size: 250,
            thickness: 30,
            fill: {
                color: "#0171BB"
            }
        });
        $('.skill-js').circleProgress({
            value: 0.20,
            size: 250,
            thickness: 30,
            fill: {
                color: "#E5A32B"
            }
        });
        $('.skill-php').circleProgress({
            value: 0.35,
            size: 250,
            thickness: 30,
            fill: {
                color: "#6785B7"
            }
        });
        $('.skill-git').circleProgress({
            value: 0.40,
            size: 250,
            thickness: 30,
            fill: {
                color: "#F34F29"
            }
        });


        inited = true;
    }
});