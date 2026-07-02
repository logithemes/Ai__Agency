/**
 * GSAP Animations
 * All scroll animations, word animations, card reveals, and progress bars
 * 
 * @package YourThemeName
 * @version 1.0.0
 */

(function() {
    "use strict";

    function initGSAPAnimations() {
        
        gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

        /* ===============================
           WORD SCROLL ANIMATION
        =============================== */
        function wordScrollAnimation(sectionSelector, textSelector) {
            var section = document.querySelector(sectionSelector);
            if (!section) return;

            var textEls = document.querySelectorAll(textSelector);
            if (!textEls.length) return;

            textEls.forEach(function(textEl) {
                if (textEl.classList.contains("word-animated")) return;
                textEl.classList.add("word-animated");

                var words = textEl.innerText.trim().split(" ");
                var html = '';
                
                words.forEach(function(word) {
                    html += '<span class="word">' + word + '</span><span class="space"> </span>';
                });
                
                textEl.innerHTML = html;

                var wordEls = textEl.querySelectorAll(".word");

                gsap.timeline({
                    scrollTrigger: {
                        trigger: textEl,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true
                    }
                }).to(wordEls, {
                    opacity: 1,
                    y: 0,
                    color: "#fff",
                    stagger: 0.05,
                    ease: "none"
                });
            });
        }

        /* === CALL WORD ANIMATIONS === */
        wordScrollAnimation('.service-three-connection', '.service-three-text');
        wordScrollAnimation('.home-three-skills', '.home-three-skills .home-three-skills-description p');
        wordScrollAnimation('.home-popup-video', '.home-popup-video-desc');

        /* ===============================
           FOUR CARDS REVEAL ANIMATION
        =============================== */
        var workItems = gsap.utils.toArray(".tp-clip-path-wrapper");
        if (workItems.length > 0) {
            workItems.forEach(function(container) {
                var revealMedia = container.querySelector(".tp-clip-path-target");
                if (!revealMedia) return;

                gsap.set(container, {
                    autoAlpha: 1,
                    overflow: "hidden"
                });

                gsap.fromTo(
                    revealMedia,
                    {
                        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
                        scale: 1.2
                    },
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        scale: 1,
                        duration: 1.5,
                        ease: "power4.inOut",
                        scrollTrigger: {
                            trigger: container,
                            start: "top bottom",
                            toggleActions: "play none none none",
                            once: true,
                        }
                    }
                );
            });
        }

       

        /* ===============================
           PROGRESS BAR
        =============================== */
        var progressSection = document.querySelector(".progress-scroll");
        if (progressSection) {
            var bars = progressSection.querySelectorAll(".about-progress-gradiant-bar");
            
            if (bars.length > 0) {
                var targetWidths = [95, 91, 98];
                
                gsap.fromTo(bars, { width: "0%" }, {
                    width: function(i) {
                        return (targetWidths[i] || targetWidths[0]) + "%";
                    },
                    duration: 1.5,
                    ease: "power2.out",
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: progressSection,
                        start: "top 80%",
                        once: true
                    }
                });
            }
        }

        /* ===============================
           LINE SCROLL
        =============================== */
        gsap.utils.toArray(".scroll-line").forEach(function(line) {
            gsap.fromTo(
                line,
                { height: 0 },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".home-two-portfolio",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });

       
        /* ===============================
           SCROLL INDICATOR
        =============================== */
        var scrollIndicator = document.querySelector(".tp-scroll-indicator__line");
        if (scrollIndicator) {
            gsap.fromTo(
                scrollIndicator,
                { y: -15, opacity: 0 },
                {
                    y: 3,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    repeat: -1,
                    yoyo: true
                }
            );
        }

        /* ===============================
           FADE IN ANIMATIONS
        =============================== */
        var animations = {
            ".tp-fade-up": { y: 50, opacity: 0 },
            ".tp-fade-left": { x: -50, opacity: 0 },
            ".tp-fade-right": { x: 50, opacity: 0 },
            ".tp-zoom-in": { scale: 0.8, opacity: 0 },
            ".tp-zoom-out": { scale: 1.2, opacity: 0 }
        };

        Object.keys(animations).forEach(function(selector) {
            var fromVars = animations[selector];
            
            gsap.utils.toArray(selector).forEach(function(item) {
                var delay = parseFloat(item.dataset.delay) || 0;
                
                gsap.from(item, {
                    y: fromVars.y || 0,
                    x: fromVars.x || 0,
                    scale: fromVars.scale || 1,
                    opacity: fromVars.opacity,
                    duration: 1,
                    ease: "power3.out",
                    delay: delay,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        once: true
                    }
                });
            });
        });

  

        /* ===============================
           BLOG DETAILS / ANIM-WRAP
        =============================== */
        var animWrap = document.querySelector(".tp-anim-wrap");
        if (animWrap) {
            gsap.fromTo(".tp-anim-wrap", 
                {
                    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
                    scale: 1.2
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    scale: 1,
                    duration: 1.5,
                    ease: "power4.inOut",
                    delay: 0.1
                }
            );
        }

        ScrollTrigger.refresh();

    }

    window.initGSAPAnimations = initGSAPAnimations;

})();