// ============================================
// NAVIGATION & MENU
// ============================================

$(document).ready(function() {

    // Mobile Menu Toggle
    function handleMenu() {
        if ($(window).width() >= 992) {
            $('.main-menu')
                .removeAttr('style')
                .addClass('d-block')
                .removeClass('is-open');
        } else {
            $('.main-menu').removeClass('d-block');
        }
    }

    handleMenu();
    $(window).on('resize', function() {
        handleMenu();
    });

    // Hamburger Toggle
    $('.humburger-wrapper').on('click', function() {
        if ($(window).width() < 992) {
            $('.main-menu')
                .stop(true, true)
                .slideToggle(300)
                .toggleClass('is-open');
        }
    });

    // Menu Dropdown (Desktop & Mobile)
    const isMobile = () => window.innerWidth < 992;

    $('.tp-dropdown').on('mouseenter', function() {
        if (!isMobile()) {
            $(this)
                .find('.dp-menu, .mega-menu')
                .stop(true, true)
                .css('visibility', 'visible')
                .slideDown(300);
        }
    });

    $('.tp-dropdown').on('mouseleave', function() {
        if (!isMobile()) {
            $(this)
                .find('.dp-menu')
                .stop(true, true)
                .slideUp(300);
        }
    });

    $('.tp-dropdown-toggle').on('click', function(e) {
        if (isMobile()) {
            e.preventDefault();
            const dropdown = $(this)
                .closest('.tp-dropdown')
                .find('.dp-menu');
            $('.dp-menu').not(dropdown).each(function() {
                $(this).css('visibility', 'hidden').slideUp(300);
            });
            if (dropdown.is(':visible')) {
                dropdown.slideUp(300, function() {
                    $(this).css('visibility', 'hidden');
                });
            } else {
                dropdown
                    .css('visibility', 'visible')
                    .stop(true, true)
                    .slideDown(300);
            }
        }
    });

});