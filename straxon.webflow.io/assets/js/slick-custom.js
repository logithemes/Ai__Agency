$(document).ready(function(){
  $('.projec-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,             
    autoplaySpeed: 1500,       
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


   $('.choose-us-slider-services').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,             
    autoplaySpeed: 1500,       
    responsive: [
 {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
