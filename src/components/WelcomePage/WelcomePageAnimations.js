import gsap from 'gsap';

import { navBarAnimation } from 'components/NavBar/NavBarAnimation.js';
import { homePageAnimationsOnMount } from 'components/SectionsContainer/Sections/HomeSection/HomeSectionAnimations.js';

export const welcomeWrapperAnimationOnMount = () => {
   gsap.from('#welcome-text', { y: -50, opacity: 0, duration: 0.5 });
   gsap.from('.scroll-button', { y: -50, opacity: 0, delay: 2.5 });
};
export const welcomeWrapperAnimationOnUnMount = () => {
   gsap.to('#welcome-text', { y: -50, opacity: 0 });
   gsap.to('.scroll-button', { y: -50, opacity: 0 });
   gsap.to('#welcome-wrapper', { height: 0, delay: 0.2, duration: 1 });

   // animate home page and nav when user scroll down.
   navBarAnimation();
   homePageAnimationsOnMount();
};
