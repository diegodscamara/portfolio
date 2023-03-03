import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
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
        <Work />
        <Projects />
        <Skills />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default Home;
