document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

    /* ===============================
       WORD SCROLL ANIMATION
    =============================== */
    // function wordScrollAnimation(sectionSelector, textSelector) {
    //     const section = document.querySelector(sectionSelector);
    //     if (!section) return;

    //     const textEl = section.querySelector(textSelector);
    //     if (!textEl) return;

    //     const words = textEl.innerText.split(" ");

    //     textEl.innerHTML = words.map(word =>
    //         `<span class="word">${word}</span><span class="space"> </span>`
    //     ).join("");

    //     const wordEls = textEl.querySelectorAll(".word");
    //     if (wordEls.length === 0) return;

    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: section,
    //             start: "top 80%",
    //             end: "top 20%",
    //             scrub: true
    //         }
    //     }).from(wordEls, {
    //         opacity: 0,
    //         color: "#ffffff",
    //         stagger: 0.05,
    //         ease: "none"
    //     });
    // }

    // /* CALL WORD SCROLL FUNCTIONS - WITH NULL CHECKS */
    // if (document.querySelector('.service-three-connection')) {
    //     wordScrollAnimation('.service-three-connection', '.service-three-text');
    // }
    
    // if (document.querySelector('.home-popup-video')) {
    //     wordScrollAnimation('.home-popup-video', '.home-popup-video-desc');
    // }

    gsap.registerPlugin(ScrollTrigger);

function wordScrollAnimation(sectionSelector, textSelector) {

  const section = document.querySelector(sectionSelector);
  if (!section) return;

  // get ALL matching elements (fix for multiple selectors)
  const textEls = document.querySelectorAll(textSelector);
  if (!textEls.length) return;

  textEls.forEach(textEl => {

    // avoid re-running on same element
    if (textEl.classList.contains("word-animated")) return;
    textEl.classList.add("word-animated");

    const words = textEl.innerText.trim().split(" ");

    textEl.innerHTML = words.map(word =>
      `<span class="word">${word}</span><span class="space"> </span>`
    ).join("");

    const wordEls = textEl.querySelectorAll(".word");

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
  color: "#fff", // ✅ animate to white
  stagger: 0.05,
  ease: "none"
});

  });
}

/* ✅ CALLS */

// service section
wordScrollAnimation('.service-three-connection', '.service-three-text');

// home three skills section (your case)
wordScrollAnimation('.home-three-skills', '.home-three-skills .home-three-skills-description p');

// popup video
wordScrollAnimation('.home-popup-video', '.home-popup-video-desc');

    /* ===============================
       HAMBURGER MENU
    =============================== */
    const hamburgers = document.querySelectorAll(".navbar-three-hamburger, .navbar-three-toggle, .humburger-wrapper");
    
    hamburgers.forEach((hamburger) => {
        if (!hamburger) return;
        
        const barOne = hamburger.querySelector(".navbar-three-bar-one, .humburger-bar-one");
        const barTwo = hamburger.querySelector(".navbar-three-bar-two, .humburger-bar-two");

        if (!barOne || !barTwo) return;

        let isOpen = false;

        hamburger.addEventListener("click", () => {
            if (!isOpen) {
                gsap.to(barOne, { rotation: 45, y: 4, duration: 0.3, ease: "power2.out" });
                gsap.to(barTwo, { rotation: -45, y: -4, width: 24, duration: 0.3, ease: "power2.out" });
                isOpen = true;
            } else {
                gsap.to(barOne, { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(barTwo, { rotation: 0, y: 0, width: 12, duration: 0.3, ease: "power2.out" });
                isOpen = false;
            }
        });
    });

    /* ===============================
       HOME ONE PORTFOLIO SCROLL
    =============================== */
  gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".tp-reveal-x").forEach((container) => {

  const revealMedia = container.querySelector("img");

  const revealTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none reset"
    }
  });

  revealTimeline.set(container, {
    autoAlpha: 1
  });

  revealTimeline.from(container, {
    xPercent: -100,
    duration: 1.5,
    ease: "power2.out"
  });

  revealTimeline.from(revealMedia, {
    xPercent: 100,
    scale: 1.3,
    duration: 1.5,
    delay: -1.5,
    ease: "power2.out"
  });

});

    /* ===============================
       HOME TWO TESTIMONIAL ROW SCROLL
    =============================== */
    const homeTwoTestimonial = document.querySelector(".home-two-testimonial");
    if (homeTwoTestimonial) {
        const rowOne = document.querySelector(".home-two-testimonial-row-one");
        const rowTwo = document.querySelector(".home-two-testimonial-row-two");
        
        if (rowOne || rowTwo) {
            gsap.to([rowOne, rowTwo].filter(el => el), {
                yPercent: -55,
                ease: "none",
                scrollTrigger: {
                    trigger: ".home-two-testimonial",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }
    }

    /* ===============================
       EXPLORE CURSOR
    =============================== */
    const explore = document.querySelector(".explore-now");
    if (explore) {
        const cards = gsap.utils.toArray(".landing-cards, .service-sticky, .blog-three-posts-image");
        
        cards.forEach((card) => {
            if (!card) return;
            
            card.addEventListener("mouseenter", () => {
                gsap.to(explore, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(explore, {
                    opacity: 0,
                    duration: 0.4
                });
            });

            card.addEventListener("mousemove", (e) => {
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
       PROGRESS BAR
    =============================== */
    const progressSection = document.querySelector(".progress-scroll");
    if (progressSection) {
        const bars = progressSection.querySelectorAll(".about-progress-gradiant-bar");
        
        if (bars.length > 0) {
            const targetWidths = [95, 91, 98];
            
            gsap.fromTo(bars, { width: "0%" }, {
                width: (i) => `${targetWidths[i] || targetWidths[0]}%`,
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
       SCREENSHOT LOOP
    =============================== */
    const screenshotsTop = document.querySelector(".screenshots.top");
    if (screenshotsTop) {
        gsap.to(".screenshots.top", {
            y: "+=300",
            duration: 17,
            repeat: -1,
            ease: "none"
        });
    }

    const screenshotsBottom = document.querySelector(".screenshots.bottom");
    if (screenshotsBottom) {
        gsap.to(".screenshots.bottom", {
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
        
        const containerWidth = train.parentElement.offsetWidth;
        let totalWidth = train.scrollWidth;
        
        while (totalWidth < containerWidth && train.children.length > 0) {
            Array.from(train.children).forEach(child => {
                if (child) train.appendChild(child.cloneNode(true));
            });
            totalWidth = train.scrollWidth;
        }
        return totalWidth;
    }

    document.querySelectorAll(".marquee-train-left, .home-three-marquee").forEach((train) => {
        if (!train) return;
        const trainWidth = fillWithClones(train);
        if (trainWidth > 0) {
            gsap.to(train, {
                x: `-=${trainWidth}`,
                duration: 50,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % (trainWidth / 2))
                }
            });
        }
    });

    document.querySelectorAll(".marquee-train-right").forEach((train) => {
        if (!train) return;
        const trainWidth = fillWithClones(train);
        if (trainWidth > 0) {
            gsap.to(train, {
                x: `+=${trainWidth}`,
                duration: 20,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % (trainWidth / 2))
                }
            });
        }
    });

    /* ===============================
       IMAGE 3D HOVER
    =============================== */
    document.querySelectorAll(".img-hover-3d").forEach((img) => {
        if (!img) return;
        
        img.addEventListener("mousemove", (ev) => {
            const rect = img.getBoundingClientRect();
            const offsetX = ev.clientX - rect.left;
            const offsetY = ev.clientY - rect.top;
            const rotateY = gsap.utils.clamp(-15, 15, ((offsetX / rect.width) - 0.9) * 10);
            const rotateX = gsap.utils.clamp(-15, 15, ((offsetY / rect.height) - 0.9) * -10);
            
            gsap.to(img, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 10000,
                ease: "power2.out",
                duration: 0.3
            });
        });
        
        img.addEventListener("mouseleave", () => {
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
    const projectsSection = document.querySelector(".projects-section");
    const projectsBoxes = document.querySelector(".home-two-projects-boxes");
    
    if (projectsSection && projectsBoxes) {
        let mouseX = 0;
        let targetX = 0;
        const maxMovement = 400;

        gsap.set(projectsBoxes, { x: 0 });

        projectsSection.addEventListener("mousemove", (e) => {
            const rect = projectsSection.getBoundingClientRect();
            const sectionCenter = rect.width / 2;
            mouseX = ((e.clientX - rect.left) - sectionCenter) / sectionCenter;
            targetX = -mouseX * maxMovement;
        });

        gsap.ticker.add(() => {
            if (projectsBoxes) {
                gsap.to(projectsBoxes, {
                    x: targetX,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
        
        projectsSection.addEventListener("mouseleave", () => {
            targetX = 0;
        });
    }

    /* ===============================
       SERVICES TAB IMAGE
    =============================== */
    document.addEventListener("shown.bs.tab", (event) => {
        const targetPane = document.querySelector(event.target.getAttribute("href"));
        if (!targetPane) return;
        
        const image = targetPane.querySelector("img");
        if (!image) return;
        
        gsap.fromTo(image, { opacity: 0, scale: 0.8 }, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
        });
    });

    /* ===============================
       TESTIMONIAL HEADING
    =============================== */
    const testimonialSection = document.querySelector(".home-two-testimonial, .home-three-testimonial");
    const testimonialHeading = document.querySelector(".home-two-testimonial-heading, .testimonial-three-big-text");
    
    if (testimonialSection && testimonialHeading) {
        gsap.set(testimonialHeading, { x: "100%" });
        
        gsap.to(testimonialHeading, {
            x: "0%",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: testimonialSection,
                start: "top 80%"
            }
        });

        gsap.to(testimonialHeading, {
            x: "-60%",
            ease: "none",
            scrollTrigger: {
                trigger: testimonialSection,
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        });
    }

    /* ===============================
       LINE SCROLL
    =============================== */
    const scrollLineAni = document.querySelector(".scroll-line-ani");
    const line = document.querySelector(".line");
    
    if (scrollLineAni && line) {
        gsap.to(".line", {
            height: "100%",
            ease: "none",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".scroll-line-ani",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }

    /* ===============================
       SERVICES COUNTER
    =============================== */
    gsap.registerPlugin(ScrollTrigger);
    
    const numbers = document.querySelectorAll('.services-counter .heading-one');
    const cards = document.querySelectorAll('.service-sticky');
    
    if (numbers.length > 0 && cards.length > 0) {
        gsap.set(numbers, { autoAlpha: 0 });
        
        if (numbers[0]) {
            gsap.set(numbers[0], { autoAlpha: 1 });
        }
        
        cards.forEach((card, index) => {
            if (!card || !numbers[index]) return;
            
            ScrollTrigger.create({
                trigger: card,
                start: "top center",
                end: "bottom center",
                onEnter: () => activateNumber(index),
                onEnterBack: () => activateNumber(index)
            });
        });
    }

    function activateNumber(index) {
        if (!numbers.length || !numbers[index]) return;
        
        gsap.to(numbers, {
            autoAlpha: 0,
            duration: 0.25,
            ease: "power2.out"
        });

        gsap.to(numbers[index], {
            autoAlpha: 1,
            duration: 0.35,
            ease: "power2.out"
        });
    }

    /* ===============================
       HOME ONE MOUSE PARALLAX
    =============================== */
    const heroSection = document.querySelector('.parallax-hero-sec');
    
    if (heroSection) {
        const girlWrapper = document.querySelector('.parallax-img-one');
        const boyWrapper = document.querySelector('.little-boy-image-wrapper img');
        const borderMovementBar = document.querySelector('.border-movement-bar');
        
        if (girlWrapper && boyWrapper && borderMovementBar) {
            heroSection.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = heroSection.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                gsap.to(girlWrapper, {
                    x: x * -20,
                    y: y * -20,
                    duration: 0.8,
                    ease: "power2.out"
                });

                gsap.to(boyWrapper, {
                    x: x * 20,
                    y: y * 20,
                    duration: 0.8,
                    ease: "power2.out"
                });

                gsap.to(borderMovementBar, {
                    x: x * 250,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

            heroSection.addEventListener('mouseleave', () => {
                gsap.to([girlWrapper, boyWrapper], {
                    x: 0,
                    y: 0,
                    duration: 0.5
                });

                gsap.to(borderMovementBar, {
                    x: 0,
                    duration: 0.5
                });
            });
        }
    }

    
    

    /* ===============================
       ABOUT / HOME THREE MOUSE PARALLAX
    =============================== */
    const aboutHero = document.querySelector('.about-two-hero, .common-parallax-hover');

    if (aboutHero) {
        const images = document.querySelectorAll(
            '.about-two-hero-image-one, .about-two-hero-image-two, .about-two-hero-image-three, .about-two-hero-image-four, .about-two-hero-image-five, .common-parallax-div' 
        );

        if (images.length > 0) {
            aboutHero.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = aboutHero.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                
                images.forEach((img, index) => {
                    if (!img) return;
                    const speed = (index + 1) * 15;
                    gsap.to(img, {
                        x: x * speed,
                        y: y * speed,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                });
            });
            
            aboutHero.addEventListener('mouseleave', () => {
                gsap.to(images, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });
        }
    }

  



    /* ===============================
       INDEX / SCALE IMG
    =============================== */
    gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".image-scale-section").forEach((section) => {

  const image = section.querySelector(".image-scale-media");

  gsap.fromTo(
    image,
    {
      scale: 0.7,
    },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

});


    /* ===============================
       HOMEONE / GO TO DOWN
    =============================== */
gsap.fromTo(
  ".tp-scroll-indicator__line",
  {
    y: -15,
    opacity: 0
  },
  {
    y: 3,
    opacity: 1,
    duration: 1.5,
    ease: "power8.out",
    repeat: -1
  }
);


  /* ===============================
       HOMEONE / STROY IMG
    =============================== */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".tp-reveal-wrap").forEach((section) => {

  const image = section.querySelector(".tp-reveal-img");

  gsap.fromTo(
    image,
    {
      scale: 1.3,
      clipPath: "inset(20% 20% 20% 20% round 20px)"
    },
    {
      scale: 1,
      clipPath: "inset(0% 0% 0% 0% round 20px)",
      ease: "expo.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 20%",
        scrub: true,
      }
    }
  );

});



  /* ===============================
       BLOG DETAILS  / ANIM-WRAP
    =============================== */
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

    /* ===============================
       ADDITIONAL SAFE CHECKS FOR COMMON ELEMENTS
    =============================== */
    // Fix for any remaining NodeList issues
    
    const safeGsapTo = (selector, vars) => {
        if (typeof selector === 'string') {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                return gsap.to(elements, vars);
            }
        } else if (selector && selector.length) {
            // It's a NodeList or array
            const validElements = Array.from(selector).filter(el => el);
            if (validElements.length > 0) {
                return gsap.to(validElements, vars);
            }
        } else if (selector) {
            // Single element
            return gsap.to(selector, vars);
        }
        return null;
    };

    // You can use safeGsapTo instead of gsap.to for extra safety
    // Example: safeGsapTo(".some-class", {opacity: 1});
});




