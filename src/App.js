import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage } from './components';

import theme from './theme/theme';


const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Switch>
               <Route path='/'>
                  <LandingPage />
               </Route>
            </Switch>
         </Router>
      </ThemeProvider>
   );
};

export default App;
