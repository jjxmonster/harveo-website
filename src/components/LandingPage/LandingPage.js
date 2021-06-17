import React from 'react';

import NavBar from '../NavBar';
import Footer from '../Footer';

import SectionsContainer from '../SectionsContainer';
import { StyledLandingPageWrapper } from './LandingPage.css.js';

const LandingPage = ({ isWelcomeViewActive }) => {
   console.log(isWelcomeViewActive);
   return (
      <StyledLandingPageWrapper>
         <NavBar />
         {!isWelcomeViewActive ? <SectionsContainer /> : null}
         <Footer />
      </StyledLandingPageWrapper>
   );
};

export default LandingPage;
