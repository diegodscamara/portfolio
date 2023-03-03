import Link from 'next/link';
import React from 'react';
import { ScrollDownIcon } from 'public/scroll-down-icon'

const Hero = () => {
  return (
    <section className="container mx-auto px-8 pb-36 pt-56 text-center flex flex-col items-center" id='Home'>
      <span className="text-4xl md:text-5xl lg:text-6xl text-primary font-sans font-normal mb-4">Diego Câmara</span>
      <h1 className="text-3xl md:text-4xl lg:text-tagline text-white font-sans font-bold mb-4">Front End Developer</h1>
      <span className="text-card mb-4">
        Crafting exceptional user experiences as a front end developer with a passion for UI/UX design
      </span>
      <Link className='bg-primary text-black font-bold font-sans h-10 flex items-center justify-center rounded-sm w-44 hover:opacity-80 mb-20' href={'#Contact'}>Get in touch</Link>
      <Link className='animate-bounce' href={'#Work'}><ScrollDownIcon /></Link>
    </section>
  );
};

export default Hero;