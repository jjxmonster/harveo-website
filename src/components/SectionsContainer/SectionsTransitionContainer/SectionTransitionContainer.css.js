import styled from 'styled-components';

export const StyledSectionsTransition = styled.div`
   width: 100%;
   height: 100%;
   background: ${({ theme }) => theme.colors.blue.normal};
   position: absolute;
   transform: translateX(100%);
   ${({ position }) => {
      switch (position) {
         case 'left':
            return `transform: translateX(100%);`;
         case 'right':
            return `transform: translateX(-100%);`;
         default:
            break;
      }
   }};
`;
