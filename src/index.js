import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'assets/scss/material-kit-react.scss?v=1.10.0';
import App from 'App.js';
import './i18next/i18n.js';
import { LoadingIndicator } from 'components';

ReactDOM.render(
   <Suspense fallback={<LoadingIndicator />}>
      <App />
   </Suspense>,
   document.getElementById('root')
);
