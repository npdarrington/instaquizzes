import { createGlobalStyle } from 'styled-components';
import BGImage from '../images/tiffany-nguyen-bg.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20x;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;
