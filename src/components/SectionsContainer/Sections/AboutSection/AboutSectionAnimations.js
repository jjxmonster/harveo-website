import gsap from 'gsap';
export const aboutSectionAnimations = () => {
   const numbersDivs = document.querySelectorAll('.about-numbers');
   gsap.from('.about-container', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'easeInOut',
   });
   // svg
   gsap.from('#svg-abt-men', { x: -100, opacity: 0, delay: 1 });
   gsap.from('#svg-abt-women', { x: 100, opacity: 0, delay: 1 });
   gsap.from('#main-container-svg', { scale: 0, delay: 1.5 });
   gsap.from('#main-container-svg #Vector_5', { opacity: 0, delay: 2 });
   gsap.from('#main-container-svg #Vector_2', { scaleX: 0, delay: 2.2 });
   gsap.from('#main-container-svg #Vector_3', { scaleX: 0, delay: 2.2 });
   gsap.from('#svg-check', { y: -50, opacity: 0, delay: 2 });
   gsap.from('#flower-1', { y: 50, opacity: 0, delay: 2.2 });
   gsap.from('#flowe-2', { y: 50, opacity: 0, delay: 2.2 });
   // bottom divs
   numbersDivs.forEach((item, id) => {
      gsap.from(item, { y: 50, opacity: 0, delay: `3.${id}` });
   });
};

export const aboutPageAnimationsOnUnMount = () => {
   gsap.to('.prev-page-button-container', { y: -100, opacity: 0, delay: 0.2 });
   gsap.to('.next-page-button-wrapper', { y: -100, opacity: 0, delay: 0.2 });
   gsap.to('.about-grid', {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
   });
};
