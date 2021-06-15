import styled from 'styled-components';

export const StyledAboutSectionWrapper = styled.section`
   width: 100%;
   height: 100%;
   padding-bottom: 5%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr 10%;
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
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 1;
   grid-row-end: 2;
   border: 1px solid #e6e6e6;
   border-right: 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const StyledCenterTextContainer = styled.aside`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 2;
   grid-row-end: 3;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid #e6e6e6;
`;
export const StyledBottomTextContainer = styled.aside`
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 3;
   grid-row-end: 4;
   border: 1px solid #e6e6e6;
   display: flex;
   align-items: center;
   justify-content: center;
`;
