import Link from 'next/link';
import React from 'react';
import { ScrollDownIcon } from 'public/scroll-down-icon';

const Hero = () => {
  const sectionStyles = 'container mx-auto px-8 h-screen justify-center text-center flex flex-col items-center'
  const linkStyles = 'bg-primary text-black font-bold font-sans h-10 flex items-center justify-center rounded-sm w-44 hover:opacity-80 mb-20';
  const textStyles = 'text-4xl md:text-5xl lg:text-6xl text-primary font-sans font-normal mb-4';
  const titleStyles = 'text-3xl md:text-4xl lg:text-tagline text-white font-sans font-bold mb-4';
  const descStyles = 'text-card mb-4';

  return (
    <section className={sectionStyles} id='Home'>
      <h1 className={textStyles}>Diego Câmara</h1>
      <h2 className={titleStyles}>Front End Developer</h2>
      <span className={descStyles}>
        Crafting exceptional user experiences as a front end developer with a passion for UI/UX design
      </span>
      <Link href={'#Contact'} title={'Get in touch'} aria-label={'Get in touch'} className={linkStyles}>Get in touch</Link>
      <Link href={'#About'} title={'Scroll down'} aria-label={'Scroll down'} className="animate-bounce">
        <ScrollDownIcon />
      </Link>
    </section>
  );
};

export default Hero;