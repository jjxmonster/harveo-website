import React, { useState } from 'react';
import gsap from 'gsap';

import Paginations from 'MaterialComponents/Pagination/Pagination.js';
import { StyledSectionsContainer } from './SectionsContainer.css';
import SectionsTransitionsContainer from './SectionsTransitionContainer';

import { HomeSection, ProfitsSection, AboutSection } from './Sections';
// pages animations on unmount
import { homePageAnimationsOnUnMount } from './Sections/HomeSection/HomeSectionAnimations.js';
import { aboutPageAnimationsOnUnMount } from './Sections/AboutSection/AboutSectionAnimations.js';
import { profitsPageAnimationOnUnMount } from './Sections/ProfitsSection/ProfitsPageAnimations.js';

const SectionsContainer = () => {
   const [transitionDirection, setTransitionDirection] = useState('left');
   const [isTransitionActive, setIsTransitionActive] = useState(false);
   const [activePage, setActivePage] = useState(1);
   const [pages, setPages] = useState([
      { active: true, text: '_____' },
      { text: '_____' },
      { text: '_____' },
   ]);
   const handleChangePage = index => {
      if (activePage === index) return;
      // scroll top for better ux
      window.scroll({
         top: 0,
         behavior: 'smooth',
      });
      setIsTransitionActive(true);
      index > activePage
         ? setTransitionDirection('left')
         : setTransitionDirection('right');
      // settimeout becouse this^ setstate rerender component so, this animation cant't start
      setTimeout(() => {
         animateComponentUnMount();
         gsap.to('.pagination', { opacity: 0 });
         gsap.to('footer', { opacity: 0 });
      }, 0);
      // wait for transition ending, then change page number and default settings
      setTimeout(() => {
         if (index === 4) index = 1;
         if (index === 0) index = 3;
         setActivePage(index);
         setPages(
            pages.map((item, i) => {
               if (i === index - 1) return { active: true, text: '_____' };
               else return { text: '_____' };
            })
         );
         gsap.to('.pagination', { opacity: 1 });
         gsap.to('footer', { opacity: 1 });
         setIsTransitionActive(false);
      }, 2500);
   };

   const PageToDisplaySwitch = () => {
      switch (activePage) {
         case 1:
            return <HomeSection handleChangePage={handleChangePage} />;
         case 2:
            return <AboutSection handleChangePage={handleChangePage} />;
         case 3:
            return <ProfitsSection handleChangePage={handleChangePage} />;
         default:
            return;
      }
   };

   const animateComponentUnMount = () => {
      switch (activePage) {
         case 1:
            homePageAnimationsOnUnMount();
            break;
         case 2:
            aboutPageAnimationsOnUnMount();
            break;
         case 3:
            profitsPageAnimationOnUnMount();
            break;
         default:
            return;
      }
   };

   return (
      <StyledSectionsContainer className='section-container'>
         {isTransitionActive ? (
            <SectionsTransitionsContainer direction={transitionDirection} />
         ) : null}
         <PageToDisplaySwitch />
         <Paginations
            pages={[
               {
                  onClick: handleChangePage,
               },
               ...pages,
            ]}
            S
            className='pagination'
            color='primary'
         />
      </StyledSectionsContainer>
   );
};

export default SectionsContainer;
