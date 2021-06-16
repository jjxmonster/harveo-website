import styled from 'styled-components';

export const StyledHomeSectionWrapper = styled.section`
   width: 100%;
   height: 100vh;
   display: flex;
   padding: 0 5%;
`;

export const StyledHomeTextWrapper = styled.div`
   flex: 1;
   padding-left: 5%;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: center;
   > h1 {
      font-weight: 700;
      font-size: 4vw;
   }
   > p {
      font-size: 1.6vw;
      line-height: normal;
   }
`;

export const StyledHomeImageWrapper = styled.div`
   flex: 2;
   display: flex;
   align-items: center;
   justify-content: center;
   > svg {
      width: 80%;
      height: 80%;
   }
`;
