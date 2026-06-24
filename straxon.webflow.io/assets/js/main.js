/**
 * Main Initialization
 * Initializes all theme components in correct dependency order
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
     * Initializes all components when DOM is ready
     * 
     * @since 1.0.0
     */
    $(document).ready(function() {

        // ============================================
        // 1. JQUERY-BASED COMPONENTS
        // (No dependencies on GSAP or Swiper)
        // ============================================

        /**
         * 1a. Initialize Utilities
         * Service tabs, cards, arrow rotate, rotating buttons
         */
        if (typeof window.initUtilities === 'function') {
            window.initUtilities();
        }

        /**
         * 1b. Initialize Pricing
         * Monthly/Yearly pricing plan toggles
         */
        if (typeof window.initPricing === 'function') {
            window.initPricing();
        }

        /**
         * 1c. Initialize Counter
         * Number counting animation on scroll
         */
        if (typeof window.initCounter === 'function') {
            window.initCounter();
        }

        /**
         * 1d. Initialize Menu (jQuery)
         * Navigation, dropdowns, mobile menu toggle
         */
        if (typeof window.initMenu === 'function') {
            window.initMenu();
        }


        // ============================================
        // 2. GSAP-BASED COMPONENTS
        // (Depends on GSAP + ScrollTrigger)
        // ============================================

        /**
         * 2a. Initialize Hamburger Animation
         * GSAP hamburger icon animation (X shape)
         */
        if (typeof window.initHamburger === 'function') {
            window.initHamburger();
        }

        /**
         * 2b. Initialize GSAP Animations
         * Word animations, cards reveal, progress bars, fade effects
         */
        if (typeof window.initGSAPAnimations === 'function') {
            window.initGSAPAnimations();
        }

        /**
         * 2c. Initialize GSAP Utilities
         * Marquee, cursor effects, 3D hover, screenshot loop
         */
        if (typeof window.initGSAPUtilities === 'function') {
            window.initGSAPUtilities();
        }


        // ============================================
        // 3. SLIDER COMPONENTS
        // (Depends on Swiper)
        // ============================================

        /**
         * 3a. Initialize Sliders
         * All Swiper sliders
         */
        if (typeof window.initSliders === 'function') {
            window.initSliders();
        }


        // ============================================
        // 4. OTHER COMPONENTS
        // ============================================

        /**
         * 4a. Initialize Sticky Header
         * Adds sticky class on scroll
         */
        if (typeof window.initStickyHeader === 'function') {
            window.initStickyHeader();
        }

        /**
         * 4b. Initialize Parallax
         * Parallax effects
         */
        if (typeof window.initParallax === 'function') {
            window.initParallax();
        }


        // ============================================
        // 5. FINAL CALLBACK
        // ============================================

        console.log('Theme initialized successfully');

    }); // End document ready

})(jQuery);