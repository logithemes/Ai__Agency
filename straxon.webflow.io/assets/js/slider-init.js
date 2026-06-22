// ============================================
// SWIPER SLIDER INITIALIZATIONS
// ============================================

$(document).ready(function() {

    // ============================================
    // 1. PROJECT SLIDER
    // ============================================
    const projectSlider = new Swiper('.project-slider-wrapper', {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });

    // ============================================
    // 2. CHOOSE US SLIDER
    // ============================================
    const chooseUsSlider = new Swiper('.choose-us-slider-services', {
        loop: true,
        speed: 1200,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.choose-slider-next',
            prevEl: '.choose-slider-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 2,
                centeredSlides: true,
            }
        }
    });

    // ============================================
    // 3. ABOUT THREE SLIDER
    // ============================================
    const aboutThreeSlider = new Swiper('.about-three-slider', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.about-three-slider-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="tp-slider-dot ' + className + '"></div>';
            },
        },
    });

    // ============================================
    // 4. CONTENT SWIPER (HOME THREE)
    // ============================================
    const contentSwiper = new Swiper(".content-swiper", {
        effect: "fade",
        allowTouchMove: false,
        fadeEffect: { crossFade: true }
    });

    // ============================================
    // 5. IMAGE SWIPER (HOME THREE)
    // ============================================
    const imageSwiper = new Swiper(".home-three-slider-area", {
        effect: "cards",
        grabCursor: true,
        cardsEffect: {
            slideShadows: false,
            perSlideOffset: 14
        },
        on: {
            slideChange() {
                contentSwiper.slideTo(this.activeIndex);
            }
        }
    });

    // ============================================
    // 6. PROCESS SLIDER
    // ============================================
    const processSlider = new Swiper(".tp-process-slider", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1200,
        grabCursor: true,
        allowTouchMove: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        freeMode: false,
        navigation: {
            nextEl: ".tp-left-arrow-btn",
            prevEl: ".tp-arrow-arrow-btn",
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });

});