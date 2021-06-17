import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { aboutSectionAnimations } from './AboutSectionAnimations.js';

import Button from 'MaterialComponents/CustomButtons/Button.js';
import ExpansionAboutSection from '../../../ExpansionAboutSection';
import {
   StyledNextSectionButtonWrapper,
   StyledPrevSectionButtonWrapper,
} from 'components/SectionsContainer/SectionsContainer.css.js';
import {
   StyledAboutSectionWrapper,
   StyledTopTextContainer,
   StyledCenterTextContainer,
   StyledBottomTextContainer,
   StyledNumbersContainer,
   StyledImageWrapper,
   StyledGridContainerAbout,
} from './AboutSection.css.js';
import { ReactComponent as HomeImage } from '../../../../images/about-image.svg';

const AboutSection = ({ handleChangePage }) => {
   const { t } = useTranslation();

   useEffect(() => {
      aboutSectionAnimations();
   }, []);

   return (
      <StyledAboutSectionWrapper className='about-container'>
         <StyledPrevSectionButtonWrapper className='prev-page-button-container'>
            <Button
               color='github'
               size='lg'
               onClick={() => handleChangePage(1)}
               simple
               round
            >
               <div className='button-icon'>
                  <i className='fas fa-chevron-left'></i>
               </div>
               <div className='button-text'>
                  <h3>Harveo</h3>
                  <p>{t('about.button-prev-page.description')}</p>
               </div>
            </Button>
         </StyledPrevSectionButtonWrapper>
         <StyledGridContainerAbout className='about-grid'>
            <Button
               className='about-scroll-button'
               simple
               size='sm'
               color='github'
            >
               Scroll down <i className='fas fa-long-arrow-alt-down'></i>
            </Button>
            <StyledImageWrapper className='about-top'>
               <HomeImage />
            </StyledImageWrapper>
            <StyledTopTextContainer>
               <h3>01</h3>
               <p>{t('about.text1')}</p>
            </StyledTopTextContainer>

            <StyledCenterTextContainer className='about-center'>
               <h3>02</h3>
               <p>{t('about.text2')}</p>
            </StyledCenterTextContainer>

            <StyledBottomTextContainer className='about-bottom'>
               <h3>03</h3>
               <p>{t('about.text3')}</p>
            </StyledBottomTextContainer>
            <StyledNumbersContainer>
               <div className='about-numbers'>
                  <h3>12</h3>
                  <p>{t('about.numbers.exp')}</p>
               </div>
               <div className='about-numbers'>
                  <h3>5031</h3>
                  <p>{t('about.numbers.served')}</p>
               </div>
               <div className='about-numbers'>
                  <h3>2687</h3>
                  <p>{t('about.numbers.credits')}</p>
               </div>
               <div className='about-numbers'>
                  <h3>12</h3>
                  <p>{t('about.numbers.offer')}</p>
               </div>
            </StyledNumbersContainer>
         </StyledGridContainerAbout>
         <ExpansionAboutSection />
         <StyledNextSectionButtonWrapper className='next-page-button-wrapper'>
            <Button
               color='github'
               size='lg'
               onClick={() => handleChangePage(3)}
               simple
               round
            >
               <div className='button-text'>
                  <h3>{t('about.button-next-page.title')}</h3>
                  <p>{t('about.button-next-page.description')}</p>
               </div>
               <div className='button-icon'>
                  <i className='fas fa-chevron-right'></i>
               </div>
            </Button>
         </StyledNextSectionButtonWrapper>
      </StyledAboutSectionWrapper>
   );
};

export default AboutSection;
