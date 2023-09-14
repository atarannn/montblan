function menuOpen(menu) {
  menu.classList.add('active');

  const tl = gsap.timeline({ paused: true });
  const animationLinks = document.querySelector('.header__menu-list');
  const animationBlock = document.querySelector('[data-animation-block]');
  tl.fromTo(animationBlock, {autoAlpha: 0},
    {autoAlpha:1, ease: 'power4.easeInOut', duration: 0.7, delay: .5});
  tl.fromTo(animationLinks, {autoAlpha: 0, x: -1000},
    {autoAlpha:1, x: 0, ease: 'power4.easeInOut', duration: 0.5});
  tl.play();

  document.querySelector('.menu').style.pointerEvents = 'none';

  setTimeout(() => document.querySelector('.menu').style.pointerEvents = 'all', 2000);

  document.querySelector('body').style.overflow = 'hidden';
}

function menuClose(menu) {
  const tl = gsap.timeline({ paused: true });
  const animationLinks = document.querySelector('.header__menu-list');
  const animationBlock = document.querySelector('[data-animation-block]');
  tl.fromTo(animationLinks, {autoAlpha: 1, x: 0}, {autoAlpha: 0, x: -1000, ease: 'power4.easeInOut'});
  tl.fromTo(animationBlock, {autoAlpha: 1}, {autoAlpha: 0, ease: 'power4.easeInOut'},'<');
  tl.play();
  menu.classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
}

function menuInit() {
  const menu = document.querySelector('[data-header-wrapper]');
  document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    if(document.querySelector('.menu').classList.contains('open')) {
      menuOpen(menu);
    } else {
      menuClose(menu);
    }
  });

  // if (menu.classList.contains('active')) {
  //   document.querySelector('[data-open-menu]').addEventListener('click', () => {
  //     menuClose(menu);
  //   });
  // }
}

window.addEventListener('DOMContentLoaded', menuInit);

// if (document.documentElement.clientWidth > 1024) {
//   {
//     const mapNumber = (X, A, B, C, D) => (X - A) * (D - C) / (B - A) + C;
//     const getMousePos = (e) => {
//       let posx = 0;
//       let posy = 0;
//       if (!e) e = window.event;
//       if (e.pageX || e.pageY) {
//         posx = e.pageX;
//         posy = e.pageY;
//       } else if (e.clientX || e.clientY) {
//         posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//       }
//       return {x: posx, y: posy}
//     }
//     const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);
//
//     class HoverImgFx6 {
//       constructor(el) {
//         this.DOM = {el: el};
//         this.DOM.reveal = document.createElement('div');
//         this.DOM.reveal.className = 'hover-reveal';
//         this.DOM.reveal.style.overflow = 'hidden';
//         this.DOM.reveal.innerHTML = `<div class="hover-reveal__deco"></div><div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
//         this.DOM.el.appendChild(this.DOM.reveal);
//         this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
//         this.DOM.revealInner.style.overflow = 'hidden';
//         this.DOM.revealDeco = this.DOM.reveal.querySelector('.hover-reveal__deco');
//         this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
//         this.initEvents();
//       }
//
//       initEvents() {
//         this.positionElement = (ev) => {
//           const mousePos = getMousePos(ev);
//           const docScrolls = {
//             left: document.body.scrollLeft + document.documentElement.scrollLeft,
//             top: document.body.scrollTop + document.documentElement.scrollTop
//           };
//           // this.DOM.reveal.style.top = `${mousePos.y - docScrolls.top}px`;
//           // this.DOM.reveal.style.left = `${mousePos.x + 500 - docScrolls.left}px`;
//         };
//         this.mouseenterFn = (ev) => {
//           this.positionElement(ev);
//           this.showImage();
//         };
//         this.mousemoveFn = ev => requestAnimationFrame(() => {
//           this.positionElement(ev);
//         });
//         this.mouseleaveFn = () => {
//           this.hideImage();
//         };
//
//         this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
//         this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
//         this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
//       }
//
//       showImage() {
//         TweenMax.killTweensOf(this.DOM.reveal);
//         TweenMax.killTweensOf(this.DOM.revealInner);
//         TweenMax.killTweensOf(this.DOM.revealImg);
//         TweenMax.killTweensOf(this.DOM.revealDeco);
//
//         this.tl = new TimelineMax({
//           onStart: () => {
//             this.DOM.reveal.style.opacity = 1;
//             TweenMax.set(this.DOM.el, {zIndex: 1000});
//           }
//         })
//           .add('begin')
//           .set(this.DOM.revealInner, {x: '100%'})
//           .set(this.DOM.revealDeco, {transformOrigin: '100% 50%'})
//           .add(new TweenMax(this.DOM.revealDeco, 0.5, {
//             ease: 'Sine.easeInOut',
//             startAt: {scaleX: 0},
//             scaleX: 1
//           }), 'begin')
//           .set(this.DOM.revealDeco, {transformOrigin: '0% 50%'})
//           .add(new TweenMax(this.DOM.revealDeco, 0.9, {
//             ease: 'Expo.easeOut',
//             scaleX: 0
//           }), 'begin+=0.3')
//           .add(new TweenMax(this.DOM.revealInner, 0.9, {
//             ease: 'Expo.easeOut',
//             startAt: {x: '100%'},
//             x: '0%'
//           }), 'begin+=0.45')
//           .add(new TweenMax(this.DOM.revealImg, 0.9, {
//             ease: 'Expo.easeOut',
//             startAt: {x: '-100%'},
//             x: '0%'
//           }), 'begin+=0.45')
//           .add(new TweenMax(this.DOM.revealImg, 1.9, {
//             ease: 'Expo.easeOut',
//             startAt: {scale: 1.3},
//             scale: 1
//           }), 'begin+=0.45')
//           .add(new TweenMax(this.DOM.reveal, 1.1, {
//             ease: 'Quint.easeOut',
//             startAt: {x: '20%', rotation: 5},
//             x: '0%',
//             rotation: 0
//           }), 'begin');
//       }
//
//       hideImage() {
//         TweenMax.killTweensOf(this.DOM.reveal);
//         TweenMax.killTweensOf(this.DOM.revealInner);
//         TweenMax.killTweensOf(this.DOM.revealImg);
//         TweenMax.killTweensOf(this.DOM.revealDeco);
//
//         this.tl = new TimelineMax({
//           onStart: () => {
//             TweenMax.set(this.DOM.el, {zIndex: 999});
//           },
//           onComplete: () => {
//             TweenMax.set(this.DOM.el, {zIndex: ''});
//             TweenMax.set(this.DOM.reveal, {opacity: 0});
//           }
//         })
//           .add('begin')
//           .add(new TweenMax(this.DOM.revealInner, 0.3, {
//             ease: 'Sine.easeOut',
//             x: '-100%'
//           }), 'begin')
//           .add(new TweenMax(this.DOM.revealImg, 0.3, {
//             ease: 'Sine.easeOut',
//             x: '100%'
//           }), 'begin')
//       }
//     }
//
//     [...document.querySelectorAll('[data-fx="6"] > a, a[data-fx="6"]')].forEach(link => new HoverImgFx6(link));
//   }
// }
