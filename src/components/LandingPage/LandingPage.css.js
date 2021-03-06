import styled, { keyframes } from 'styled-components';

export const StyledLandingPageWrapper = styled.div`
   width: 100vw;
   background: linear-gradient(
      36deg
      , rgb(235, 235, 235) 12%, rgb(245, 245, 245) 71%);
      }
      > .footer-developed{
         height:20%;
         >.footer-center{
            display: flex;
         }
         >.footer-bottom{display:block;}
         >h3{
            opacity:1;
         }
         @media only screen and (max-width: 1050px) {
            padding: 0 5% 10%;
            height: 50%;
            > .footer-center {
               display: flex;
            }
            > .footer-top {
               flex: 2;
               align-items: flex-start;
               justify-content: center;
               > p {
                  display: block;
               }
            }
            > .footer-bottom {
               display: block;
            }
            > h3 {
               opacity: 1;
            }
         }

      }
`;

const backgroundAnimation = keyframes`
0% {
   visibility: visible;
   transform:  translateY(-100%);
 }
 100% {
   transform:  translateY(100%);
 }
`;
const borderAnimation = keyframes`
0% {
  width:0%;
 }
 100% {
   width:60%;
 }
`;
export const StyledLandingPageWelcome = styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   background: linear-gradient(36deg, rgb(11, 8, 170) 12%, rgb(6, 3, 141) 71%);
   display: flex;
   align-items: center;
   justify-content: center;
   > div {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      &:after {
         visibility: hidden;
         animation: ${backgroundAnimation} 1s linear forwards;
         animation-delay: 1s;
         position: absolute;
         background: rgb(56, 56, 56);
         top: 0;
         margin: auto;
         width: 100%;
         height: 100%;
         content: '';
         z-index: 100;
      }
   }
   > div h1 {
      position: relative;
      font-size: 6vh;
      &:after {
         animation: ${borderAnimation} 800ms ease forwards;
         animation-delay: 2100ms;
         position: absolute;
         border-bottom: 4px solid white;
         right: 0;
         left: 0;
         margin: auto;
         width: 0%;
         height: 100%;
         content: '';
      }
      color: white;
   }
   > .scroll-button {
      position: absolute;
      bottom: 2%;
   }
`;
