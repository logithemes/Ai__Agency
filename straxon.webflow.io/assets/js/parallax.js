 document.addEventListener("DOMContentLoaded", function () {
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
});