import React from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import SectionsContainer from '../SectionsContainer';
import { StyledLandingPageWrapper } from './LandingPage.css.js';

const LandingPage = () => {
   return (
      <StyledLandingPageWrapper>
         <NavBar />
         <SectionsContainer />

         <Footer />
      </StyledLandingPageWrapper>
   );
};

export default LandingPage;
