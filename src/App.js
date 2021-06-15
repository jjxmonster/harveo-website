import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage, NavBar, WelcomePage } from './components';

import theme from './theme/theme';

const App = () => {
   // state for unmount welcome page
   const [isWelcomeView, setIsWelcomeView] = useState(true);
   return (
      <ThemeProvider theme={theme}>
         {isWelcomeView ? (
            <WelcomePage setIsWelcomeView={setIsWelcomeView} />
         ) : null}
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
