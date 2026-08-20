/**
 * Utilities - Theme Functionality
 * Handles service tabs, card overlays, rotating buttons, arrow toggles,
 * sticky header, and pricing plan toggles
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
     * Initializes all utility functions when DOM is ready
     * 
     * @since 1.0.0
     */
    $(document).ready(function() {

        /**
         * Service Tab Active Class
         * Adds/removes active state on service tab links
         * 
         * @since 1.0.0
         */
        if ($('.tp-service-tab-links').length) {
            $('.tp-service-tab-links').on('click', function() {
                var $this = $(this);
                $('.tp-service-tab-links').removeClass('tp-active');
                $this.addClass('tp-active');
            });
        }

        /**
         * Service Three Cards Overlay
         * Shows overlay on card mouseenter
         * 
         * @since 1.0.0
         */
        if ($('.service-three-cards').length) {
            $('.service-three-cards').on('mouseenter', function() {
                var $this = $(this);
                $('.service-three-cards-overlay').removeClass('service-tp-in-active');
                $this.children('.service-three-cards-overlay').addClass('service-tp-in-active');
            });
        }

        /**
         * Rotating Button Effect
         * Continuous rotation for border-effect buttons
         * 
         * @since 1.0.0
         */
       

        /**
         * Arrow Rotate Toggle
         * Rotates arrow icon on click
         * 
         * @since 1.0.0
         */
        if ($('.arrow-right').length) {
            $('.arrow-right').on('click', function() {
                var $this = $(this);
                var currentArrow = $this.find('.rotate-arrow');
                
                // Reset all other arrows
                $('.rotate-arrow').not(currentArrow).css({
                    'transform': 'rotate(0deg)'
                });
                
                // Toggle current arrow
                currentArrow.toggleClass('active');
                
                if (currentArrow.hasClass('active')) {
                    currentArrow.css('transform', 'rotate(180deg)');
                } else {
                    currentArrow.css('transform', 'rotate(0deg)');
                }
            });
        }

        /**
         * Pricing Plan Toggle
         * Switches between monthly and yearly pricing plans
         * 
         * @since 1.0.0
         */
        if ($('#monthly-tab').length && $('#yearly-tab').length) {
            
            /**
             * Monthly Pricing
             * Displays monthly prices with "/Per Month" suffix
             */
            $('#monthly-tab').on('click', function() {
                var $this = $(this);
                
                // Update all price items
                $('.price-item').each(function() {
                    var monthlyPrice = $(this).data('month');
                    if (monthlyPrice) {
                        // Safely update text content while preserving any child elements
                        $(this).contents().first()[0].textContent = '$' + monthlyPrice + ' ';
                        $(this).find('span').text('/Per Month');
                    }
                });
                
                // Toggle active states
                $this.addClass('tp-active');
                $('#yearly-tab').removeClass('tp-active');
            });

            /**
             * Yearly Pricing
             * Displays yearly prices with "/Per Year" suffix
             */
            $('#yearly-tab').on('click', function() {
                var $this = $(this);
                
                // Update all price items
                $('.price-item').each(function() {
                    var yearlyPrice = $(this).data('year');
                    if (yearlyPrice) {
                        // Safely update text content while preserving any child elements
                        $(this).contents().first()[0].textContent = '$' + yearlyPrice + ' ';
                        $(this).find('span').text('/Per Year');
                    }
                });
                
                // Toggle active states
                $this.addClass('tp-active');
                $('#monthly-tab').removeClass('tp-active');
            });
        }

    }); // End document ready

    /**
     * ============================================
     * STICKY HEADER
     * ============================================
     * Adds sticky class to navbar on scroll
     * Placed outside document.ready for better performance
     * 
     * @since 1.0.0
     */
    (function() {
        var navbars = document.querySelectorAll('.tp-top-navbar, .navbar-three');
        
        if (navbars.length) {
            window.addEventListener('scroll', function() {
                var topVal = window.scrollY || document.documentElement.scrollTop;
                var i, navbar;
                
                for (i = 0; i < navbars.length; i++) {
                    navbar = navbars[i];
                    if (topVal >= 100) {
                        navbar.classList.add('header-sticky');
                    } else {
                        navbar.classList.remove('header-sticky');
                    }
                }
            });
        }
    })();

})(jQuery);