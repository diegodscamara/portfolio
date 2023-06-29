import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { GoogleFonts } from "next-google-fonts";

/**
 * Renders the main application component.
 *
 * @param {Object} Component - The component to render.
 * @param {Object} pageProps - The props to pass to the component.
 * @return {JSX.Element} The rendered application component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Syne:wght@400;700&display=swap" />
      <Component {...pageProps} />
    </>
  );
};