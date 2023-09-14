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
    const secondDigit = splitedIndex.length > 1 ? splitedIndex[1] : splitedIndex[0];
    gsap.timeline()
      .fromTo(currentSlideShow[0], { yPercent: 0 }, { yPercent: 100 })
      .add(() => {
        currentSlideShow[0].textContent = secondDigit;
      })
      .fromTo(currentSlideShow[0], { yPercent: -100 }, { yPercent: 0 });
  });

  const panoramaWrapper = document.querySelectorAll('[data-panorama-wrapper]');

  panoramaWrapper.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const panorama = document.querySelector('[data-panorama]');
      const panoramaOverlay = document.querySelector('[data-panorama-faq]');
      panorama.style.pointerEvents = '';
      panoramaOverlay.style.display = 'none';
      console.log('mouseEnter');
    });
  })
  panoramaWrapper.forEach(el => {
    el.addEventListener('mouseleave', () => {
      const panorama = document.querySelector('[data-panorama]');
      const panoramaOverlay = document.querySelector('[data-panorama-faq]');
      panorama.style.pointerEvents = 'none';
      panoramaOverlay.style.display = 'flex';
      console.log('mouseLeave');
    });
  })
  // panoramaWrapper.forEach(el => {
  //   el.addEventListener('mousedown', () => {
  //     const panorama = document.querySelector('[data-panorama]');
  //     const panoramaOverlay = document.querySelector('[data-panorama-faq]');
  //     panorama.style.pointerEvents = 'grabbing';
  //     panoramaOverlay.style.display = 'none';
  //     console.log('mouseDown');
  //   });
  // })
  window.addEventListener('touchstart', (evt) => {
    const panorama = document.querySelector('[data-panorama]');
    panorama.dispatchEvent(new Event('focus'));
  });
}

aboutSlider1();
