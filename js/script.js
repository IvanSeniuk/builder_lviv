$(document).ready(function() {
    $('.reviews__slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: true,
        pauseOnHoover: true,
        pauseOnDots: false,
    });
    $('.portfolio__slider-sm').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.portfolio__slider-bg',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true
       });
    $('.portfolio__slider-bg').slick({
      swipe: true,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true,
      cssEasy: 'linear',
      pauseOnFocus: true,
      pauseOnHoover: true
  });
  $('.mobile__menu').on('click', function(e) {
    e.preventDefault();
    $('.burger__menu, .header-menu, .header__menu, .contacts, .header-menu__button') .toggleClass('burger__active');
  });
  $('.header-link').click(function(event) {
    $('.burger__menu, .header-menu, .header__menu, .contacts, .header-menu__button').removeClass('burger__active');
  });
  
});


