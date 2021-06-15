import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { aboutSectionAnimations } from './AboutSectionAnimations.js';

import {
   StyledAboutSectionWrapper,
   StyledTopTextContainer,
   StyledCenterTextContainer,
   StyledBottomTextContainer,
   StyledNumbersContainer,
   StyledTopImageWrapper,
   StyledCenterImageWrapper,
   StyledBottomImageWrapper,
} from './AboutSection.css.js';
import Image1 from '../../../../images/about-image-1.jpg';
import Image2 from '../../../../images/about-image-2.jpg';
import Image3 from '../../../../images/about-image-3.webp';

const AboutSection = () => {
   const { t } = useTranslation();

   useEffect(() => {
      aboutSectionAnimations();
   });
   return (
      <StyledAboutSectionWrapper>
         <StyledTopImageWrapper className='about-top'>
            <h4>01 Experience</h4>
            <img src={Image1} alt='image-1' />
         </StyledTopImageWrapper>
         <StyledTopTextContainer>
            <h3>01</h3>
            <p>{t('about.text1')}</p>
         </StyledTopTextContainer>
         <StyledCenterImageWrapper className='about-center'>
            <h4>02 Support</h4>
            <img src={Image2} alt='image-2' />
         </StyledCenterImageWrapper>
         <StyledCenterTextContainer className='about-center'>
            <h3>02</h3>
            <p>{t('about.text2')}</p>
         </StyledCenterTextContainer>
         <StyledBottomImageWrapper className='about-bottom'>
            <h4>03 Satisfaction</h4>
            <img src={Image3} alt='image-3' />
         </StyledBottomImageWrapper>
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
      </StyledAboutSectionWrapper>
   );
};

export default AboutSection;
