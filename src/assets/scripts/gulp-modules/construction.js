function popupOpen(popup) {
  popup.forEach(el => {
    popupOpenAnim();
    document.querySelector('body').style.overflow = 'hidden';
  });
}

function popupClose(popup) {
  popup.forEach(el => {
    popupCloseAnim();
    document.querySelector('body').style.overflow = 'auto';
  });
}

function popupOpenAnim(evt, reverseArg) {
  const popup = document.querySelectorAll('[data-construction-progress]');
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    popup.forEach(el => {
      el.classList.add('active');
    });
  });
  tl.fromTo(popup, {autoAlpha: 0},
    {autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4 }, '<');
  tl.play();
}

function popupCloseAnim(evt, reverseArg) {
  const popup = document.querySelector('[data-construction-progress]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(popup, {autoAlpha: 1},
    { ease: 'power4.easeInOut', duration: 0.2, autoAlpha: 0 }, '<');
  tl.add(() => {
    popup.classList.remove('active');
  });
  tl.play();
}

function popupInit() {
  const popup = document.querySelectorAll('[data-construction-progress]');
  document.querySelector('.construction-progress__list').addEventListener('click',function(evt){
    const target = evt.target.closest('[data-open-construction-progress]');
    if (target === null) return;
    popupOpen(popup)
  });
  document.querySelectorAll('[data-close-construction-progress]').forEach(elem => {
    elem.addEventListener('click', () => popupClose(popup));
  });
  window.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) {
      if (popup[0] && popup[0].classList.contains('active')) {
        popupClose(popup)
      }
    }
  })
}

const list = document.querySelectorAll('.construction-progress-card');
const filterBtn = document.querySelectorAll('[data-view]');

filterBtn.forEach(el => el.addEventListener('click', (event) => {
  if (event.target.tagName != 'BUTTON') return false;
  const target = event.target.dataset.view;
  console.log(target);
  filterBtn.forEach(button => {
    console.log(button);
    button.classList.remove('active');
  });
  el.classList.add('active');
  list.forEach((elem) => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(target) && target != 'all') {
      elem.classList.add('hide');
    }
  });
}));

function init() {
  popupInit();
}

init();

function initConstructionSwiper() {
  const swiper = new Swiper('.construction-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: document.querySelector('[data-swiper-next]'),
      prevEl: document.querySelector('[data-swiper-prev]'),
    },
    pagination: {
      el: '.construction-swiper-pagination-mobile',
      clickable: true,
    },
    lazy: true,
    speed: 400,
    watchSlidesVisibility: true,
  });

  const currentSlideShow = [
    document.querySelector('[data-current-num]'),
  ];
  currentSlideShow[0].textContent = swiper.realIndex + 1;
  document.querySelector('[data-total-num]').textContent = document.querySelectorAll('.construction-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
  swiper.on('activeIndexChange', (self) => {
    const splitedIndex = (self.realIndex + 1).toString().split('');
    const secondDigit = splitedIndex.length > 1 ? splitedIndex[1] : splitedIndex[0];
    gsap.timeline()
      .fromTo(currentSlideShow[0], { yPercent: 0 }, { yPercent: 100 })
      .add(() => {
        currentSlideShow[0].textContent = secondDigit;
      })
      .fromTo(currentSlideShow[0], { yPercent: -100 }, { yPercent: 0 });
  });
}

initConstructionSwiper();
