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
   StyledTopImageWrapper,
   StyledCenterImageWrapper,
   StyledBottomImageWrapper,
   StyledGridContainerAbout,
} from './AboutSection.css.js';
import Image1 from '../../../../images/about-image-1.jpg';
import Image2 from '../../../../images/about-image-2.jpg';
import Image3 from '../../../../images/about-image-3.webp';
import { ReactComponent as HomeImage } from '../../../../images/about-image.svg';

const AboutSection = ({ handleChangePage }) => {
   const { t } = useTranslation();

   useEffect(() => {
      aboutSectionAnimations();
   }, []);

   return (
      <StyledAboutSectionWrapper className='about-container'>
         <StyledPrevSectionButtonWrapper>
            <Button
               className='next-page-button'
               color='github'
               size='lg'
               onClick={() => handleChangePage(1)}
               simple
               round
            >
               <div className='button-icon'>
                  <i class='fas fa-chevron-left'></i>
               </div>
               <div className='button-text'>
                  <h3>Home</h3>
                  <p>Finance {'&'} Real Estate</p>
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
               Scroll down <i class='fas fa-long-arrow-alt-down'></i>
            </Button>
            <StyledTopImageWrapper className='about-top'>
               {/* <h4>01 Experience</h4>
               <img src={Image1} alt='image-1' /> */}
               <HomeImage />
            </StyledTopImageWrapper>
            <StyledTopTextContainer>
               <h3>01</h3>
               <p>{t('about.text1')}</p>
            </StyledTopTextContainer>
            {/* <StyledCenterImageWrapper className='about-center'>
               <h4>02 Support</h4>
               <img src={Image2} alt='image-2' />
            </StyledCenterImageWrapper> */}
            <StyledCenterTextContainer className='about-center'>
               <h3>02</h3>
               <p>{t('about.text2')}</p>
            </StyledCenterTextContainer>
            {/* <StyledBottomImageWrapper className='about-bottom'>
               <h4>03 Satisfaction</h4>
               <img src={Image3} alt='image-3' />
            </StyledBottomImageWrapper> */}
            <StyledBottomTextContainer className='about-bottom'>
               <h3>03</h3>
               <p>{t('about.text3')}</p>
            </StyledBottomTextContainer>
            <StyledNumbersContainer>
               <div>
                  <h3>12</h3>
                  <p>{t('about.numbers.exp')}</p>
               </div>
               <div>
                  <h3>5031</h3>
                  <p>{t('about.numbers.served')}</p>
               </div>
               <div>
                  <h3>2687</h3>
                  <p>{t('about.numbers.credits')}</p>
               </div>
               <div>
                  <h3>12</h3>
                  <p>{t('about.numbers.offer')}</p>
               </div>
            </StyledNumbersContainer>
         </StyledGridContainerAbout>
         <ExpansionAboutSection />
         <StyledNextSectionButtonWrapper>
            <Button
               className='next-page-button'
               color='github'
               size='lg'
               onClick={() => handleChangePage(3)}
               simple
               round
            >
               <div className='button-text'>
                  <h3>Profits</h3>
                  <p>What do you get?</p>
               </div>
               <div className='button-icon'>
                  <i class='fas fa-chevron-right'></i>
               </div>
            </Button>
         </StyledNextSectionButtonWrapper>
      </StyledAboutSectionWrapper>
   );
};

export default AboutSection;
