import Button from '../button';
import Link from 'next/link';
import React from 'react';
import { ScrollDownIcon } from 'public/scroll-down-icon';

const Hero = () => {
  const sectionStyles = 'container mx-auto px-8 h-screen justify-center text-center flex flex-col items-center'
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

      <Button 
        attributes={{
          link: '#Contact',
          title: 'Get in touch'
        }}
        variant={'filled'}>
          Get in touch
      </Button>
      
      <Link href={'#About'} title={'Scroll down'} aria-label={'Scroll down'} className={'animate-bounce mt-20'}>
        <ScrollDownIcon />
      </Link>
    </section>
  );
};

export default Hero;