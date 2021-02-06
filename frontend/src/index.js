import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import pMinDelay from "p-min-delay"
import { BrowserRouter as Router } from "react-router-dom"

import Theme from "components/layout/theme"
import GlobalStyle from "components/layout/globalStyle"
import PageLoader from "components/layout/pageLoader"
import { ThemeProvider } from "styled-components"

require('dotenv').config()

const App = lazy(() => pMinDelay(import('./App'), 200))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Suspense fallback={<PageLoader />} >
        <Router basename={process.env.PUBLIC_URL}>
          <GlobalStyle />
          <App />
          <p>Hello!</p>
        </Router>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
);
