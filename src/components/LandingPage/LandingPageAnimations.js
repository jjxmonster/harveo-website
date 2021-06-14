import gsap from 'gsap';

export const welcomeWrapperAnimationOnMount = () => {
   gsap.from('#welcome-text', { y: -50, opacity: 0, duration: 0.5 });
   gsap.from('.scroll-button', { y: 50, opacity: 0, delay: 2.5 });
};
export const welcomeWrapperAnimationOnUnMount = () => {
   gsap.to('#welcome-text', { y: -50, opacity: 0 });
   gsap.to('.scroll-button', { y: -50, opacity: 0 });
   gsap.to('#welcome-wrapper', { height: 0, delay: 0.2, duration: 1 });
};
