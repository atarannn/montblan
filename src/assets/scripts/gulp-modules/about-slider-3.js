function aboutSlider3(){
  const slider3 = new Swiper('.about-section-5-swiper', {
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: {
      nextEl: document.querySelector('[data-next-btn-3]'),
      prevEl: document.querySelector('[data-prev-btn-3]'),
    },
    pagination: {
      el: '.about-section-5-swiper-pagination-mobile',
      clickable: true,
    },
    preloadImages: false,
    lazy: true,
    speed: 1000,
    watchSlidesVisibility: true,
    breakpoints: {
      680: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
    }
  });
}

aboutSlider3();
