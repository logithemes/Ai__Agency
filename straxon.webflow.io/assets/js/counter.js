// ============================================
// COUNTER ANIMATION
// ============================================

$(document).ready(function() {

    let started = false;

    function startCounter() {
        if (started) return;
        $('.counter-wrapper').each(function() {
            let $this = $(this);
            let target = parseInt($this.attr("data-target"));
            let count = 0;
            let interval = setInterval(() => {
                count++;
                $this.text(count < 10 ? "0" + count : count);
                if (count >= target) {
                    clearInterval(interval);
                }
            }, 40);
        });
        started = true;
    }

    if ($('.counters-wrapper').length) {
        $(window).on('scroll', function() {
            let sectionTop = $('.counters-wrapper').offset().top - window.innerHeight + 100;
            if ($(window).scrollTop() > sectionTop) {
                startCounter();
            }
        });
    }

});