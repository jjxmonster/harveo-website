import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
   welcomeWrapperAnimationOnMount,
   welcomeWrapperAnimationOnUnMount,
} from './WelcomePageAnimations.js';

import { StyledWelcomePage } from './WelcomePage.css.js';
import Button from 'MaterialComponents/CustomButtons/Button.js';

const WelcomePage = () => {
   const { t } = useTranslation();

   useEffect(() => {
      welcomeWrapperAnimationOnMount();
      setTimeout(() => {
         document.querySelector('#welcome-text').textContent =
            t('welcomePage.title');
         document.addEventListener('wheel', () => {
            welcomeWrapperAnimationOnUnMount();
         });
      }, 1500);
   });
   return (
      <StyledWelcomePage id='welcome-wrapper'>
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
      </StyledWelcomePage>
   );
};

export default WelcomePage;
