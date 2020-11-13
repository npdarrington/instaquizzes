import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0 20x;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box
    font-family: 'Catamaran', sans-serif;
  }
`;
