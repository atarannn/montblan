window.onload = function () {
  document.body.classList.add('home-loading');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('home-loading-bg');

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.setTimeout(() => {
    document.body.classList.remove('home-loading-bg');
    document.body.classList.add('home-loaded');
    document.body.classList.remove('home-loading');
  }, 500);
  window.setTimeout(() => {
    document.body.style.overflow = 'auto';
  }, 2000);
};
