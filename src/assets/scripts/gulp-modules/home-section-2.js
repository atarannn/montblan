function homeSection2() {
  const slider = new Swiper('.home-section-2-swiper', {
    loop: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    preloadImages: false,
    lazy: true,
    speed: 1000,
    watchSlidesVisibility: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    on: {
      afterInit: (e) => {
        const currentSlide = e.slides[0];

        const delay = e.params.autoplay.delay / 1000;

        tlFromBottom(currentSlide.querySelector('.home-section-2-swiper__info .black-title-96')).play();
        tlFromBottom3(currentSlide.querySelector('.home-section-2-swiper__info .grey-text-uppercase-14')).play();
      },
    },
  });


  slider.on('beforeTransitionStart', (obj) => {
    const prevSlide = obj.slides[obj.previousIndex];

    tlToTop(prevSlide.querySelector('.home-section-2-swiper__info .black-title-96')).play();
    tlToTop3(prevSlide.querySelector('.home-section-2-swiper__info .grey-text-uppercase-14')).play();
  });


  slider.on('activeIndexChange', ({activeIndex, ...obj}) => {
    const currentSlide = obj.slides[activeIndex];

    tlFromBottom(currentSlide.querySelector('.home-section-2-swiper__info .black-title-96')).play();
    tlFromBottom3(currentSlide.querySelector('.home-section-2-swiper__info .grey-text-uppercase-14')).play();

  });


  document.querySelectorAll(".home-section-2-swiper__info .black-title-96").forEach((text) => {
    let mathM = text.innerHTML.match(
      /<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g
    );
    mathM = mathM.map(
      (el) => `<span style="display:inline-flex; overflow:hidden"><span>${el}</span></span>`
    );
    text.innerHTML = mathM.join(" ");
    gsap.set(text.children, { overflow: "hidden" });
    gsap.set(text.querySelectorAll("span>span"), {
      overflow: "initial",
      display: "inline-block",
    });
  });

  function tlToTop(text) {
    let tl = gsap
      .timeline({
        paused: true,
      })
      .fromTo(
        text.querySelectorAll("span>span"),
        { yPercent: 0, skewY: 0 },
        {
          yPercent: 100,
          skewY: 5,
          stagger: 0.05,
          duration: 2.25,

          ease: "power4.out",
        }
      );
    return tl;
  }

  function tlFromBottom(text) {
    let tl = gsap
      .timeline({
        paused: true,
      })
      .fromTo(
        text.querySelectorAll("span>span"),
        { yPercent: 100, skewY: 3 },
        {
          yPercent: 0,
          skewY: 0,
          stagger: 0.05,
          duration: 2.25,
          autoAlpha: 1,
          ease: "power4.out",
        }
      );
    return tl;
  }


  function tlToTop3(text) {
    let tl = gsap
      .timeline({
        paused: true,
      })
      .fromTo(
        text.querySelectorAll("span>span"),
        { yPercent: 0, skewY: 0 },
        {
          yPercent: -100,
          skewY: 1,
          duration: 2.25,
          ease: "power4.out",
        }
      );
    return tl;
  }

  function tlFromBottom3(text) {
    let tl = gsap
      .timeline({
        paused: true,
      })
      .fromTo(
        text,
        { yPercent: 100, skewY: 1 },
        {
          yPercent: 0,
          skewY: 0,
          duration: 2.25,
          autoAlpha: 1,
          ease: "power4.out",
        }
      );
    return tl;
  }
}


homeSection2();
