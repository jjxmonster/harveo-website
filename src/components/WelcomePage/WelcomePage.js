import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
   welcomeWrapperAnimationOnMount,
   welcomeWrapperAnimationOnUnMount,
} from './WelcomePageAnimations.js';

import { StyledWelcomePage } from './WelcomePage.css.js';
import Button from 'MaterialComponents/CustomButtons/Button.js';

const WelcomePage = ({ setIsWelcomeView }) => {
   const { t } = useTranslation();

   const rollWelcomePage = () => {
      welcomeWrapperAnimationOnUnMount();
      document.removeEventListener('wheel', rollWelcomePage);
      setTimeout(() => {
         setIsWelcomeView(false);
      }, 3000);
   };

   useEffect(() => {
      welcomeWrapperAnimationOnMount();
      setTimeout(() => {
         document.querySelector('#welcome-text').textContent =
            t('welcomePage.title');
         setTimeout(() => {
            document.addEventListener('wheel', rollWelcomePage);
         }, 1000);
      }, 1500);
   });
   return (
      <StyledWelcomePage id='welcome-wrapper'>
         <div>
            <h1 id='welcome-text'>HARVEO</h1>
         </div>
         <Button className='scroll-button' onClick={rollWelcomePage} simple>
            <i className='fas fa-long-arrow-alt-down'></i> Scroll down to
            explore <i className='fas fa-long-arrow-alt-down'></i>
         </Button>
      </StyledWelcomePage>
   );
};

export default WelcomePage;
