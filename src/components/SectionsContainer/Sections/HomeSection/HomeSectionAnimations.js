import gsap from 'gsap';

export const homePageAnimationsOnMount = () => {
   //text
   gsap.from('.title-home', { x: -50, opacity: 0, delay: 0.7 });
   gsap.from('.description-home', { x: -50, opacity: 0, delay: 0.7 });
   // svg
   gsap.from('#svg-men', { x: 50, opacity: 0, delay: 0.8 });
   gsap.from('#svg-dots', { scale: 0, opacity: 0, delay: 1, duration: 1 });
   gsap.from('#svg-box-1', { opacity: 0, delay: 2 });
   gsap.from('#svg-box-2', { opacity: 0, delay: 2 });
   gsap.from('#svg-box-3', { opacity: 0, delay: 2 });
   gsap.from('#Vector_61', { scaleX: 0, delay: 2.5 });
   gsap.from('#Vector_62', { scaleX: 0, delay: 2.5 });
   gsap.from('#Vector_65', { scaleX: 0, delay: 2.5 });
   gsap.from('#Vector_66', { scaleX: 0, delay: 2.5 });
   gsap.from('#Vector_70', { scaleX: 0, delay: 2.5 });
   gsap.from('#Vector_71', { scaleX: 0, delay: 2.5 });
   // button
   gsap.from('.next-page-button', { y: -50, opacity: 0, delay: 3.5 });
   // pagination
   gsap.from('.pagination', { y: -50, scale: 1.5, opacity: 0, delay: 3 });
};
export const homePageAnimationsOnUnMount = () => {
   gsap.to('.title-home', { y: -50, opacity: 0 });
   gsap.to('.description-home', { y: -50, opacity: 0 });
   gsap.to('.svg-wrapper', { y: -50, opacity: 0 });
   gsap.to('.next-page-button', { x: -50, opacity: 0 });
};
