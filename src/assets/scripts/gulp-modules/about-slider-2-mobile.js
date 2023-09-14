if (document.documentElement.clientWidth < 680) {
  const blocks = document.querySelectorAll('.about-section-2__tab-mobile__block');
  const btns = document.querySelectorAll('.js-open-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentBlock = btn.closest('.about-section-2__tab-mobile__block');
      parentBlock.classList.toggle('active');
    });
  });
}
