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
            var cards = gsap.utils.toArray(".landing-cards, .service-sticky, .blog-three-posts-image, .portfolio-sticky-images");
            
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


// GSAP POSITION STICKY IMAGES WITH NUMBER
 // GSAP position-sticky images with counter sync
 const shadowCards = gsap.utils.toArray(".portfolio-sticky-images");
 const darkCounters = gsap.utils.toArray(".portfolio-counter");
 const voidWrapper = document.querySelector(".portfolio-sticky-wrapper .portfolio-sticky-inner");

 if (voidWrapper && shadowCards.length && darkCounters.length) {
   const nightMedia = gsap.matchMedia();

   nightMedia.add(
     {
       darkDesk: "(min-width: 992px)",
       darkTab: "(min-width: 768px) and (max-width: 991px)",
       darkMob: "(max-width: 767px)",
     },
     (context) => {
       const { darkDesk, darkTab, darkMob } = context.conditions;
         const baseSpan = "100%";
        const headerSpan = darkDesk ? "120px" : darkTab ? "71px" : "80px";
        const viewportH = window.innerHeight;
       const initY = darkMob ? viewportH * 0.8 : viewportH;

       shadowCards.forEach((deck, idx) => {
         const targetCounter = darkCounters[idx];
         gsap.set(deck, {
           position: "absolute",
           left: 0,
           top: 0,
           opacity: 1,
           y: idx === 0 ? 0 : initY,
           scale: 1,
           width: baseSpan,
           zIndex: idx + 1,
         });

         if (targetCounter) {
           gsap.set(targetCounter, {
             position: "absolute",
             top: 0,
             left: 0,
             y: idx === 0 ? 0 : initY,
             opacity: idx === 0 ? 1 : 0,
           });
         }
       });

       const deckGap = 20;
       const darkBuffer = 100;
       const scrollSpan = (shadowCards.length - 1) * initY + shadowCards.length * deckGap + darkBuffer;

       const obsidianTimeline = gsap.timeline({
         scrollTrigger: {
           trigger: voidWrapper,
           start: `top top+=${headerSpan}`,
           end: `+=${scrollSpan}`,
           scrub: 0.8,
           pin: true,
           pinSpacing: true,
           anticipatePin: 1,
           invalidateOnRefresh: true,
         },
       });

       shadowCards.forEach((deck, idx) => {
         if (idx === 0) return;
         const stepPhase = idx - 0.5;
         const targetSpan = baseSpan;

         obsidianTimeline.fromTo(
           deck,
           { y: initY, width: baseSpan, zIndex: idx },
           {
             y: 0,
             width: targetSpan,
             zIndex: shadowCards.length + idx,
             duration: 0.5,
             ease: "power1.inOut",
           },
           stepPhase
         );

         if (darkCounters[idx - 1]) {
           obsidianTimeline.to(
             darkCounters[idx - 1],
             { y: "-100%", opacity: 0, duration: 0.5, ease: "power1.inOut" },
             stepPhase
           );
         }

         if (darkCounters[idx]) {
           obsidianTimeline.to(
             darkCounters[idx],
             { y: 0, opacity: 1, duration: 0.5, ease: "power1.inOut" },
             stepPhase
           );
         }
       });
     }
   );
 }
   
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



