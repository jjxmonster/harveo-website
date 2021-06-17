import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { expanstionSectionAnimation } from './ExpanstionSectionAnimations.js';

import Button from 'MaterialComponents/CustomButtons/Button.js';
import { StyledExpansionWrapper } from './ExpanstionAboutSection.css.js';

const ExpansionAboutSection = () => {
   const { t } = useTranslation();
   useEffect(() => {
      expanstionSectionAnimation();
   }, []);
   return (
      <StyledExpansionWrapper className='about-expansion'>
         <section className='section-1'>
            <h2>{t('about.expansion.section-1.header')}</h2>
            <p>{t('about.expansion.section-1.text')}</p>
            <h2>{t('about.expansion.section-2.header')}</h2>
            <p>{t('about.expansion.section-2.text')}</p>
         </section>
         <section className='section-2'>
            <h2>{t('about.expansion.section-3.header')}</h2>
            <p>{t('about.expansion.section-3.text')}</p>
            <h2>{t('about.expansion.section-4.header')}</h2>
            <p>{t('about.expansion.section-4.text')}</p>
         </section>
         <section className='section-3'>
            <h2>{t('about.expansion.section-5.header')}</h2>
            <p>{t('about.expansion.section-5.text')}</p>
            <h2>{t('about.expansion.section-6.header')}</h2>
            <p>{t('about.expansion.section-6.text')}</p>
         </section>
         <section className='section-4'>
            <h2>{t('about.expansion.section-7.header')}</h2>
            <p>{t('about.expansion.section-7.text')}</p>
            <p>
               {t('about.expansion.section-7.city1')}{' '}
               {t('about.expansion.section-7.city2')}{' '}
               {t('about.expansion.section-7.city3')}{' '}
               {t('about.expansion.section-7.city4')}{' '}
               {t('about.expansion.section-7.city5')}{' '}
            </p>
            <p>
               We serve clients worldwide via encrypted calls {'&'} video
               meetings as well.
            </p>
            <Button color='primary'>
               <i className='far fa-envelope'></i> {t('about.expansion.button')}
            </Button>
         </section>
      </StyledExpansionWrapper>
   );
};

export default ExpansionAboutSection;
