import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const expanstionSectionAnimation = () => {
   const sections = document.querySelectorAll('.about-expansion section');

   // footer
   const onEnterFunction = () => {
      document.querySelector('footer').classList.add('footer-developed');
   };
   const onLeaveFunction = () => {
      document.querySelector('footer').classList.remove('footer-developed');
   };
   ScrollTrigger.create({
      trigger: '.section-4',
      start: '20% 50%',
      onEnter: onEnterFunction,
      onLeave: onLeaveFunction,
      onEnterBack: onEnterFunction,
      onLeaveBack: onLeaveFunction,
   });

   sections.forEach(section => {
      gsap.fromTo(
         section.children,
         { y: '+=100', opacity: 0 },
         {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
               trigger: section,
               start: 'top 20%',
            },
         }
      );
   });
};
