import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { themes } from './constants/themes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    
    a {
      text-decoration: none;
    }
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <ThemeProvider theme={themes}>
       <GlobalStyle/>
       <React.StrictMode>
           <App />
       </React.StrictMode>
   </ThemeProvider>

);

