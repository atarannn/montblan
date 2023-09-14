


window.addEventListener('DOMContentLoaded', function() {
  function sideSwitchArrow(swiper, arrowArgs, conArgs) {
    const arrow = arrowArgs;
    const container = conArgs;
    const mediumCordValue = document.documentElement.clientWidth / 2;
    document.body.append(arrow);
    container.style.cursor = 'none';
    arrow.style.cursor = 'none';
    arrow.style.zIndex = 10;
    arrow.__proto__.hide = function some() {
      this.style.opacity = '0';
      this.style.pointerEvents = 'none';
    };
    arrow.__proto__.show = function some() {
      this.style.opacity = '1';
    };
    arrow.dataset.side = 'leftSide';
    arrow.hide();
    container.addEventListener('mousemove', desktopNavButtonHandler);
    container.addEventListener('mouseenter', () => {
      arrow.show();
    });
    container.addEventListener('mouseleave', () => {
      arrow.hide();
    });
    if (document.documentElement.clientWidth < 1024) {
      window.removeEventListener('mousemove', desktopNavButtonHandler);
      arrow.remove();
    }

    function desktopNavButtonHandler(evt) {
      arrow.style.left = `${evt.clientX - 18}px`;
      arrow.style.top = `${evt.clientY - 18}px`;
      getCursorSide(evt.clientX);
    }

    function getCursorSide(x) {
      if (x < (mediumCordValue)) {
        arrow.classList.add('left-side');
        arrow.dataset.side = 'leftSide';
      } else {
        arrow.classList.remove('left-side');
        arrow.dataset.side = 'rightSide';
      }
    }
    container.addEventListener('click', () => {
      switchGallerySlide(arrow.dataset.side);
    });

    // if (document.documentElement.clientWidth < 1024) {
    //   container.removeEventListener('click', clickToChange);
    // }

    const navigate = {
      leftSide: () => {
        if (swiper.isBeginning) return; // Перевірка, чи це перший слайд
        swiper.slidePrev();
      },
      rightSide: () => {
        if (swiper.isEnd) return; // Перевірка, чи це останній слайд
        swiper.slideNext();
      },
    };

    function switchGallerySlide(side) {
      if (side === 'leftSide' && swiper.isBeginning) {
        // Якщо це перший слайд і користувач хоче перейти з першого на останній
        swiper.slideTo(swiper.slides.length - 1); // Перехід на останній слайд
      } else if (side === 'rightSide' && swiper.isEnd) {
        // Якщо це останній слайд і користувач хоче перейти з останнього на перший
        swiper.slideTo(0); // Перехід на перший слайд
      } else {
        // В інших випадках виконуємо звичайні дії
        navigate[side]();
      }
    }
  }

  const slider = new Swiper('.gallery-section-1-swiper', {
    loop: false,
    pagination: {
      el: '.gallery-section-1-swiper-pagination-mobile',
      clickable: true,
    },
    preloadImages: false,
    lazy: true,
    speed: 400,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    watchSlidesVisibility: true,
  });

  const currentSlideShow = [
    document.querySelector('[data-first-digit]'),
  ];
  currentSlideShow[0].textContent = slider.realIndex + 1;
  document.querySelector('[data-total]').textContent = document.querySelectorAll('.gallery-section-1-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
  slider.on('activeIndexChange', (self) => {
    const splitedIndex = (self.realIndex + 1).toString().split('');
    const firstDigit = splitedIndex;
    gsap.timeline()
      .fromTo(currentSlideShow[0], { yPercent: 0 }, { yPercent: 100 })
      .add(() => {
        currentSlideShow[0].textContent = firstDigit;
      })
      .fromTo(currentSlideShow[0], { yPercent: -100 }, { yPercent: 0 });
  });

  sideSwitchArrow(
    slider,
    document.querySelector('.moving-arrow'),
    document.querySelector('.gallery-section-1-swiper'),
  );

  const buttons = document.querySelectorAll('button[data-view]');
  const flatsButton = document.querySelector('.flats-btn');

  flatsButton.addEventListener('click', () => {
    flatsButton.classList.add('active');

    // Видалення класу "active" з усіх кнопок з атрибутом data-view
    buttons.forEach(button => {
      if (!button.classList.contains('flats-btn-btn')) {
        button.classList.remove('active');
      }
    });
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      initializeSliderWithImages(view, slider);

      flatsButton.classList.remove('active');

      // Додавання класу "active" до вибраної кнопки з атрибутом data-view
      button.classList.add('active');
    });
  });

  const flatsFirstButton = document.querySelector('button[data-view="flats-first"]');
  const flatsSecondButton = document.querySelector('button[data-view="flats-second"]');
  const popup = document.querySelector('.gallery-popup');
  const popupImage = document.querySelector('.gallery-popup-image');
  const closeButton = document.querySelector('.gallery-popup-close');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;

      if (view === 'flats-first' || view === 'flats-second') {
        showPopup(view);
      } else {
        hidePopup();
      }
    });
  });

  function showPopup(view) {
    let imageUrl = '';
    if (view === 'flats-first') {
      imageUrl = './assets/images/gallery/slider-1/plannings/1.png';
    } else if (view === 'flats-second') {
      imageUrl = './assets/images/gallery/slider-1/plannings/1.png';
    }

    popupImage.src = imageUrl;
    popup.classList.add('active');

    popupImage.addEventListener('click', () => {
      popup.classList.add('open');
    });
  }

  closeButton.addEventListener('click', () => {
    popup.classList.remove('open');
  });

  function hidePopup() {
    popup.classList.remove('active');
  }

  function initializeSliderWithImages(view, slider) {
    buttons.forEach(button => {
      button.classList.remove('active');
    });

    const currentButton = document.querySelector(`button[data-view="${view}"]`);
    currentButton.classList.add('active');

    slider.removeAllSlides();

    if (view === 'complex') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/1.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/2.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/3.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/4.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/5.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/6.png"></div>'
      ]);
    } else if (view === 'entrance') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/1.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/2.png"></div>',
      ]);
    } else if (view === 'park') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/1.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/2.png"></div>',
      ]);
    } else if (view === 'flats-first') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/7.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/7.png"></div>',
      ]);
    } else if (view === 'flats-second') {
      slider.appendSlide([
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/7.png"></div>',
        '<div class="swiper-slide"><img src="./assets/images/gallery/slider-1/7.png"></div>',
      ]);
    }

    slider.update();
    slider.slideTo(0);
    currentSlideShow[0].textContent = slider.realIndex + 1;
    document.querySelector('[data-total]').textContent = document.querySelectorAll('.gallery-section-1-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
  }

  initializeSliderWithImages('complex', slider);
});
