document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

    /* ===============================
       WORD SCROLL ANIMATION
    =============================== */
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
                color: "#fff",
                stagger: 0.05,
                ease: "none"
            });
        });
    }

    /* ✅ CALLS */
    wordScrollAnimation('.service-three-connection', '.service-three-text');
    wordScrollAnimation('.home-three-skills', '.home-three-skills .home-three-skills-description p');
    wordScrollAnimation('.home-popup-video', '.home-popup-video-desc');

    /* ===============================
       INDEX PAGE GSAP ANIMATIONS
       Disabled to prevent unexpected fade-in motion on the landing page.
    =============================== */
    const shouldRunIndexAnimations = false;

    if (shouldRunIndexAnimations) {
        const landingHeroWrap = document.querySelector('.landing-hero-wrap');
        if (landingHeroWrap) {
            const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
            heroTimeline
                .from('.landing-hero-wrap .landing-text', {
                    opacity: 0,
                    y: 24,
                    duration: 0.8
                }, 0.3)
                .from('.landing-hero-wrap h1', {
                    opacity: 0,
                    y: 24,
                    duration: 0.8
                }, 0.6)
                .from('.landing-hero-wrap .hero-details', {
                    opacity: 0,
                    y: 24,
                    duration: 0.8,
                    stagger: 0.15
                }, 0.9)
                .from('.landing-hero-wrap .button-wrapper', {
                    opacity: 0,
                    y: 20,
                    duration: 0.8
                }, 1.5)
                .from('.landing-hero-image-one', {
                    opacity: 0,
                    y: 30,
                    duration: 1
                }, 0.8)
                .from('.landing-hero-image-two', {
                    opacity: 0,
                    y: 30,
                    duration: 1
                }, 0.9)
                .from('.landing-hero-image-three', {
                    opacity: 0,
                    y: 30,
                    duration: 1
                }, 1.0)
                .from('.landing-hero-image-four', {
                    opacity: 0,
                    y: 30,
                    duration: 1
                }, 1.1);
        }

        const homeOneHero = document.querySelector('.home-one-hero');
        if (homeOneHero) {
            const homeOneTimeline = gsap.timeline({ defaults: { opacity: 0, y: 30, ease: 'power3.out' } });
            homeOneTimeline
                .from('.home-one-hero .home-one-hero-text span.text-capitalize', { duration: 0.8 }, 0.2)
                .from('.home-one-hero .hero-heading-gap', { duration: 0.8 }, 0.4)
                .from('.home-one-hero-description', { duration: 0.8 }, 0.6)
                .from('.home-one-hero .button-wrapper', { duration: 0.8 }, 0.8)
                .from('.home-one-hero .tp-scroll-indicator', { duration: 0.8 }, 1.0)
                .from('.little-boy-image-wrapper', { y: 40, duration: 1 }, 1.2)
                .from('.girl-image-wrapper', { y: 40, duration: 1 }, 1.4);

            const homeOneServiceCards = gsap.utils.toArray('.home-one-service-cards');
            if (homeOneServiceCards.length) {
                gsap.from(homeOneServiceCards, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.18,
                    delay: 0.3
                });
            }
        }

        gsap.utils.toArray('.section-title, .features-box-one, .features-box-two, .features-box-three, .landing-cards').forEach((element) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.1
            });
        });
    }

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
       FOUR CARDS REVEAL ANIMATION (.tp-clip-path-wrapper)
    =============================== */
    const workItems = gsap.utils.toArray(".tp-clip-path-wrapper");
    if (workItems.length > 0) {
        workItems.forEach((container) => {
            const revealMedia = container.querySelector("img");
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
    const screenshotsTop = document.querySelector(".tp-screenshot-wrap.top");
    if (screenshotsTop) {
        gsap.to(".tp-screenshot-wrap.top", {
            y: "+=300",
            duration: 17,
            repeat: -1,
            ease: "none"
        });
    }

    const screenshotsBottom = document.querySelector(".tp-screenshot-wrap.bottom");
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
    // document.addEventListener("shown.bs.tab", (event) => {
    //     const targetPane = document.querySelector(event.target.getAttribute("href"));
    //     if (!targetPane) return;
        
    //     const image = targetPane.querySelector("img");
    //     if (!image) return;
        
    //     gsap.fromTo(image, { opacity: 0, scale: 0.8 }, {
    //         opacity: 1,
    //         scale: 1,
    //         duration: 0.6,
    //         ease: "power2.out"
    //     });
    // });

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
    const numbers = document.querySelectorAll('.services-counter .heading-one');
    const cardsList = document.querySelectorAll('.service-sticky');
    
    if (numbers.length > 0 && cardsList.length > 0) {
        gsap.set(numbers, { autoAlpha: 0 });
        
        if (numbers[0]) {
            gsap.set(numbers[0], { autoAlpha: 1 });
        }
        
        cardsList.forEach((card, index) => {
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
    const scaleSections = gsap.utils.toArray(".image-scale-section");
    if (scaleSections.length > 0) {
        scaleSections.forEach((section) => {
            const image = section.querySelector(".image-scale-media");
            if (!image) return;

            gsap.fromTo(
                image,
                { scale: 0.7 },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        });
    }

    /* ===============================
       HOMEONE / GO TO DOWN (FIXED - Only runs if element exists)
    =============================== */
    function animateScrollIndicator() {
        const element = document.querySelector(".tp-scroll-indicator__line");
        if (!element) {
            // Silently exit - no error
            return;
        }
        
        gsap.fromTo(
            element,
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

    // Only try to animate if element exists
    if (document.querySelector(".tp-scroll-indicator__line")) {
        animateScrollIndicator();
    }

    /* ===============================
       HOMEONE / STORY IMG
    =============================== */
    const revealWraps = gsap.utils.toArray(".tp-reveal-wrap");
    if (revealWraps.length > 0) {
        revealWraps.forEach((section) => {
            const image = section.querySelector(".tp-reveal-img");
            if (!image) return;

            gsap.fromTo(
                image,
                { scale: 1.3, clipPath: "inset(20% 20% 20% 20% round 20px)" },
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
    }
    
//     // FADE IN ANIMATION ALL
window.addEventListener("load", function () {

    gsap.registerPlugin(ScrollTrigger);

    const animations = {
        ".tp-fade-up": {
            y: 50,
            opacity: 0
        },
        ".tp-fade-left": {
            x: -50,
            opacity: 0
        },
        ".tp-fade-right": {
            x: 50,
            opacity: 0
        },
        ".tp-zoom-in": {
            scale: 0.8,
            opacity: 0
        },
        ".tp-zoom-out": {
            scale: 1.2,
            opacity: 0
        }
    };

    Object.entries(animations).forEach(([selector, fromVars]) => {

        gsap.utils.toArray(selector).forEach((item) => {

            gsap.from(item, {
                ...fromVars,
                duration: 1,
                ease: "power3.out",
                delay: parseFloat(item.dataset.delay) || 0,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    once: true
                }
            });

        });

    });

    ScrollTrigger.refresh();

});
    /* ===============================
       BLOG DETAILS / ANIM-WRAP (FIXED - Only runs if element exists)
    =============================== */
    const animWrap = document.querySelector(".tp-anim-wrap");
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
});

