$(window).on('load', function () {
    $('.loader .inner').fadeOut(500, function () {
        $('.loader').fadeOut(750);
    });
});

$('.items').isotope({
    filter: '*',
    animationOptions: {
        duration: 1500, //duration in milliseconds
        easing: 'linear', // the "smoothness" of the transition
        queue: false
    }
});

$(document).ready(function () {
    // activate SuperSlides Jquery
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    // activate TypedJS and set options
    var typed = new Typed('.typed', {
        strings: ['Web Developer.', 'Swimmer.', 'Artist.','Badminton player.', 'Programmer.'],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    // activate Owl Carousel and set options
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    // loading animation on scrollTop of skills section
    var skillsTopOffset = $('.skillsSection').offset().top;
    var statsTopOffset = $('.statsSection').offset().top;
    var countUpFinished = false;
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            // activate Easy Pie Chart JQuery and options
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#1e90ff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $('.counter').each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            });
            countUpFinished = true;
        }
    });
    $('[data-fancybox]').fancybox(); //activating fancybox

    // Filtering with ISOTOPE

    $('#filters a').click(function () {
        $('#filters .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500, //duration in milliseconds
                easing: 'linear', // the "smoothness" of the transition
                queue: false
            }
        });
        return false;
    });

    // Smooth Scrolling between navigation areas
    $('#navigation li a').click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $('html,body').animate({
            scrollTop: targetPosition - 50
        }, 'slow');
    });






    // Sticky Navigation
    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        const body = $('body');
        if ($(window).scrollTop() >= navTop) {
            body.css('padding.top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding.top', 0);
            body.removeClass('fixedNav');
        }
    }

});