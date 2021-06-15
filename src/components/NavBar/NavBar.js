import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../../images/Harveo-logo.png';

import CustomDropdown from 'MaterialComponents/CustomDropdown/CustomDropdown';
import { StyledNavBarWrapper } from './NavBar.css.js';
import { navBarAnimation } from './NavBarAnimation.js';

const NavBar = () => {
   const { i18n, t } = useTranslation();

   const changeLanguage = language => {
      i18n.changeLanguage(language);
   };
   const handlePurposeChange = event => {
      switch (event) {
         case 'English':
            changeLanguage('en');
            break;
         case 'Polish':
            changeLanguage('pl');
            break;
         default:
            changeLanguage('en');
            break;
      }
   };

   return (
      <StyledNavBarWrapper className='nav-bar'>
         <img src={Logo} alt='logo' className='nav-logo' />
         <a>{t('nav.1')}</a>
         <a>{t('nav.2')}</a>
         <a>{t('nav.3')}</a>
         <a>{t('nav.4')}</a>
         <div className='language-dropdown'>
            <CustomDropdown
               onClick={handlePurposeChange}
               buttonText={t('nav.dropdown')}
               dropdownList={['English', 'Polish']}
            />
         </div>
      </StyledNavBarWrapper>
   );
};

export default NavBar;
