/**
 * Slider Initialization
 * Handles all Swiper slider initializations
 * 
 * @package YourThemeName
 * @version 1.0.0
 * @author YourName
 * @license Themeforest Standard License
 */

(function($) {
    "use strict";

    /**
     * Document Ready
     * Initializes all sliders when DOM is ready
     * 
     * @since 1.0.0
     */
    $(document).ready(function() {

        /**
         * 1. Project Slider
         * Displays project items in a carousel
         * 
         * @since 1.0.0
         */
        if ($('.project-slider-wrapper').length) {
            var projectSlider = new Swiper('.project-slider-wrapper', {
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
        }

        /**
         * 2. Choose Us Slider
         * Displays services with navigation arrows
         * 
         * @since 1.0.0
         */
        if ($('.choose-us-slider-services').length) {
            var chooseUsSlider = new Swiper('.choose-us-slider-services', {
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
        }

        /**
         * 3. About Three Slider
         * Displays about section with custom pagination
         * 
         * @since 1.0.0
         */
        if ($('.about-three-slider').length) {
            var aboutThreeSlider = new Swiper('.about-three-slider', {
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
        }

        /**
         * 4. Content Swiper (Home Three)
         * Fade effect for content slides
         * 
         * @since 1.0.0
         */
        if ($('.content-swiper').length) {
            var contentSwiper = new Swiper('.content-swiper', {
                effect: 'fade',
                allowTouchMove: false,
                fadeEffect: {
                    crossFade: true
                }
            });
        }

        /**
         * 5. Image Swiper (Home Three)
         * Cards effect for image slides with content sync
         * 
         * @since 1.0.0
         */
        if ($('.home-three-slider-area').length) {
            var imageSwiper = new Swiper('.home-three-slider-area', {
                effect: 'cards',
                grabCursor: true,
                cardsEffect: {
                    slideShadows: false,
                    perSlideOffset: 14
                },
                on: {
                    slideChange: function() {
                        if (typeof contentSwiper !== 'undefined') {
                            contentSwiper.slideTo(this.activeIndex);
                        }
                    }
                }
            });
        }

        /**
         * 6. Process Slider
         * Displays process steps with navigation
         * 
         * @since 1.0.0
         */
        if ($('.tp-process-slider').length) {
            var processSlider = new Swiper('.tp-process-slider', {
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
                    nextEl: '.tp-left-arrow-btn',
                    prevEl: '.tp-arrow-arrow-btn',
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
        }

    }); // End document ready

})(jQuery);