import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {      
      --primary-color: #03DAC5;
      --primary-variant-color: #41FFFF;
      --secondary-color: #BB86FC;
      --secondary-variant-color: #D49FFF;
      --gray-900: #222222;
      --gray-800: #3B3B3B;
      --gray-700: #515151;
      --gray-600: #626262;
      --gray-500: #7E7E7E;
      --gray-400: #9E9E9E;
      --gray-300: #B1B1B1;
      --gray-200: #CFCFCF;
      --gray-100: #E1E1E1;
      --gray-50: #F0F0F0;
      --black: #000000;
      --dark-gray: #0D0D0D;
      --gray: #494949;
      --light-gray: #B5B5B5;
      --white: #FAFAFA;
      --red: #FF4D4D;
      /*Box shadow */
      --shadow-10: 0px 26px 10px rgba(0, 0, 0, 0.01), 0px 15px 9px rgba(0, 0, 0, 0.05), 0px 7px 7px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.1);
      --shadow-20: 0px 66px 26px rgba(0, 0, 0, 0.03), 0px 37px 22px rgba(0, 0, 0, 0.1), 0px 16px 16px rgba(0, 0, 0, 0.17), 0px 4px 9px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0, 0, 0, 0.2);
      --background-blur: blur(21px); // background: #D9D9D9; and backdrop-filter: blur(21px);
      /* Border radius */
      --border-radius-sm: 4px;
      /* Transitions */
      --transition-03: all 0.3s ease-in-out;
      /* Font sizes */
      --font-size-xxl: 64px;
      --font-size-xl: 48px;
      --font-size-lg: 32px;
      --font-size-md: 28px;
      --font-size-sm: 18px;
      --font-size-xs: 15px;
      --font-size-xxs: 14px;
      /* Font weights */
      --font-weight-regular: 400;
      --font-weight-bold: 700;
      /* Spacing */
      --space-xxs: 4px;
      --space-xs: 8px;
      --space-sm: 16px;
      --space-xmd: 24px;
      --space-md: 32px;
      --space-lg: 64px;
      --space-xl: 128px;
      --space-xxl: 256px;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'DM Sans', sans-serif;
    }

    html, body, #root {
      height: 100vh;
      scroll-behavior: smooth;
      background-color: var(--gray-900);
      max-width: 100vw;
      overflow-x: hidden;
    }

    body, input, button, a, li, ul, span, p {
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-regular);
        font-style: normal;
        color: var(--gray-50);
        line-height: 24px;
        text-decoration: none;
        list-style-type: none;
        text-wrap: balance;
    }

    section {
      max-width: 1440px;
      width: 100%;
      padding: var(--space-xl) var(--space-md);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--space-md);
    }
    
    h1, h2, h3, h4, h5, h6 {
      font: normal normal var(--font-weight-bold) var(--font-size-md)/normal 'Syne', sans-serif;
    }

    h1 {
      font-size: var(--font-size-xxl);
    }

    h2 {
      font-size: var(--font-size-xl);
    }

    h3 {
      font-size: var(--font-size-lg);
    }

    h4 {
      font-size: var(--font-size-md);
    }

    h5 {
      font-size: var(--font-size-sm);
    }

    button, a {
        cursor: pointer;
        border: none;
        font-weight: var(--font-weight-bold);
        line-height: 22px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    @media only screen and (max-width: 1024px) {
      body, input, button, a, li, ul, span, p {
          font-size: var(--font-size-xxs);
      }

      section {
        padding: var(--space-lg) var(--space-sm);
      }

      h1 {
        font-size: var(--font-size-xl);
      }

      h2 {
        font-size: var(--font-size-lg);
      }

      h3 {
        font-size: var(--font-size-md);
      }
    }

    @media only screen and (max-width: 600px) {
      h1 {
        font-size: var(--font-size-md);
      }

      h2, h3 {
        font-size: var(--font-size-md);
      }

      h4 {
        font-size: var(--font-size-sm);
      }
    }
`;

export default GlobalStyle;