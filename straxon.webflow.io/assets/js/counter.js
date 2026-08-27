// ============================================
// COUNTER ANIMATION
// ============================================

(function ($) {
    "use strict";

    var counterStarted = false;

    function startCounter() {
        if (counterStarted) {
            return;
        }

        $('.counter-wrapper').each(function () {
            var $counter = $(this);
            var target = parseInt($counter.attr('data-target'), 10);
            var count = 0;

            var interval = setInterval(function () {
                count++;

                $counter.text(count < 10 ? '0' + count : count);

                if (count >= target) {
                    clearInterval(interval);
                }
            }, 40);
        });

        counterStarted = true;
    }

    $(window).on('scroll', function () {
        var $section = $('.counters-wrapper');

        if (!$section.length || counterStarted) {
            return;
        }

        var sectionTop = $section.offset().top - window.innerHeight + 100;

        if ($(window).scrollTop() > sectionTop) {
            startCounter();
        }
    });

})(jQuery);