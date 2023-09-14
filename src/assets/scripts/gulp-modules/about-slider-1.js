function aboutSlider1() {
  const slider1 = new Swiper('.about-section-2-swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: document.querySelector('[data-next-btn-1]'),
      prevEl: document.querySelector('[data-prev-btn-1]'),
    },
    pagination: {
      el: '.about-section-2-swiper-pagination-mobile',
      clickable: true,
    },
    preloadImages: false,
    lazy: true,
    speed: 1000,
    watchSlidesVisibility: true,
    breakpoints: {
     1024: {
        slidesPerView: 1.1,
     },
      680: {
        spaceBetween: 20,
      }
    }
  });

  const currentSlideShow = [
    document.querySelector('[data-current-num]'),
  ];
  currentSlideShow[0].textContent = slider1.realIndex + 1;
  document.querySelector('[data-total-num]').textContent = document.querySelectorAll('.about-section-2-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
  slider1.on('activeIndexChange', (self) => {
    const splitedIndex = (self.realIndex + 1).toString().split('');
    const firstDigit = splitedIndex;
    gsap.timeline()
      .fromTo(currentSlideShow[0], { yPercent: 0 }, { yPercent: 100 })
      .add(() => {
        currentSlideShow[0].textContent = firstDigit;
      })
      .fromTo(currentSlideShow[0], { yPercent: -100 }, { yPercent: 0 });
  });
}

aboutSlider1();
