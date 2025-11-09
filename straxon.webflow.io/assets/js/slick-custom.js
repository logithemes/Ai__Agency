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


  });


 