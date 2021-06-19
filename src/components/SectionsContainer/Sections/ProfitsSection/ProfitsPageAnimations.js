import gsap from 'gsap';

export const profitsPageAnimationOnMount = () => {
   const profitsBoxes = document.querySelector('.profits-grid').childNodes;
   profitsBoxes.forEach((box, id) => {
      gsap.from(box, { scale: 0, delay: `0.${id}`, ease: 'easeInOut' });
   });
   gsap.from('.prev-page-button-container', {
      y: -50,
      opacity: 0,
      delay: 0.5,
   });
   gsap.from('.next-page-button-wrapper', {
      y: -50,
      opacity: 0,
      delay: 0.5,
   });
   gsap.to('.profits-container', { visibility: 'visible' });
};
export const profitsPageAnimationOnUnMount = () => {
   gsap.to('.prev-page-button-container', { y: -50, opacity: 0, duration: 1 });
   gsap.to('.next-page-button-wrapper', { y: -50, opacity: 0, duration: 1 });
   gsap.to('.profits-grid', {
      y: -50,
      opacity: 0,
      ease: 'easeInOut',
   });
};
