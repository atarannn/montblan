const sliderMobile = new Swiper('.section-7-mobile-slider', {
  loop: false,
  speed: 1000,
  slidesPerView: 1.1,
  spaceBetween: 20,

  breakpoints: {
    680: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    }
  }
});
