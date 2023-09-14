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
      swiper.slidePrev();
    },
    rightSide: () => {
      swiper.slideNext();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }
}

const slider2 = new Swiper('.home-section-4-swiper', {
  loop: true,
  // navigation: {
  //   nextEl: document.querySelector('[data-next-btn]'),
  //   prevEl: document.querySelector('[data-prev-btn]'),
  // },
  preloadImages: false,
  lazy: true,
  speed: 400,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.home-section-4-swiper-pagination-mobile',
    clickable: true,
  },
  watchSlidesVisibility: true,
});

const currentSlideShow = [
  document.querySelector('[data-first-digit]'),
];

currentSlideShow[0].textContent = slider2.realIndex + 1;
document.querySelector('[data-total]').textContent = document.querySelectorAll('.home-section-4-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
slider2.on('activeIndexChange', (self) => {
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
  slider2,
  document.querySelector('.home-moving-arrow'),
  document.querySelector('.home-section-4-swiper'),
);
