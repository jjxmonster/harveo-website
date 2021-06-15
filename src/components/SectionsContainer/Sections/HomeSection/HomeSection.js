import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
   StyledHomeSectionWrapper,
   StyledHomeTextWrapper,
   StyledHomeImageWrapper,
} from './HomeSection.css.js';
import { ReactComponent as HomeImage } from '../../../../images/landing-image.svg';

const HomeSection = () => {
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
      </StyledHomeSectionWrapper>
   );
};

export default HomeSection;
