import { createGlobalStyle } from 'styled-components/macro';
import devices from 'shared/media';
import { iconColors } from 'shared/colors';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 1em;
  } 

  h2 {
    font-size: 24px;
    margin-bottom: 1em;
  } 

  svg {
    color: ${iconColors.default};
  }

  @media ${devices.mobileOnly} {
    h1 {
        font-size: 24px;
    }

    h2 {
        font-size: 18px;
    }
  }
`;

export default GlobalStyle;
