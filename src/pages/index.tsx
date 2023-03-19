import About from '@/components/About/About';
import Contact from '@/components/Contact';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Header/Footer';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
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
