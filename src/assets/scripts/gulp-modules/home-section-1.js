if (document.documentElement.clientWidth > 1023) {
  const videoWrapper = document.querySelector('.section-1__video-wrapper');
  const arrow = document.querySelector('.home-section-1-arrow');

  videoWrapper.addEventListener('mouseover', () => {
    arrow.classList.add('visible');
  });
  videoWrapper.addEventListener('mouseout', () => {
    arrow.classList.remove('visible');
  });
}

const slider2Mobile = new Swiper('.section-1-mobile-slider', {
  loop: false,
  speed: 1000,
  slidesPerView: 1.3,
  spaceBetween: 16
});
