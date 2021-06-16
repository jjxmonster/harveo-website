import gsap from 'gsap';
import React, { useEffect } from 'react';

import { StyledSectionsTransition } from './SectionTransitionContainer.css.js';

const SectionsTransitionsContainer = ({ direction }) => {
   const animateContainer = () => {
      switch (direction) {
         case 'left':
            gsap.to('.transition-container', {
               x: '-100%',
               duration: 2,
               delay: 1,
               ease: 'easeInOut',
            });
            break;
         case 'right':
            gsap.to('.transition-container', {
               x: '100%',
               duration: 2,
               delay: 1,
               ease: 'easeInOut',
            });
            break;
         default:
            break;
      }
   };
   useEffect(() => {
      animateContainer();
   });
   return (
      <StyledSectionsTransition
         className='transition-container'
         position={direction}
      />
   );
};

export default SectionsTransitionsContainer;
