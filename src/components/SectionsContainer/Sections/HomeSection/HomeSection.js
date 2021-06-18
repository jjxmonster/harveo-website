import React from 'react';
import { useTranslation } from 'react-i18next';

import {
   StyledHomeSectionWrapper,
   StyledHomeTextWrapper,
   StyledHomeImageWrapper,
} from './HomeSection.css.js';
import {
   StyledNextSectionButtonWrapper,
   StyledPrevSectionButtonWrapper,
} from '../../SectionsContainer.css.js';
import { ReactComponent as HomeImage } from '../../../../images/landing-image.svg';
import Button from 'MaterialComponents/CustomButtons/Button.js';

const HomeSection = ({ handleChangePage }) => {
   const { t } = useTranslation();

   return (
      <StyledHomeSectionWrapper>
         <StyledPrevSectionButtonWrapper>
            <Button
               color='github'
               size='lg'
               onClick={() => handleChangePage(0)}
               simple
               round
               className='prev-page-button-container'
            >
               <div className='button-icon'>
                  <i className='fas fa-chevron-left'></i>
               </div>
               <div className='button-text'>
                  <h3>{t('about.button-next-page.title')}</h3>
                  <p>{t('about.button-next-page.description')}</p>
               </div>
            </Button>
         </StyledPrevSectionButtonWrapper>
         <StyledHomeTextWrapper>
            <h1 className='title-home'>HARVEO</h1>
            <p className='description-home'>{t('homepage.description')}</p>
            <Button
               color='primary'
               className='homepage-main-button'
               onClick={() => handleChangePage(2)}
            >
               {t('homepage.button-main')}
            </Button>
         </StyledHomeTextWrapper>
         <StyledHomeImageWrapper className='svg-wrapper'>
            <HomeImage />
         </StyledHomeImageWrapper>
         <StyledNextSectionButtonWrapper>
            <Button
               className='next-page-button'
               color='github'
               size='lg'
               onClick={() => handleChangePage(2)}
               simple
               round
            >
               <div className='button-text'>
                  <h3>{t('homepage.button.title')}</h3>
                  <p>{t('homepage.button.description')}</p>
               </div>
               <div className='button-icon'>
                  <i className='fas fa-chevron-right'></i>
               </div>
            </Button>
         </StyledNextSectionButtonWrapper>
      </StyledHomeSectionWrapper>
   );
};

export default HomeSection;
