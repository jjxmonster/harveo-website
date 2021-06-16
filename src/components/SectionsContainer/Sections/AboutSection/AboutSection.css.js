import styled from 'styled-components';

import { scrollArrowAnimation } from '../../../WelcomePage/WelcomePage.css.js';

export const StyledAboutSectionWrapper = styled.section`
   width: 100%;
   padding-top: 15vh;
`;
export const StyledGridContainerAbout = styled.section`
   width: 100%;
   height: 85vh;
   padding-bottom: 5%;
   padding-left: 10%;
   padding-right: 10%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr 12%;
   position: relative;
   > .about-scroll-button {
      position: absolute;
      bottom: 3%;
      left: 5%;
      > span {
         font-size: 1.5vh;
         text-transform: none;
      }
      > span .fa-long-arrow-alt-down {
         font-size: 3vh;
         animation: ${scrollArrowAnimation} 2s ease infinite;
      }
   }
   > aside {
      padding: 0 5%;
      position: relative;
   }
   > aside p {
      z-index: 50;
      font-size: 1.8vh;
      font-weight: 400;
      text-align: center;
   }
   > aside h3 {
      user-select: none;
      color: #e6e6e6;
      font-size: 10vh;
      left: 2px;
      top: 2px;
      font-weight: 800;
      opacity: 0.9;
      z-index: 0;
      margin: auto;
      position: absolute;
   }
`;
export const StyledTopTextContainer = styled.aside`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 2;
   border: 1px solid #e6e6e6;
   border-right: 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const StyledCenterTextContainer = styled.aside`
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 1;
   grid-row-end: 2;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid #e6e6e6;
`;
export const StyledBottomTextContainer = styled.aside`
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 2;
   grid-row-end: 3;
   border: 1px solid #e6e6e6;
   border-bottom: 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const StyledNumbersContainer = styled.div`
   grid-column-start: 1;
   grid-column-end: 3;
   grid-row-start: 4;
   grid-row-end: 5;
   display: flex;
   padding: 0 10%;
   > div:last-child {
      border: 0;
   }
   > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid rgba(128, 128, 128, 0.2);
      > h3 {
         font-weight: 700;
         font-size: 1.5vw;
         color: ${({ theme }) => theme.colors.blue.normal};
         padding: 0;
         margin: 0;
      }
   }
`;

const ImageWrapper = styled.div`
   overflow: hidden;
   position: relative;
   &:hover:after {
      opacity: 0.7;
   }
   &:hover h4 {
      transform: translateY(-10px);
   }
   // &:after {
   //    transition: 1s ease;
   //    width: 100%;
   //    height: 100%;
   //    z-index: 0;
   //    content: '';
   //    position: absolute;
   //    opacity: 0.95;
   //    background: rgb(235, 235, 235);
   //    left: 0;
   //    right: 0;
   //    margin: auto;
   // }
   > img {
      width: 100%;
      object-fit: cover;
   }
   > h4 {
      transition: 1s ease;
      font-size: 2.5vh;
      font-weight: 700;
      position: absolute;
      top: 10%;
      left: 10%;
      z-index: 50;
   }
`;
export const StyledTopImageWrapper = styled(ImageWrapper)`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 2;
   grid-row-end: 4;
   > svg {
      width: 100%;
   }
`;
export const StyledCenterImageWrapper = styled(ImageWrapper)`
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 2;
   grid-row-end: 3;
`;
export const StyledBottomImageWrapper = styled(ImageWrapper)`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 3;
   grid-row-end: 4;
`;
