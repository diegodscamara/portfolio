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
      --red: #FF4D4D;
      --gray-50-linear-10: linear-gradient(45deg, rgba(240, 240, 240, 0.04) 0%, rgba(240, 240, 240, 0.00) 100%);
      --gray-50-linear-15: linear-gradient(45deg, rgba(240, 240, 240, 0.06) 0%, rgba(240, 240, 240, 0.00) 100%);
      /*Box shadow */
      --shadow-10: 0px 26px 10px rgba(0, 0, 0, 0.01), 0px 15px 9px rgba(0, 0, 0, 0.05), 0px 7px 7px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.1);
      --shadow-20: 0px 66px 26px rgba(0, 0, 0, 0.03), 0px 37px 22px rgba(0, 0, 0, 0.1), 0px 16px 16px rgba(0, 0, 0, 0.17), 0px 4px 9px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0, 0, 0, 0.2);
      --background-blur: blur(21px); // background: #D9D9D9; and backdrop-filter: blur(21px);
      /* Border radius */
      --border-radius-sm: 4px;
      /* Transitions */
      --transition-03: all 0.3s ease-in-out;
      /* Font sizes */
      --font-s-100: 1.4rem;
      --font-s-200: 1.5rem;
      --font-s-300: 1.8rem;
      --font-m-400: 2.8rem;
      --font-m-500: 3.2rem;
      --font-l-600: 4.8rem;
      --font-l-700: 6.4rem;
      /* Font weights */
      --font-weight-regular: 400;
      --font-weight-bold: 700;
      /* Spacing */
      --spacing-s-100: 0.4rem;
      --spacing-s-200: 0.8rem;
      --spacing-s-300: 1.6rem;
      --spacing-m-400: 2.4rem;
      --spacing-m-500: 3.2rem;
      --spacing-m-600: 6.4rem;
      --spacing-l-700: 12.8rem;
      --spacing-l-800: 25.6rem;
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
      font-size: 62.5%;
    }

    body, input, button, a, li, ul, span, p {
        font-size: var(--font-s-200);
        font-weight: var(--font-weight-regular);
        font-style: normal;
        color: var(--gray-50);
        line-height: 24px;
        text-decoration: none;
        list-style-type: none;
        text-wrap: balance;
    }

    section, footer {
      max-width: 1440px;
      width: 100%;
      padding: var(--spacing-l-700) var(--spacing-m-500);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-m-500);
    }
    
    h1, h2, h3, h4, h5, h6 {
      font: normal normal var(--font-weight-bold) var(--font-m-400)/normal 'Syne', sans-serif;
    }

    h1 {
      font-size: var(--font-l-700);
    }

    h2 {
      font-size: var(--font-l-600);
    }

    h3 {
      font-size: var(--font-m-500);
    }

    h4 {
      font-size: var(--font-m-400);
    }

    h5 {
      font-size: var(--font-s-300);
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
          font-size: var(--font-s-100);
      }

      section {
        padding: var(--spacing-m-600) var(--spacing-s-300);
      }

      h1 {
        font-size: var(--font-l-600);
      }

      h2 {
        font-size: var(--font-m-500);
      }

      h3 {
        font-size: var(--font-m-400);
      }
    }

    @media only screen and (max-width: 600px) {
      h1 {
        font-size: var(--font-m-400);
      }

      h2, h3 {
        font-size: var(--font-m-400);
      }

      h4 {
        font-size: var(--font-s-300);
      }
    }
    .swiper, swiper-container{
      z-index: 0;
      padding: 3.2rem 0;
    }

    .swiper-pagination-bullets {
      top: 0 !important;
      right: 32px;
      width: auto !important;
      left: unset !important;
      .swiper-pagination-bullet {
        background: var(--gray-200);
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: var(--primary-color);
      transition: var(--transition-03);

      &:hover {
        color: var(--primary-variant-color);
      }
    }
    .swiper-button-prev {
      right: 150px;
      top: 13px;
      left: unset;
      &::after {
        font-size: 16px;
      }
    }
    .swiper-button-next {
      top: 13px;
      right: 0;
      &::after {
        font-size: 16px;
      }
    }
`;

export default GlobalStyle;