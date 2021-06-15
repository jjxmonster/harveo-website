import React from 'react';
import { useTranslation } from 'react-i18next';

import {
   StyledAboutSectionWrapper,
   StyledTopTextContainer,
   StyledCenterTextContainer,
   StyledBottomTextContainer,
} from './AboutSection.css.js';

const AboutSection = () => {
   const { t } = useTranslation();
   return (
      <StyledAboutSectionWrapper>
         <StyledTopTextContainer>
            <h3>01</h3>
            <p>{t('about.text1')}</p>
         </StyledTopTextContainer>
         <StyledCenterTextContainer>
            <h3>02</h3>
            <p>{t('about.text2')}</p>
         </StyledCenterTextContainer>
         <StyledBottomTextContainer>
            <h3>03</h3>
            <p>{t('about.text3')}</p>
         </StyledBottomTextContainer>
      </StyledAboutSectionWrapper>
   );
};

export default AboutSection;
