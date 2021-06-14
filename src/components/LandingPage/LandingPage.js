import React from 'react';

import NavBar from '../NavBar';
import ContentContainer from '../ContentContainer';
import { StyledLandingPageWrapper } from './LandingPage.css.js';

const LandingPage = () => {
   return (
      <StyledLandingPageWrapper>
         <NavBar />
         <ContentContainer />
      </StyledLandingPageWrapper>
   );
};

export default LandingPage;
