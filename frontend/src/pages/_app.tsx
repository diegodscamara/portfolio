import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { GoogleFonts } from "next-google-fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Syne:wght@400;700&display=swap" />
      <Component {...pageProps} />
    </>
  );
};