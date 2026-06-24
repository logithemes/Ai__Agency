/**
 * GSAP Utilities
 * Marquee, image hover, cursor effects, screenshot loop, and projects mouse move
 * All GSAP-based utility functions
 * 
 * @package YourThemeName
 * @version 1.0.0
 */

(function() {
    "use strict";

    function initGSAPUtilities() {

        /* ===============================
           EXPLORE CURSOR
        =============================== */
        var explore = document.querySelector(".explore-now");
        if (explore) {
            var cards = gsap.utils.toArray(".landing-cards, .service-sticky, .blog-three-posts-image");
            
            cards.forEach(function(card) {
                if (!card) return;
                
                card.addEventListener("mouseenter", function() {
                    gsap.to(explore, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.4
                    });
                });

                card.addEventListener("mouseleave", function() {
                    gsap.to(explore, {
                        opacity: 0,
                        duration: 0.4
                    });
                });

                card.addEventListener("mousemove", function(e) {
                    gsap.to(explore, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                });
            });
        }

        /* ===============================
           SCREENSHOT LOOP
        =============================== */
        var screenshotsTop = document.querySelector(".tp-screenshot-wrap.top");
        if (screenshotsTop) {
            gsap.to(".tp-screenshot-wrap.top", {
                y: "+=300",
                duration: 17,
                repeat: -1,
                ease: "none"
            });
        }

        var screenshotsBottom = document.querySelector(".tp-screenshot-wrap.bottom");
        if (screenshotsBottom) {
            gsap.to(".tp-screenshot-wrap.bottom", {
                y: "-=300",
                duration: 17,
                repeat: -1,
                ease: "none"
            });
        }

        /* ===============================
           MARQUEE
        =============================== */
        function fillWithClones(train) {
            if (!train || !train.parentElement) return 0;
            
            var containerWidth = train.parentElement.offsetWidth;
            var totalWidth = train.scrollWidth;
            
            while (totalWidth < containerWidth && train.children.length > 0) {
                var children = Array.from(train.children);
                children.forEach(function(child) {
                    if (child) train.appendChild(child.cloneNode(true));
                });
                totalWidth = train.scrollWidth;
            }
            return totalWidth;
        }

        document.querySelectorAll(".marquee-train-left, .home-three-marquee").forEach(function(train) {
            if (!train) return;
            var trainWidth = fillWithClones(train);
            if (trainWidth > 0) {
                gsap.to(train, {
                    x: "-=" + trainWidth,
                    duration: 50,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        x: gsap.utils.unitize(function(x) {
                            return parseFloat(x) % (trainWidth / 2);
                        })
                    }
                });
            }
        });

        document.querySelectorAll(".marquee-train-right").forEach(function(train) {
            if (!train) return;
            var trainWidth = fillWithClones(train);
            if (trainWidth > 0) {
                gsap.to(train, {
                    x: "+=" + trainWidth,
                    duration: 20,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        x: gsap.utils.unitize(function(x) {
                            return parseFloat(x) % (trainWidth / 2);
                        })
                    }
                });
            }
        });

        /* ===============================
           IMAGE 3D HOVER
        =============================== */
        document.querySelectorAll(".img-hover-3d").forEach(function(img) {
            if (!img) return;
            
            img.addEventListener("mousemove", function(ev) {
                var rect = img.getBoundingClientRect();
                var offsetX = ev.clientX - rect.left;
                var offsetY = ev.clientY - rect.top;
                var rotateY = gsap.utils.clamp(-15, 15, ((offsetX / rect.width) - 0.9) * 10);
                var rotateX = gsap.utils.clamp(-15, 15, ((offsetY / rect.height) - 0.9) * -10);
                
                gsap.to(img, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 10000,
                    ease: "power2.out",
                    duration: 0.3
                });
            });
            
            img.addEventListener("mouseleave", function() {
                gsap.to(img, {
                    rotationX: 0,
                    rotationY: 0,
                    ease: "power2.out",
                    duration: 0.5
                });
            });
        });

        /* ===============================
           PROJECTS MOUSE MOVE
        =============================== */
        var projectsSection = document.querySelector(".projects-section");
        var projectsBoxes = document.querySelector(".home-two-projects-boxes");
        
        if (projectsSection && projectsBoxes) {
            var mouseX = 0;
            var targetX = 0;
            var maxMovement = 400;

            gsap.set(projectsBoxes, { x: 0 });

            projectsSection.addEventListener("mousemove", function(e) {
                var rect = projectsSection.getBoundingClientRect();
                var sectionCenter = rect.width / 2;
                mouseX = ((e.clientX - rect.left) - sectionCenter) / sectionCenter;
                targetX = -mouseX * maxMovement;
            });

            gsap.ticker.add(function() {
                if (projectsBoxes) {
                    gsap.to(projectsBoxes, {
                        x: targetX,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            });
            
            projectsSection.addEventListener("mouseleave", function() {
                targetX = 0;
            });
        }

    }

    window.initGSAPUtilities = initGSAPUtilities;

})();