function aboutSlider4() {
  const slider4 = new Swiper('.about-section-4-swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.about-section-4-swiper-pagination-mobile',
      clickable: true,
    },
    preloadImages: false,
    lazy: true,
    speed: 1000,
    watchSlidesVisibility: true,
  });
}

aboutSlider4();
