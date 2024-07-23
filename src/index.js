import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { IncidentProvider } from './context/IncidentContext';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <IncidentProvider>
        <App />
      </IncidentProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);