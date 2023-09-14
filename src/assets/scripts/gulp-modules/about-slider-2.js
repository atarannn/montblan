function aboutSlider2(){
  var nav = ['07:00', '08:00', '09:00', '09:30', '13:00', '18:00', '20:00', '21:00'];

  const slider2 = new Swiper('.about-section-3-swiper', {
    loop: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: document.querySelector('[data-next-btn-2]'),
      prevEl: document.querySelector('[data-prev-btn-2]'),
    },
    pagination: {
      el: '.about-section-3-swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (nav[index]) + '</span>';
      },
    },
    preloadImages: false,
    lazy: true,
    speed: 1000,
    watchSlidesVisibility: true,
  });
}

aboutSlider2();
