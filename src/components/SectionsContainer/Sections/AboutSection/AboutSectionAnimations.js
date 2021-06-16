import gsap from 'gsap';
export const aboutSectionAnimations = () => {
   gsap.from('.about-container', { y: -100, opacity: 0 });
};

export const aboutPageAnimationsOnUnMount = () => {
   // window.scroll({
   //    top: 0,
   //    behavior: 'smooth',
   // });
   gsap.to('.about-grid', {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
   });
};
