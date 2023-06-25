import About from '@/sections/about';
import Contact from '@/sections/contact';
import Experience from '@/sections/experience';
import Footer from '@/sections/footer';
import Head from 'next/head';
import Header from '@/sections/header';
import Hero from '@/sections/hero';
import Projects from '@/sections/projects';
import React from 'react';
import Skills from '@/sections/skills';
const Home = () => {
  return (
    <>
      <Head>
        <title>Diego Câmara - Front End Developer</title>
        <meta name="description" content="As a Front End Developer, I have a passion for creating user-friendly interfaces using technologies such as ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS, and my design skills extend beyond coding, as I’m proficient in Figma to bring my visions to life. I integrate frontend systems with content management systems and have experience with both GraphQL and REST APIs. With expertise in Scrum, Kanban, Agile, and code versioning tools." />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default Home;
 