import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
      --primary-color: #00E7F9;
      --secondary-color: #8257E6;
      --black: #000000;
      --dark-gray: #0D0D0D;
      --gray: #494949;
      --light-gray: #B5B5B5;
      --white: #FAFAFA;
      --red: #FF4D4D;
      /* Border radius */
      --border-radius-sm: 4px;
      /* Font sizes */
      --font-size-xxl: 75px;
      --font-size-xl: 50px;
      --font-size-lg: 33px;
      --font-size-md: 24px;
      --font-size-sm: 18px;
      --font-size-xs: 16px;
      --font-size-xxs: 14px;
      /* Font weights */
      --font-weight-regular: 400;
      --font-weight-medium: 500;
      --font-weight-semibold: 600;
      --font-weight-bold: 700;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Arial', sans-serif;
    }

    html, body, #root {
      height: 100vh;
      scroll-behavior: smooth;
      background-color: var(--black);
      max-width: 100vw;
      overflow-x: hidden;
    }

    body, input, button, a, li, ul, span, p {
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-regular);
        color: var(--white);
        line-height: 1.4;
        text-decoration: none;
        list-style-type: none;

        @media screen only and (max-width: 600px) {
          font-size: var(--font-size-xxs);
        }
    }

    section {
      max-width: 1600px;
      padding: 0 32px;
      margin: 0 auto;

      @media screen only and (max-width: 600px) {
        padding: 0 16px;
      }
    }
    
    h1, h2, h3 {
      font-family: 'Poppins', sans-serif;
    }

    h1 {
      font-size: var(--font-size-xxl);
      font-weight: var(--font-weight-bold);
      line-height: 86px;
      letter-spacing: 0.01em;

      @media screen only and (max-width: 600px) {
        font-size: var(--font-size-xl);
      }
    }

    h2 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      line-height: 75px;

      @media screen only and (max-width: 600px) {
        font-size: var(--font-size-lg);
      }
    }

    h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      line-height: 50px;

      @media screen only and (max-width: 600px) {
        font-size: var(--font-size-md);
      }
    }

    button, a {
        cursor: pointer;
        border: none;
        font-weight: var(--font-weight-semibold);
    }

    a {
      color: inherit;
      text-decoration: none;
    }
`

export default GlobalStyle;