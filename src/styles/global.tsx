import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {      
      --primary-color: #03DAC5;
      --primary-variant-color: #41FFFF;
      --primary-glass: radial-gradient(57.71% 57.14% at 50% 50%, #222222 0%, rgba(34, 34, 34, 0) 100%), radial-gradient(59.7% 58.86% at 50% 50%, #03DAC5 0%, rgba(65, 255, 255, 0) 100%), radial-gradient(66.08% 64.7% at 50% 50%, #E1E1E1 0%, rgba(240, 240, 240, 0) 100%);
      --primary-glass-variant: radial-gradient(59.03% 58.72% at 50% 50%, #222222 0%, rgba(34, 34, 34, 0) 100%), radial-gradient(77.09% 64.29% at 50% 50%, #03DAC5 0%, rgba(65, 255, 255, 0) 100%), radial-gradient(63.88% 62.02% at 50% 50%, #E1E1E1 0%, rgba(240, 240, 240, 0) 100%);
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
      --shadow-10: box-shadow: 0px 26px 10px rgba(0, 0, 0, 0.01), 0px 15px 9px rgba(0, 0, 0, 0.05), 0px 7px 7px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.1);
      --shadow-20: box-shadow: 0px 66px 26px rgba(0, 0, 0, 0.03), 0px 37px 22px rgba(0, 0, 0, 0.1), 0px 16px 16px rgba(0, 0, 0, 0.17), 0px 4px 9px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0, 0, 0, 0.2);
      --background-blur: blur(21px); // background: #D9D9D9; and backdrop-filter: blur(21px);
      /* Border radius */
      --border-radius-sm: 4px;
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

        @media screen only and (max-width: 600px) {
          font-size: var(--font-size-xxs);
        }
    }

    section {
      max-width: 1440px;
      padding: var(--space-xl) var(--space-md);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--space-md);

      @media screen only and (max-width: 600px) {
        padding: var(--space-lg) var(--space-sm);
      }
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Syne', sans-serif;
      font-weight: var(--font-weight-bold);
      font-style: normal;
      line-height: 77px;
      letter-spacing: 0.01em;
    }

    h1 {
      font-size: var(--font-size-xxl);

      @media screen only and (max-width: 600px) {
        font-size: var(--font-size-xl);
      }
    }

    h2 {
      font-size: var(--font-size-xl);

      @media screen only and (max-width: 600px) {
        font-size: var(--font-size-lg);
      }
    }

    h3 {
      font-size: var(--font-size-lg);

      @media screen only and (max-width: 600px) {
        font-size: var(--font-size-md);
      }
    }

    h4 {
      font-size: var(--font-size-sm);

      @media screen only and (max-width: 600px) {
        font-size: var(--font-size-xs);
      }
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
`

export default GlobalStyle;