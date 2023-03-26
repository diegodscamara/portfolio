import About from '@/components/about/about';
import Contact from '@/components/Contact';
import Expertise from '@/components/expertise';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Projects from '@/components/Projects';
import React from 'react';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
const Home = () => {
  return (
    <>
      <Head>
        <title>Diego Câmara - Front End Developer</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Projects />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default Home;
