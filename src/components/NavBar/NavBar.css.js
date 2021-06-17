import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
   z-index: 100;
   width: 100%;
   height: 15%;
   display: flex;
   position: fixed;
   top: 0;
   align-items: center;
   justify-content: space-around;
   padding: 0 20%;
   box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px;
   background: linear-gradient(
      36deg,
      rgb(235, 235, 235) 12%,
      rgb(245, 245, 245) 71%
   );
   transition: ease 0.4s;
   > a {
      cursor: pointer;
      font-weight: 700;
      position: relative;
      color: black;
      z-index: 50;
      transition: 0.2s ease;
      &:hover {
         transform: translateY(-5px);
      }
      &:hover::after {
         width: 100%;
      }
      &:after {
         transition: 0.2s ease;
         z-index: -10;
         width: 0%;
         height: 100%;
         position: absolute;
         bottom: 0;
         left: 0;
         right: 0;
         margin: auto;
         content: '';
         border-bottom: 1px solid rgb(11, 8, 170);
      }
   }
   > .nav-logo {
      position: absolute;
      left: 5%;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 70%;
   }
   > .language-dropdown {
      position: absolute;
      right: 5%;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 100%;
      display: flex;
      align-items: center;
   }

   //mobile
   @media only screen and (max-width: 1050px) {
      transition: 0.5s ease;
      flex-direction: column;
      ${({ isMobileMenuActive }) =>
         isMobileMenuActive
            ? `   
            height:100%;  
            > .nav-logo{
               height: 7vh;
            }
            > .language-dropdown{
               display:block;
            }
         `
            : `
            height:10vh;
            >a{
               display:none;
               opacity:0;
            }
            >.language-dropdown{
               display:none;
               opacity:0;
            }
          
         `}
      > .nav-logo {
         position: absolute;
         top: 2vw;
         margin: auto;
         bottom: auto;
         height: 7vh;
      }
      > .language-dropdown {
         position: static;
         height: auto;
         display: block;
         margin: 0;
      }
   }
`;

export const StyledHamburgerMenu = styled.div`
   width: 7vh;
   height: 7vh;
   position: absolute;
   right: 5%;
   top: 2vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   padding: 4% 2%;
   > div {
      transition: 0.2s ease;
      border-radius: 1px;
      width: 28px;
      height: 2px;
      background: black;
   }
   ${({ isMobileMenuActive }) =>
      isMobileMenuActive
         ? `
         justify-content: flex-start;
      >div:first-child{
         transform:translateY(4px) rotate(45deg);
      }
      >div:last-child{
         transform: rotate(-45deg);
      }
      >div:nth-child(2){
         opacity:0;
         }
         `
         : null}
`;
