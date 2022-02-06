import { ThemeProvider, createGlobalStyle } from 'styled-components';
import lackregular from '../assets/fonts/lack-regular-webfont.woff';
import lackitalic from '../assets/fonts/lack-italic-webfont.woff';
import lacklineregular from '../assets/fonts/lack-line-regular-webfont.woff';
import lacklineitalic from '../assets/fonts/lack-line-italic-webfont.woff';

const theme = {
	fonts: {
		title: "'lackregular', 'Helvetica', 'Arial', 'sans-serif'",
		main: "'Montserrat', 'Helvetica', 'Arial', 'sans-serif'",
	},
	colors: {
		primary1: 'rgba(229, 229, 229, 1)',
		background: 'rgba(0, 0, 0, 1)',
		primaryYellow: 'rgba(235, 255, 6, 1)',
	},
	breakpoints: {
		xs: 'screen and (max-width: 440px)',
		sm: 'screen and (min-width: 441px) and (max-width: 640px)',
		md: 'screen and (max-width: 918px) and (min-width: 641px)',
		lg: 'screen and (max-width: 1124px) and (min-width: 919px)',
		xl: 'screen and (max-width: 1280px) and (min-width: 1125px)',
		xxl: 'screen and (min-width: 1281px)',
	},
};

const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'lackregular';
      src: url(${lackregular}) format('woff');      
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'lackitalic';
      src: url(${lackitalic}) format('woff');      
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'lacklineregular';
      src: url(${lacklineregular}) format('woff');      
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'lacklineitalic';
      src: url(${lacklineitalic}) format('woff');      
      font-weight: normal;
      font-style: normal;
  }
    *,*::after,*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  *::selection{
    background: ${props => props.theme.colors.primaryYellow};
    color: black;
  }
  html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
  }
  body {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary1};
    cursor: none;
    & #root{
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    
    }
  }
  #root {
    height: 100%;
   
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: none;  
  }
  li{
    list-style: none;
  }

`;

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
);

export default Theme;
