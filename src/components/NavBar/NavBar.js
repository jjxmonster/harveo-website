import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Logo from '../../images/Harveo-logo.png';
import CustomDropdown from 'MaterialComponents/CustomDropdown/CustomDropdown';
import { StyledNavBarWrapper } from './NavBar.css.js';

const NavBar = () => {
   const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
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

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const showAnim = gsap
         .from('.nav-bar', {
            yPercent: -100,
            paused: true,
            duration: 0.2,
         })
         .progress(1);

      ScrollTrigger.create({
         start: 'top top',
         end: 9999,
         onUpdate: self => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
         },
      });
   }, []);

   return (
      <StyledNavBarWrapper
         className='nav-bar'
         isMobileMenuActive={isMobileMenuActive}
      >
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
