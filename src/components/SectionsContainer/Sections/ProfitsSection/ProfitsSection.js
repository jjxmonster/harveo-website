import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { profitsPageAnimationOnMount } from './ProfitsPageAnimations.js';

import { StyledProfitsSectionWrapper } from './ProfitsSection.css.js';
import {
   StyledNextSectionButtonWrapper,
   StyledPrevSectionButtonWrapper,
} from 'components/SectionsContainer/SectionsContainer.css.js';
//material kit react
import Button from 'MaterialComponents/CustomButtons/Button.js';
import GridContainer from 'MaterialComponents/Grid/GridContainer.js';
import GridItem from 'MaterialComponents/Grid/GridItem.js';
import InfoArea from 'MaterialComponents/InfoArea/InfoArea.js';

const ProfitsSection = ({ handleChangePage }) => {
   const { t } = useTranslation();

   useEffect(() => {
      profitsPageAnimationOnMount();
   }, []);
   return (
      <StyledProfitsSectionWrapper>
         <StyledPrevSectionButtonWrapper className='prev-page-button-container'>
            <Button
               color='github'
               size='lg'
               onClick={() => handleChangePage(2)}
               simple
               round
            >
               <div className='button-icon'>
                  <i className='fas fa-chevron-left'></i>
               </div>
               <div className='button-text'>
                  <h3>{t('homepage.button.title')}</h3>
                  <p>{t('homepage.button.description')}</p>
               </div>
            </Button>
         </StyledPrevSectionButtonWrapper>
         <GridContainer className='profits-grid'>
            <GridItem xs={12} sm={6} lg={4}>
               <InfoArea
                  title={t('profits.box1.title')}
                  description={t('profits.box1.text')}
                  icon={<i className='fas fa-graduation-cap'></i>}
                  iconColor='primary'
               />
            </GridItem>
            <GridItem xs={12} sm={6} lg={4}>
               <InfoArea
                  title={t('profits.box2.title')}
                  description={t('profits.box2.text')}
                  icon={<i className='fas fa-calculator'></i>}
                  iconColor='primary'
               />
            </GridItem>
            <GridItem xs={12} sm={6} lg={4}>
               <InfoArea
                  title={t('profits.box3.title')}
                  description={t('profits.box3.text')}
                  icon={<i className='fas fa-sliders-h'></i>}
                  iconColor='primary'
               />
            </GridItem>
            <GridItem xs={12} sm={6} lg={4}>
               <InfoArea
                  title={t('profits.box4.title')}
                  description={t('profits.box4.text')}
                  icon={<i className='fas fa-umbrella'></i>}
                  iconColor='primary'
               />
            </GridItem>
            <GridItem xs={12} sm={6} lg={4}>
               <InfoArea
                  title={t('profits.box5.title')}
                  description={t('profits.box5.text')}
                  icon={<i className='fas fa-umbrella'></i>}
                  iconColor='primary'
               />
            </GridItem>
            <GridItem xs={12} sm={6} lg={4}>
               <InfoArea
                  title={t('profits.box6.title')}
                  description={t('profits.box6.text')}
                  icon={<i className='fas fa-umbrella'></i>}
                  iconColor='primary'
               />
            </GridItem>
         </GridContainer>
         <StyledNextSectionButtonWrapper className='next-page-button-wrapper'>
            <Button
               color='github'
               size='lg'
               onClick={() => handleChangePage(4)}
               simple
               round
            >
               <div className='button-text'>
                  <h3>Harveo</h3>
                  <p>{t('about.button-prev-page.description')}</p>
               </div>
               <div className='button-icon'>
                  <i className='fas fa-chevron-right'></i>
               </div>
            </Button>
         </StyledNextSectionButtonWrapper>
      </StyledProfitsSectionWrapper>
   );
};

export default ProfitsSection;
