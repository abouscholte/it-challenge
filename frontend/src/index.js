import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from "react-ga"
import pMinDelay from "p-min-delay"
import { BrowserRouter as Router } from "react-router-dom"

import Theme from "components/layout/theme"
import GlobalStyle from "components/layout/globalStyle"
import PageLoader from "components/layout/pageLoader"
import { ThemeProvider } from "styled-components"

require('dotenv').config()

ReactGA.initialize('UA-175901177-3')
ReactGA.pageview(window.location.pathname + window.location.search)

const App = lazy(() => pMinDelay(import('./App'), 200))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Suspense fallback={<PageLoader />} >
        <Router basename={process.env.PUBLIC_URL}>
          <GlobalStyle />
          <App />
        </Router>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
);
