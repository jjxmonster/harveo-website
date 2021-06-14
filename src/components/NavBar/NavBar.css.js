import styled from 'styled-components';

export const StyledNavBarWrapper = styled.nav`
   width: 100%;
   height: 15%;
   display: flex;
   position: relative;
   align-items: center;
   justify-content: space-around;
   padding: 0 20%;
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
`;
