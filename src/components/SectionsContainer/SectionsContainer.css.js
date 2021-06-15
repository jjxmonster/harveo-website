import styled, { keyframes } from 'styled-components';

export const StyledSectionsContainer = styled.div`
   width: 100%;
   height: 85%;
   position: relative;
   overflow-x: hidden;
   > .pagination {
      position: absolute;
      bottom: 5%;
      left: 0;
      right: 0;
      margin: auto;
      width: 300px;
   }
`;

const hoverArrowAnimation = keyframes`
   0% {
   transform:translateY(0px);
  }
  50%{
      transform:translateX(10px) scale(1.2);;
   
  }
  100%{
      transform:translateX(0px) scale(1);
  }
`;
export const StyledNextSectionButtonWrapper = styled.div`
   width: 10%;
   height: 100%;
   right: 0;
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   > button:hover span .button-text {
      transform: translate(-10px, -10px);
   }
   > button:hover span .button-icon i {
      animation: ${hoverArrowAnimation} 1000ms ease infinite;
   }
   > button span .button-text {
      transition: 0.2s ease;
      > h3 {
         margin: 0;
         text-transform: none;
         font-weight: 500;
         font-size: 2.8vh;
         text-align: end;
      }
      > p {
         margin: 0;
         font-size: 1.8vh;
         font-weight: 200;
         text-transform: none;
      }
   }
   > button span .button-icon {
      margin-left: 2%;
   }
`;
export const StyledPrevSectionButtonWrapper = styled.div`
   width: 10%;
   height: 100%;
   background: green;
`;
