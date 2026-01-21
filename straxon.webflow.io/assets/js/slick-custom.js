 $(document).ready(function(){

    // Slider 1
    $('.projec-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        { breakpoint: 991, settings: { slidesToShow: 3 } },
        { breakpoint: 767, settings: { slidesToShow: 1 } }
      ]
    });

    // Slider 2
    $('.choose-us-slider-services').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        { breakpoint: 767, settings: { slidesToShow: 1 } }
      ]
    });


    $('.about-three-slider').slick({
  dots: true,
  arrows: false,
  dots:true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'w-slider-dots d-flex ps-0 slide-nav w-slider-nav w-round', // custom dot container class
  customPaging: function(slider, i) {
    return '<div class="w-slider-dot"></div>';
  }
});


    // 401 
    // Handle password page URL check
if (/[?&]e=1(&|$)/.test(window.location.search)) {
  $('.w-password-page.w-form-fail').css('display', 'block');
}

  // Initially show first tab
  $('.home-two-faq-boxes').hide();
  $('.home-two-faq-boxes-one').show();

  $('.home-two-options').on('click', function(){
    let index = $(this).index();

    // Remove and add active class
    $('.home-two-options').removeClass('act');
    $(this).addClass('act');

    // Animate accordion-line
    $('.accordion-line').css('width', '0');
    $(this).find('.accordion-line').css('width', '100px');

    // Show corresponding left content
    $('.home-two-faq-boxes').hide().eq(index).fadeIn(400);
  });

 $('.tab-links').on('click', function () {
  $('.tab-links').removeClass('w--current');  // remove from all
  $(this).addClass('w--current');             // add to clicked one
});


// PRICING PLAN

$("#monthly-tab").on("click", function () {

  $(".price-item").each(function () {
    let month = $(this).data("month");
    $(this).contents().first()[0].textContent = "$" + month + " ";
    $(this).find("span").text("/Per Month");
  });

  $("#monthly-tab").addClass("w--current");
  $("#yearly-tab").removeClass("w--current");
});

$("#yearly-tab").on("click", function () {

  $(".price-item").each(function () {
    let year = $(this).data("year");
    $(this).contents().first()[0].textContent = "$" + year + " ";
    $(this).find("span").text("/Per Year");
  });

  $("#yearly-tab").addClass("w--current");
  $("#monthly-tab").removeClass("w--current");
});


// COUNTER ANIMATION
 let started = false;

  function startCounter() {
    if (started) return;

    $('.counter').each(function () {
      let $this = $(this);
      let target = parseInt($this.attr("data-target"));
      let count = 0;

      let interval = setInterval(() => {
        count++;
        $this.text(count < 10 ? "0" + count : count);

        if (count >= target) {
          clearInterval(interval);
        }
      }, 40);
    });

    started = true;
  }

  // Trigger when section appears
  $(window).on('scroll', function () {
    let sectionTop = $('.counters-wrapper').offset().top - window.innerHeight + 100;
    if ($(window).scrollTop() > sectionTop) {
      startCounter();
    }
  });

  // HOME ONE SLIDER
    $('.slider-main-wrapper .w-slider-mask').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay : true,
    prevArrow: $('.w-slider-arrow-left'),
    nextArrow: $('.w-slider-arrow-right'),
});

// HOME ONE WHY CHOOSE
$('.home-digital-options-background').hover(function() {
  $('.home-digital-options-background').removeClass('active');
  $(this).addClass('active');
});


// 
$(".service-three-cards").on("mouseenter", function () {
  $(".service-three-cards-overlay").removeClass("in-active");
  $(this).children(".service-three-cards-overlay").addClass("in-active");

});

// Button 
    const rotatingTexts = document.querySelectorAll('.button-border-effect');

rotatingTexts.forEach((el) => {
  let angle = 0;

  setInterval(() => {
    angle += 1;
    el.style.transform = `rotateZ(${angle}deg)`;
  }, 16);
});



$('.humburger-wrapper').on('click', function () {
  $('.w-nav-menu')
    .stop(true, true)
    .slideToggle(500);

  $('.w-nav-menu').toggleClass('is-open');
});



// HAMburger
// let isOpen = false;

// $('.humburger-wrapper').on('click', function () {
//   isOpen = !isOpen;

//   $('.humburger-bar-one').css({
//     transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
//     transition: 'transform 0.3s ease'
//   });

//   $('.humburger-bar-two').css({
//     transform: isOpen ? 'rotate(-45deg) translate(10px, -10px)' : 'rotate(0deg) translate(0, 0)',
//     width: isOpen ? '25px' : '',
//     transition: 'transform 0.3s ease, width 0.3s ease'
//   });
// });


$('.navbar-dropdown-toggle')
  .hide()

$('.navbar-three-toggle').on('click', function (e) {
 
  e.preventDefault();

  const dropdown = $(this).next('.navbar-dropdown-toggle');

  // close others
  $('.navbar-dropdown-toggle').not(dropdown)
    .slideUp(300)
    .css('visibility', 'hidden');

  // toggle current
  dropdown
    .css('visibility', 'visible')
    .slideToggle(300);
});



// MENU DROPDOWN
const isMobile = () => window.innerWidth < 992; // Bootstrap breakpoint

// DESKTOP — hover
$('.dropdown').on('mouseenter', function () {
  if (!isMobile()) {
    $(this)
      .find('.w-dropdown-list')
      .stop(true, true)
      .css('visibility', 'visible')
      .slideDown(300);
  }
});

$('.dropdown').on('mouseleave', function () {
  if (!isMobile()) {
    $(this)
      .find('.w-dropdown-list')
      .stop(true, true)
      .slideUp(300);
  }
});

// MOBILE — click toggle
$('.dropdown-toggle').on('click', function (e) {
  if (isMobile()) {
    e.preventDefault();

    const dropdown = $(this)
      .closest('.dropdown')
      .find('.w-dropdown-list');

    // close others
    $('.w-dropdown-list').not(dropdown).each(function () {
      $(this).css('visibility', 'hidden').slideUp(300);
    });

    // toggle current
    if (dropdown.is(':visible')) {
      dropdown
        .slideUp(300, function () {
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




// ARROW ROTATE
 $('.arrow-right').on('click', function () {
    const currentArrow = $(this).find('.rotate-arrow');

    // reset all other arrows
    $('.rotate-arrow').not(currentArrow).css({
      transform: 'rotate(0deg)'
    });

    // toggle current arrow
    currentArrow.toggleClass('active');

    if (currentArrow.hasClass('active')) {
      currentArrow.css('transform', 'rotate(180deg)');
    } else {
      currentArrow.css('transform', 'rotate(0deg)');
    }
  });
  });



  // HEADER STICKY
  window.addEventListener("scroll", function () {
    const topVal = window.scrollY || document.documentElement.scrollTop;
    const navbars = document.querySelectorAll(".navbar, .navbar-three");
    navbars.forEach((navbar) => {
        if (topVal >= 100) {
            navbar.classList.add("header-sticky");
        } else {
            navbar.classList.remove("header-sticky");
        }
    });


    
});


  

  

  

 