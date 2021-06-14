import React, { useEffect } from 'react';
import gsap from 'gsap';
import {
   welcomeWrapperAnimationOnMount,
   welcomeWrapperAnimationOnUnMount,
} from './LandingPageAnimations.js';

import Button from 'MaterialComponents/CustomButtons/Button.js';
import {
   StyledLandingPageWrapper,
   StyledLandingPageWelcome,
} from './LandingPage.css.js';

const LandingPage = () => {
   useEffect(() => {
      welcomeWrapperAnimationOnMount();
      setTimeout(() => {
         document.querySelector('#welcome-text').textContent = 'WELCOME';
         document.addEventListener('wheel', () => {
            welcomeWrapperAnimationOnUnMount();
         });
      }, 1500);
   });
   return (
      <>
         <StyledLandingPageWelcome id='welcome-wrapper'>
            <div>
               <h1 id='welcome-text'>HARVEO</h1>
            </div>
            <Button
               className='scroll-button'
               onClick={welcomeWrapperAnimationOnUnMount}
               simple
            >
               <i className='fas fa-long-arrow-alt-down'></i> Scroll down to
               explore
            </Button>
         </StyledLandingPageWelcome>
         <StyledLandingPageWrapper></StyledLandingPageWrapper>
      </>
   );
};

export default LandingPage;
