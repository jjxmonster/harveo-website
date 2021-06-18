import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Logo from '../../images/Harveo-logo.png';
import CustomDropdown from 'MaterialComponents/CustomDropdown/CustomDropdown';
import { StyledNavBarWrapper, StyledHamburgerMenu } from './NavBar.css.js';

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
   const handleToogleIsMobileMenuActive = () => {
      isMobileMenuActive
         ? setIsMobileMenuActive(false)
         : setIsMobileMenuActive(true);
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
         <StyledHamburgerMenu
            isMobileMenuActive={isMobileMenuActive}
            onClick={handleToogleIsMobileMenuActive}
         >
            <div></div>
            <div></div>
            <div></div>
         </StyledHamburgerMenu>
         <img src={Logo} alt='logo' className='nav-logo' />
         <a href='https://harveo.pl/platform/' target='_blank'>
            {t('nav.1')}
         </a>
         <a
            href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x47165bfcad6297ff:0x5b34919713ec3c72?source=g.page.default'
            target='_blank'
         >
            {t('nav.2')}
         </a>
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
