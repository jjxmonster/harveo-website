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
            <a
               target='_blank'
               href='https://www.google.com/maps/place/Harveo+Doradca+Kredytowy+kredyt+hipoteczny+Krak%C3%B3w/@50.0328899,19.9357238,17z/data=!3m1!4b1!4m5!3m4!1s0x47165bfcad6297ff:0x5b34919713ec3c72!8m2!3d50.0328893!4d19.9379299'
            >
               <i className='fab fa-google'></i>
            </a>
            <a target='_blank' href='https://www.facebook.com/harveo.official/'>
               <i className='fab fa-facebook-f'></i>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/jakubpajak/'>
               <i className='fab fa-linkedin-in'></i>
            </a>
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
