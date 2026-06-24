/**
 * Hamburger Animation
 * GSAP-based hamburger menu icon animation
 * Transforms hamburger bars to X shape on click
 * 
 * @package YourThemeName
 * @version 1.0.0
 * @author YourName
 * @license Themeforest Standard License
 */

(function() {
    "use strict";

    /**
     * Initialize Hamburger Animation
     * Creates GSAP-based hamburger menu toggle animation
     * 
     * @since 1.0.0
     */
    function initHamburger() {

        /**
         * Hamburger Menu Toggle
         * Animates hamburger bars to X shape on click
         * Supports multiple hamburger selectors
         */
        var hamburgers = document.querySelectorAll(
            ".navbar-three-hamburger, .navbar-three-toggle, .humburger-wrapper"
        );
        
        if (!hamburgers.length) return;

        hamburgers.forEach(function(hamburger) {
            if (!hamburger) return;
            
            // Find bar elements
            var barOne = hamburger.querySelector(".navbar-three-bar-one, .humburger-bar-one");
            var barTwo = hamburger.querySelector(".navbar-three-bar-two, .humburger-bar-two");

            if (!barOne || !barTwo) return;

            var isOpen = false;

            /**
             * Toggle hamburger animation
             * Transforms bars from hamburger to X and back
             */
            hamburger.addEventListener("click", function() {
                if (!isOpen) {
                    // Animate to X shape
                    gsap.to(barOne, {
                        rotation: 45,
                        y: 4,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    gsap.to(barTwo, {
                        rotation: -45,
                        y: -4,
                        width: 24,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    isOpen = true;
                } else {
                    // Animate back to hamburger
                    gsap.to(barOne, {
                        rotation: 0,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    gsap.to(barTwo, {
                        rotation: 0,
                        y: 0,
                        width: 12,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    isOpen = false;
                }
            });
        });

    }

    // Expose function globally
    window.initHamburger = initHamburger;

})();