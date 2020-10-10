import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';

import CuisineProvider from './providers/CuisineProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CuisineProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CuisineProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);