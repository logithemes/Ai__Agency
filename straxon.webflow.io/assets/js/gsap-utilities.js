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


        // ABOUT US HOME TWO INFINITY LOOP
        
    document.querySelectorAll(".who-we-are-marquee").forEach(function (track) {

        // Clone until content is at least twice the viewport width
        while (track.scrollWidth < window.innerWidth * 2) {
            track.innerHTML += track.innerHTML;
        }

        const moveWidth = track.scrollWidth / 2;

        gsap.to(track, {
            x: -moveWidth,
            duration: 30,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: function (x) {
                    return (parseFloat(x) % moveWidth) + "px";
                }
            }
        });

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


    }

    window.initGSAPUtilities = initGSAPUtilities;

})();