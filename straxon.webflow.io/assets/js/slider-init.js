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
                    delay: 3500,
                    disableOnInteraction: false,
                },
                slidesPerView: 4,
                spaceBetween: 0,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
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

      

        // Home Three testimonial carousel with responsive card counts and arrow controls.
        if ($('.home-three-testimonial-swiper').length) {
            var homeThreeTestimonialSwiper = new Swiper('.home-three-testimonial-swiper', {
                loop: true,
                speed: 700,
                slidesPerView: 1.08,
                spaceBetween: 16,
                grabCursor: true,
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.home-three-testimonial-next',
                    prevEl: '.home-three-testimonial-prev',
                },
                breakpoints: {
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 18,
                    },
                    768: {
                        slidesPerView: 2.,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 22,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 22,
                    },
                  
                },
            });
        }

        /**
         * 6. Process Slider
         * Displays process steps with navigation
         * 
         * @since 1.0.0
         */
         if ($('.tp-testimonial-slider.swiper').length) {
     var processSlider = new Swiper('.tp-testimonial-slider.swiper', {
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

        pagination: {
            el: '.tp-testimonial-slider-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="tp-slider-dot ' + className + '"></span>';
            }
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
        }
    });
}

        /**
         * 7. Home Two Testimonial Loop
         * Continuously scrolls the testimonials and supports pointer dragging.
         */
        document.querySelectorAll('.home-two-testimonial-slider').forEach(function(viewport) {
            var track = viewport.querySelector('.home-two-testimonial-track');
            if (!track || !track.children.length) return;

            var originalSlides = Array.from(track.children);
            originalSlides.forEach(function(slide) {
                var clone = slide.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                clone.setAttribute('inert', '');
                track.appendChild(clone);
            });

            var period = 0;
            var position = 0;
            var speed = 0;
            var dragging = false;
            var dragStartX = 0;
            var dragStartPosition = 0;
            var lastPointerX = 0;
            var lastPointerTime = 0;
            var dragVelocity = 0;
            var inertiaTween;

            function measure() {
                period = originalSlides.reduce(function(width, slide) {
                    return width + slide.getBoundingClientRect().width;
                }, 0);
                if (!period) return;

                speed = originalSlides[0].getBoundingClientRect().width / 10;
                position = gsap.utils.wrap(-period, 0, position);
                gsap.set(track, { x: position });
            }

            function tick(time, deltaTime) {
                if (dragging || inertiaTween || !period) return;
                position = gsap.utils.wrap(-period, 0, position - speed * deltaTime / 1000);
                gsap.set(track, { x: position });
            }

            function onPointerDown(event) {
                if (event.button !== undefined && event.button !== 0) return;
                dragging = true;
                viewport.classList.add('is-dragging');
                if (inertiaTween) {
                    inertiaTween.kill();
                    inertiaTween = null;
                }
                dragStartX = event.clientX;
                dragStartPosition = position;
                lastPointerX = event.clientX;
                lastPointerTime = performance.now();
                dragVelocity = 0;
                if (viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId);
                event.preventDefault();
            }

            function onPointerMove(event) {
                if (!dragging) return;
                var now = performance.now();
                var elapsed = now - lastPointerTime;
                if (elapsed > 0) dragVelocity = (event.clientX - lastPointerX) / elapsed * 1000;
                lastPointerX = event.clientX;
                lastPointerTime = now;
                position = gsap.utils.wrap(-period, 0, dragStartPosition + event.clientX - dragStartX);
                gsap.set(track, { x: position });
            }

            function onPointerUp() {
                if (!dragging) return;
                dragging = false;
                viewport.classList.remove('is-dragging');
                if (Math.abs(dragVelocity) > 40) {
                    inertiaTween = gsap.to({ x: position }, {
                        x: position + dragVelocity * 0.18,
                        duration: 0.35,
                        ease: 'power2.out',
                        onUpdate: function() {
                            position = gsap.utils.wrap(-period, 0, this.targets()[0].x);
                            gsap.set(track, { x: position });
                        },
                        onComplete: function() {
                            inertiaTween = null;
                        }
                    });
                }
            }

            measure();
            viewport.addEventListener('pointerdown', onPointerDown);
            viewport.addEventListener('pointermove', onPointerMove);
            viewport.addEventListener('pointerup', onPointerUp);
            viewport.addEventListener('pointercancel', onPointerUp);
            window.addEventListener('resize', measure);
            gsap.ticker.add(tick);
        });

        /**
         * 8. Inner Pages Slider
         * Centers the active page card and blurs the neighboring cards
         */
        if ($('.inner-pages-slider').length) {
            var innerPagesSlider = new Swiper('.inner-pages-slider', {
                loop: true,
                speed: 700,
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 24,
                grabCursor: true,
                navigation: {
                    nextEl: '.inner-pages-slider-next',
                    prevEl: '.inner-pages-slider-prev',
                },
                keyboard: {
                    enabled: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                    },
                },
            });
        }

}); // End document ready

})(jQuery);