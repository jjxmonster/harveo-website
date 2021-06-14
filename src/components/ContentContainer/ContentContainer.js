import React from 'react';

import Paginations from 'MaterialComponents/Pagination/Pagination.js';
import { StyledContentContainer } from './ContentContainer.css';

const ContentContainer = () => {
   const handleChangePage = (event, index) => {
      console.log(event, index);
   };
   return (
      <StyledContentContainer>
         <Paginations
            pages={[
               { text: '_____' },
               { text: '_____' },
               { text: '_____' },
               { text: '_____' },
               {
                  onClick: (event, index) => {
                     console.log(event, index);
                  },
               },
            ]}
            color='primary'
         />
      </StyledContentContainer>
   );
};

export default ContentContainer;
