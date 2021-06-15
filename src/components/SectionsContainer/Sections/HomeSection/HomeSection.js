import React from 'react';
import { useTranslation } from 'react-i18next';

import {
   StyledHomeSectionWrapper,
   StyledHomeTextWrapper,
   StyledHomeImageWrapper,
} from './HomeSection.css.js';
import { StyledNextSectionButtonWrapper } from '../../SectionsContainer.css.js';
import { ReactComponent as HomeImage } from '../../../../images/landing-image.svg';
import Button from 'MaterialComponents/CustomButtons/Button.js';

const HomeSection = ({ handleChangePage }) => {
   const { t } = useTranslation();

   return (
      <StyledHomeSectionWrapper>
         <StyledHomeTextWrapper>
            <h1 className='title-home'>HARVEO</h1>
            <p className='description-home'>{t('homepage.description')}</p>
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
                  <h3>{t('homepage.button.h3')}</h3>
                  <p>{t('homepage.button.p')}</p>
               </div>
               <div className='button-icon'>
                  <i class='fas fa-chevron-right'></i>
               </div>
            </Button>
         </StyledNextSectionButtonWrapper>
      </StyledHomeSectionWrapper>
   );
};

export default HomeSection;
