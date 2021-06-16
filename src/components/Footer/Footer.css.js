import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
   width: 100%;
   height: 3%;
   transition:.3s ease;
   display: flex;
   flex-direction:column;
   position: fixed;
   bottom: 0;
   background: linear-gradient(
      36deg
      , rgb(235, 235, 235) 12%, rgb(245, 245, 245) 71%);
      }
   border-top: 1px solid rgba(128, 128, 128, 0.2);
   align-items: center;
   justify-content: space-around;
   padding: 0 20%;
   &:hover{
      height:20%;
      >.footer-center{
         display: flex;
      }
      >.footer-bottom{display:block;}
      >h3{
         opacity:1;
      }
   }
   >h3{
      opacity:0;
      position:absolute;
      left:5%;
      top:-15%;
      font-weight:700;
      font-size:4vh;
      margin:0;
   }
   >.footer-top{
      flex:1;
       width:100%;
      display: flex;
      align-items:center;
      justify-content:space-around;
   }
   >.footer-center{
      width:100%;
      flex:1;
      display: none;
      align-items:center;
      justify-content:space-around;
      padding:0 40%;
 
   }
   >.footer-bottom{
      display:none;
   }   
`;
