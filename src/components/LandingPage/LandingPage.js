import React from 'react';

import NavBar from '../NavBar';
import SectionsContainer from '../SectionsContainer';
import { StyledLandingPageWrapper } from './LandingPage.css.js';

const LandingPage = () => {
   return (
      <StyledLandingPageWrapper>
         <NavBar />
         <SectionsContainer />
      </StyledLandingPageWrapper>
   );
};

export default LandingPage;
