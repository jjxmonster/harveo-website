import styled from 'styled-components';

export const StyledExpansionWrapper = styled.div`
   width: 100%;
   height: 400vh;
   > section {
      width: 100%;
      height: 25%;
      padding: 0 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
   }
   > section:nth-child(odd) {
      background: white;
   }
   > section:nth-child(even) {
    background: linear-gradient(
        36deg
        , rgb(235, 235, 235) 12%, rgb(245, 245, 245) 71%);
        }
   }
`;
