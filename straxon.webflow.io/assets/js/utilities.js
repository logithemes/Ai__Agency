// ============================================
// UTILITIES & MISC
// ============================================

$(document).ready(function() {

    // Service Tab Active Class
    $('.tp-service-tab-links').on('click', function() {
        $('.tp-service-tab-links').removeClass('tp-active');
        $(this).addClass('tp-active');
    });

    // Service Three Cards Overlay
    $(".service-three-cards").on("mouseenter", function() {
        $(".service-three-cards-overlay").removeClass("service-tp-in-active");
        $(this).children(".service-three-cards-overlay").addClass("service-tp-in-active");
    });

    // Rotating Button Effect
    const rotatingTexts = document.querySelectorAll('.button-border-effect');
    rotatingTexts.forEach((el) => {
        let angle = 0;
        setInterval(() => {
            angle += 1;
            el.style.transform = `rotateZ(${angle}deg)`;
        }, 16);
    });

    // Arrow Rotate Toggle
    $('.arrow-right').on('click', function() {
        const currentArrow = $(this).find('.rotate-arrow');
        $('.rotate-arrow').not(currentArrow).css({
            transform: 'rotate(0deg)'
        });
        currentArrow.toggleClass('active');
        if (currentArrow.hasClass('active')) {
            currentArrow.css('transform', 'rotate(180deg)');
        } else {
            currentArrow.css('transform', 'rotate(0deg)');
        }
    });

});