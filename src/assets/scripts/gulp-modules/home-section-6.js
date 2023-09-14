if (document.documentElement.clientWidth > 1024) {
  const firstScreenCircleEase = new BezierEasing(0.5, 0, 0.27, 1);
  const firstScreenCircle = document.querySelectorAll('[data-first-screen-anim]');

  firstScreenCircle.forEach(section => {
    const morph2 =    'M 960 0 C 308.028 0 0 308.028 0 688 V 784 H 1920 V 688 C 1920 308.028 1611.97 0 960 0';
    const morph1 = `M 688 0 C 308.028 0 0 308.028 0 688 V 784 H 1920 V 688 C 1920 308.028 1611.97 0 1232 0`;

    gsap.set(section.querySelector('path'), {attr: { d: morph1}})
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        triggerHook: 1,
        trigger: section,
        start: '-100% top',
        // end: '-100% top',
        scrub: 1,
      },
    });
    tl.to(section.querySelector('path'), { attr: { d: morph2 } }, '<');
  });
}
