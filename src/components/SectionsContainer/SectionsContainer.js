import React, { useState } from 'react';
import gsap from 'gsap';

import Paginations from 'MaterialComponents/Pagination/Pagination.js';
import { StyledSectionsContainer } from './SectionsContainer.css';
import SectionsTransitionsContainer from './SectionsTransitionContainer';

import {
   HomeSection,
   ProfitsSection,
   GoogleReviewSection,
   AboutSection,
} from './Sections';
import { homePageAnimationsOnUnMount } from './Sections/HomeSection/HomeSectionAnimations.js';

const SectionsContainer = () => {
   const [transitionDirection, setTransitionDirection] = useState('left');
   const [isTransitionActive, setIsTransitionActive] = useState(false);

   const [pages, setPages] = useState([
      { active: true, text: '_____' },
      { text: '_____' },
      { text: '_____' },
      { text: '_____' },
   ]);
   // setPages(
   //    pages.map((item, i) => {
   //       if (i === index - 1) return { active: true, text: '_____' };
   //       else return { text: '_____' };
   //    })
   // );
   const [activePage, setActivePage] = useState(1);

   const handleChangePage = index => {
      setIsTransitionActive(true);
      index > activePage
         ? setTransitionDirection('left')
         : setTransitionDirection('right');
      // settimeout becouse this^ setstate rerender component so, this animation cant't start
      setTimeout(() => {
         animateComponentUnMount();
         gsap.to('.pagination', { opacity: 0 });
      }, 0);
      // wait for transition ending, then change page number and default settings
      setTimeout(() => {
         setActivePage(index);
         setPages(
            pages.map((item, i) => {
               if (i === index - 1) return { active: true, text: '_____' };
               else return { text: '_____' };
            })
         );
         gsap.to('.pagination', { opacity: 1 });
         setIsTransitionActive(false);
      }, 2500);
   };

   const PageToDisplaySwitch = () => {
      switch (activePage) {
         case 1:
            return <HomeSection />;
         case 2:
            return <AboutSection />;
         case 3:
            return <ProfitsSection />;
         case 4:
            return <GoogleReviewSection />;
         default:
            <HomeSection />;
      }
   };
   const animateComponentUnMount = () => {
      switch (activePage) {
         case 1:
            homePageAnimationsOnUnMount();
            break;
         default:
            console.log('elo');
      }
   };

   return (
      <StyledSectionsContainer>
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
