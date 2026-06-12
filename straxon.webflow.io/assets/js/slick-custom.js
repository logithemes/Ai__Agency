 $(document).ready(function(){

const projectSlider = new Swiper('.project-slider-wrapper', {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  slidesPerView: 4,
  spaceBetween: 0,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },
  },
});

  //  HOME TWO SWIPER
  // Initialize Swiper for .choose-us-slider-services
// const chooseUsSlider = new Swiper('.choose-us-slider-services', {
//   slidesPerView: 2,
//   slidesPerGroup: 1,
//   spaceBetween: 30, // You can adjust this value (Slick doesn't have it by default)
//   loop: true,
//   autoplay: {
//     delay: 1500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: '.choose-us-slider-services + .swiper-button-next, .choose-us-slider-services .swiper-button-next',
//     prevEl: '.choose-us-slider-services + .swiper-button-prev, .choose-us-slider-services .swiper-button-prev',
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//     },
//     768: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//     },
//     1025: {
//       slidesPerView: 3,
//       slidesPerGroup: 3,
//     },
//   },
// });

// Initialize Swiper for .choose-us-slider-services
const chooseUsSlider = new Swiper('.choose-us-slider-services', {

  loop: true,
  speed: 1200,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.choose-slider-next',
    prevEl: '.choose-slider-prev',
  },

  breakpoints: {

    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },

    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },

    992: {
      slidesPerView: 2,
      centeredSlides: true,
    }

  }

});

const aboutThreeSlider = new Swiper('.about-three-slider', {
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: '.about-three-slider-pagination',
    clickable: true,

    renderBullet: function (index, className) {
      return '<div class="tp-slider-dot ' + className + '"></div>';
    },
  },
});

  // Initially show first tab


 $('.tp-service-tab-links').on('click', function () {
  $('.tp-service-tab-links').removeClass('tp-active');  // remove from all
  $(this).addClass('tp-active');             // add to clicked one
});


// PRICING PLAN

$("#monthly-tab").on("click", function () {

  $(".price-item").each(function () {
    let month = $(this).data("month");
    $(this).contents().first()[0].textContent = "$" + month + " ";
    $(this).find("span").text("/Per Month");
  });

  $("#monthly-tab").addClass("tp-active");
  $("#yearly-tab").removeClass("tp-active");
});

$("#yearly-tab").on("click", function () {

  $(".price-item").each(function () {
    let year = $(this).data("year");
    $(this).contents().first()[0].textContent = "$" + year + " ";
    $(this).find("span").text("/Per Year");
  });

  $("#yearly-tab").addClass("tp-active");
  $("#monthly-tab").removeClass("tp-active");
});


// COUNTER ANIMATION
// COUNTER ANIMATION
let started = false;

function startCounter() {

  if (started) return;

  $('.counter-wrapper').each(function () {

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

// Scroll trigger
if ($('.counters-wrapper').length) {

  $(window).on('scroll', function () {

    let sectionTop = $('.counters-wrapper').offset().top - window.innerHeight + 100;

    if ($(window).scrollTop() > sectionTop) {
      startCounter();
    }

  });

}



  // HOME ONE SLIDER
//     $('.tp-testimonial-track').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     infinite: true,
//     speed: 600,
//     autoplay : true,
//     prevArrow: $('.tp-arrow-prev'),
//     nextArrow: $('.tp-arrow-next'),
// });



// 
$(".service-three-cards").on("mouseenter", function () {
  $(".service-three-cards-overlay").removeClass("service-tp-in-active");
  $(this).children(".service-three-cards-overlay").addClass("service-tp-in-active");

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

function handleMenu() {
  if ($(window).width() >= 992) {
    $('.main-menu')
      .removeAttr('style')   // remove inline display from slideToggle
      .addClass('d-block')   // force visible
      .removeClass('is-open');
  } else {
    $('.main-menu')
      .removeClass('d-block'); // allow toggle in mobile
  }
}

// Run on load
handleMenu();

// Run on resize
$(window).on('resize', function () {
  handleMenu();
});

// Toggle for mobile
$('.humburger-wrapper').on('click', function () {
  if ($(window).width() < 992) {
    $('.main-menu')
      .stop(true, true)
      .slideToggle(300)
      .toggleClass('is-open');
  }
});

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
$('.tp-dropdown').on('mouseenter', function () {
  if (!isMobile()) {
    $(this)
      .find('.dp-menu, .mega-menu')
      .stop(true, true)
      .css('visibility', 'visible')
      .slideDown(300);
  }
});

$('.tp-dropdown').on('mouseleave', function () {
  if (!isMobile()) {
    $(this)
      .find('.dp-menu')
      .stop(true, true)
      .slideUp(300);
  }
});

// MOBILE — click toggle
$('.tp-dropdown-toggle').on('click', function (e) {
  if (isMobile()) {
    e.preventDefault();

    const dropdown = $(this)
      .closest('.tp-dropdown')
      .find('.dp-menu');

    // close others
    $('.dp-menu').not(dropdown).each(function () {
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


  // SWIPER SLIDER HOME THREE
  const contentSwiper = new Swiper(".content-swiper", {
      effect: "fade",
      allowTouchMove: false,
      fadeEffect: { crossFade: true }
    });

    const imageSwiper = new Swiper(".home-three-slider-area", {
      effect: "cards",
      grabCursor: true,
      cardsEffect: {
        slideShadows: false,
        perSlideOffset: 14
      },
      on: {
        slideChange() {
          contentSwiper.slideTo(this.activeIndex);
        }
      }
    });

    // SWIPRER SLIDE
    const processSlider = new Swiper(".tp-process-slider", {

  // basic
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  speed: 1200,

  // cursor
  grabCursor: true,
  allowTouchMove: true,

  // autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // smooth transition
  freeMode: false,

  // navigation arrows
  navigation: {
    nextEl: ".tp-left-arrow-btn",
    prevEl: ".tp-arrow-arrow-btn",
  },

  // responsive
  breakpoints: {

    576: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    }

  },
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


   
  

  

  

 