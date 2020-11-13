import styled, { createGlobalStyle } from 'styled-components';
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

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: #fff;
	}

	h1 {
		font-family: Fascinate Inline;
		background-image: linear-gradient(180deg, #fff, #87f1ff);
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-color-fill: transparent;
		-moz-background-clip: text;
		-mox-text-fill-color: transparent;
		filter: drop-shadow(2px 2px #0085a3);
		font-size: 70px;
		font-weight: 400;
		text-align: center;
		margin: 20px;
		color: yellow;
	}
`;
