import gsap from 'gsap';

export const navBarAnimation = () => {
   gsap.from('.nav-bar', { y: '-100%', delay: 1 });
};
