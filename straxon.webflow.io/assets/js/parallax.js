"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /*----------------------------------------*/
    /*  Home One Mouse Parallax
    /*----------------------------------------*/

    const heroSection = document.querySelector(".parallax-hero-section");

    if (heroSection) {
        const girlWrapper = heroSection.querySelector(".parallax-img-one");
        const boyWrapper = heroSection.querySelector(
            ".little-boy-image-wrapper img"
        );
        const borderMovementBar = heroSection.querySelector(
            ".border-movement-bar"
        );

        if (girlWrapper && boyWrapper && borderMovementBar) {

            const girlX = gsap.quickTo(girlWrapper, "x", {
                duration: 0.8,
                ease: "power2.out"
            });

            const girlY = gsap.quickTo(girlWrapper, "y", {
                duration: 0.8,
                ease: "power2.out"
            });

            const boyX = gsap.quickTo(boyWrapper, "x", {
                duration: 0.8,
                ease: "power2.out"
            });

            const boyY = gsap.quickTo(boyWrapper, "y", {
                duration: 0.8,
                ease: "power2.out"
            });

            const borderX = gsap.quickTo(borderMovementBar, "x", {
                duration: 0.8,
                ease: "power2.out"
            });

            heroSection.addEventListener("mousemove", function (e) {

                const {
                    left,
                    top,
                    width,
                    height
                } = heroSection.getBoundingClientRect();

                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                girlX(x * -20);
                girlY(y * -20);

                boyX(x * 20);
                boyY(y * 20);

                borderX(x * 250);
            });

            heroSection.addEventListener("mouseleave", function () {

                girlX(0);
                girlY(0);

                boyX(0);
                boyY(0);

                borderX(0);
            });
        }
    }


    /*----------------------------------------*/
    /*  About / Home Three Mouse Parallax
    /*----------------------------------------*/

    const aboutHero = document.querySelector(
        ".about-two-hero, .common-parallax-hover"
    );

    if (aboutHero) {

        const images = aboutHero.querySelectorAll(
            ".about-two-hero-image-one, " +
            ".about-two-hero-image-two, " +
            ".about-two-hero-image-three, " +
            ".about-two-hero-image-four, " +
            ".about-two-hero-image-five, " +
            ".common-parallax-div"
        );

        if (images.length > 0) {

            const quickToX = [];
            const quickToY = [];

            images.forEach(function (img, index) {

                const speed = (index + 1) * 15;

                quickToX[index] = gsap.quickTo(img, "x", {
                    duration: 0.8,
                    ease: "power2.out"
                });

                quickToY[index] = gsap.quickTo(img, "y", {
                    duration: 0.8,
                    ease: "power2.out"
                });

                img.dataset.parallaxSpeed = speed;
            });

            aboutHero.addEventListener("mousemove", function (e) {

                const {
                    left,
                    top,
                    width,
                    height
                } = aboutHero.getBoundingClientRect();

                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                images.forEach(function (img, index) {

                    const speed = Number(
                        img.dataset.parallaxSpeed
                    );

                    quickToX[index](x * speed);
                    quickToY[index](y * speed);
                });
            });

            aboutHero.addEventListener("mouseleave", function () {

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