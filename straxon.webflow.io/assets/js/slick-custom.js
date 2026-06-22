// // ============================================
// // MAIN JS - All non-slider functionality
// // ============================================

// $(document).ready(function() {

//     // ============================================
//     // SERVICE TABS
//     // ============================================
//     $('.tp-service-tab-links').on('click', function() {
//         $('.tp-service-tab-links').removeClass('tp-active');
//         $(this).addClass('tp-active');
//     });

//     // ============================================
//     // PRICING PLAN
//     // ============================================
//     $("#monthly-tab").on("click", function() {
//         $(".price-item").each(function() {
//             let month = $(this).data("month");
//             $(this).contents().first()[0].textContent = "$" + month + " ";
//             $(this).find("span").text("/Per Month");
//         });
//         $("#monthly-tab").addClass("tp-active");
//         $("#yearly-tab").removeClass("tp-active");
//     });

//     $("#yearly-tab").on("click", function() {
//         $(".price-item").each(function() {
//             let year = $(this).data("year");
//             $(this).contents().first()[0].textContent = "$" + year + " ";
//             $(this).find("span").text("/Per Year");
//         });
//         $("#yearly-tab").addClass("tp-active");
//         $("#monthly-tab").removeClass("tp-active");
//     });

//     // ============================================
//     // COUNTER ANIMATION
//     // ============================================
//     let started = false;

//     function startCounter() {
//         if (started) return;
//         $('.counter-wrapper').each(function() {
//             let $this = $(this);
//             let target = parseInt($this.attr("data-target"));
//             let count = 0;
//             let interval = setInterval(() => {
//                 count++;
//                 $this.text(count < 10 ? "0" + count : count);
//                 if (count >= target) {
//                     clearInterval(interval);
//                 }
//             }, 40);
//         });
//         started = true;
//     }

//     if ($('.counters-wrapper').length) {
//         $(window).on('scroll', function() {
//             let sectionTop = $('.counters-wrapper').offset().top - window.innerHeight + 100;
//             if ($(window).scrollTop() > sectionTop) {
//                 startCounter();
//             }
//         });
//     }

//     // ============================================
//     // SERVICE THREE CARDS
//     // ============================================
//     $(".service-three-cards").on("mouseenter", function() {
//         $(".service-three-cards-overlay").removeClass("service-tp-in-active");
//         $(this).children(".service-three-cards-overlay").addClass("service-tp-in-active");
//     });

//     // ============================================
//     // ROTATING BUTTON
//     // ============================================
//     const rotatingTexts = document.querySelectorAll('.button-border-effect');
//     rotatingTexts.forEach((el) => {
//         let angle = 0;
//         setInterval(() => {
//             angle += 1;
//             el.style.transform = `rotateZ(${angle}deg)`;
//         }, 16);
//     });

//     // ============================================
//     // MOBILE MENU
//     // ============================================
//     function handleMenu() {
//         if ($(window).width() >= 992) {
//             $('.main-menu')
//                 .removeAttr('style')
//                 .addClass('d-block')
//                 .removeClass('is-open');
//         } else {
//             $('.main-menu').removeClass('d-block');
//         }
//     }

//     handleMenu();
//     $(window).on('resize', function() {
//         handleMenu();
//     });

//     $('.humburger-wrapper').on('click', function() {
//         if ($(window).width() < 992) {
//             $('.main-menu')
//                 .stop(true, true)
//                 .slideToggle(300)
//                 .toggleClass('is-open');
//         }
//     });

//     // ============================================
//     // NAVBAR DROPDOWN
//     // ============================================
//     $('.navbar-dropdown-toggle').hide();

//     $('.navbar-three-toggle').on('click', function(e) {
//         e.preventDefault();
//         const dropdown = $(this).next('.navbar-dropdown-toggle');
//         $('.navbar-dropdown-toggle').not(dropdown)
//             .slideUp(300)
//             .css('visibility', 'hidden');
//         dropdown
//             .css('visibility', 'visible')
//             .slideToggle(300);
//     });

//     // ============================================
//     // MENU DROPDOWN (DESKTOP & MOBILE)
//     // ============================================
//     const isMobile = () => window.innerWidth < 992;

//     $('.tp-dropdown').on('mouseenter', function() {
//         if (!isMobile()) {
//             $(this)
//                 .find('.dp-menu, .mega-menu')
//                 .stop(true, true)
//                 .css('visibility', 'visible')
//                 .slideDown(300);
//         }
//     });

//     $('.tp-dropdown').on('mouseleave', function() {
//         if (!isMobile()) {
//             $(this)
//                 .find('.dp-menu')
//                 .stop(true, true)
//                 .slideUp(300);
//         }
//     });

//     $('.tp-dropdown-toggle').on('click', function(e) {
//         if (isMobile()) {
//             e.preventDefault();
//             const dropdown = $(this)
//                 .closest('.tp-dropdown')
//                 .find('.dp-menu');
//             $('.dp-menu').not(dropdown).each(function() {
//                 $(this).css('visibility', 'hidden').slideUp(300);
//             });
//             if (dropdown.is(':visible')) {
//                 dropdown.slideUp(300, function() {
//                     $(this).css('visibility', 'hidden');
//                 });
//             } else {
//                 dropdown
//                     .css('visibility', 'visible')
//                     .stop(true, true)
//                     .slideDown(300);
//             }
//         }
//     });

//     // ============================================
//     // ARROW ROTATE
//     // ============================================
//     $('.arrow-right').on('click', function() {
//         const currentArrow = $(this).find('.rotate-arrow');
//         $('.rotate-arrow').not(currentArrow).css({
//             transform: 'rotate(0deg)'
//         });
//         currentArrow.toggleClass('active');
//         if (currentArrow.hasClass('active')) {
//             currentArrow.css('transform', 'rotate(180deg)');
//         } else {
//             currentArrow.css('transform', 'rotate(0deg)');
//         }
//     });

// });

// // ============================================
// // STICKY HEADER (Outside document.ready)
// // ============================================
// window.addEventListener("scroll", function() {
//     const topVal = window.scrollY || document.documentElement.scrollTop;
//     const navbars = document.querySelectorAll(".navbar, .navbar-three");
//     navbars.forEach((navbar) => {
//         if (topVal >= 100) {
//             navbar.classList.add("header-sticky");
//         } else {
//             navbar.classList.remove("header-sticky");
//         }
//     });
// });