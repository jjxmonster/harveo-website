import React from 'react';

import { StyledFooterWrapper } from './Footer.css.js';

const Footer = () => {
   return (
      <StyledFooterWrapper>
         <h3 className='footer-title'>Contact us</h3>
         <div className='footer-top'>
            <p>
               <i className='fas fa-phone'></i> +48 12 352 12 12, +48 784 640
               360
            </p>
            <p>
               <i className='far fa-envelope'></i> info@harveo.pl
            </p>
            <p>
               <i className='fas fa-map-marker-alt'></i> Imperial Business
               Center, Wadowicka 7 Kraków
            </p>
            <p>
               <i className='far fa-clock'></i> Mon. - Fr. 9:00 - 20:00
            </p>
         </div>
         <div className='footer-center'>
            <i className='fab fa-google'></i>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-linkedin-in'></i>
         </div>
         <div className='footer-bottom'>
            <p>
               Copyright © 2021 Harveo. All rights reserved. Polityka
               prywatności
            </p>
         </div>
      </StyledFooterWrapper>
   );
};

export default Footer;