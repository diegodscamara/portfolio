import { AboutIllustration } from 'public/about';
import { ArrowRightIcon } from 'public/arrow-right';
import { DownloadIcon } from 'public/download';
import Link from 'next/link';
import { useState } from 'react';

const aboutStyles = {
  container: 'container mx-auto px-8 py-36',
  content: 'flex flex-col lg:flex-row gap-32',
  titleContainer: 'flex flex-row items-center gap-4',
  title: 'text-4xl font-normal font-sans text-button tracking-widest transform uppercase',
  description: 'text-lg mb-4 w-full',
  buttonsContainer: 'flex flex-row gap-4',
  filledButton: 'h-11 bg-primary hover:opacity-80 flex items-center gap-4 py-4 px-2 sm:px-12 rounded-sm',
  outlinedButton: 'h-11 border-primary border-solid border flex items-center gap-4 py-4 px-2 sm:px-12 rounded-sm hover:bg-primary hover:opacity-80 text-white hover:text-black transition-all',
};

const About = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyEmailToClipboard = async () => {
    await navigator.clipboard.writeText('diegodscamara@gmail.com');
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <section className={aboutStyles.container} id='About'>
      <div className={aboutStyles.content}>
        <div className='w-full'><AboutIllustration /></div>
        <div className='flex flex-col gap-4'>
          <div className={aboutStyles.titleContainer}>
            <ArrowRightIcon />
            <h3 className={aboutStyles.title}>About Me</h3>
          </div>
          <span className={aboutStyles.description}>
            Hey there! I’m a Front End Developer with a passion for creating user-friendly interfaces using technologies such as ReactJS, NextJS, KnockoutJS, JS, TypeScript, HTML, CSS, and my design skills extend beyond coding, as I’m proficient in Figma to bring my visions to life. I integrate frontend systems with content management systems and have experience with both GraphQL and REST APIs. With expertise in Scrum, Kanban, Agile, and code versioning tools, I&apos;m always exploring new technologies to stay ahead of the curve.
          </span>
          <div className={aboutStyles.buttonsContainer}>
            <Link className={aboutStyles.filledButton} href={'/Resume - Diego Câmara.pdf'} target='_blank' rel='noopener noreferrer' title={'Open resume in new tab'} aria-label={'Open resume in new tab'}>
              <span className='font-bold text-black text-button'>
                Download resume
              </span>
              <DownloadIcon />
            </Link>
            <button
              className={aboutStyles.outlinedButton}
              onClick={copyEmailToClipboard}
              aria-label='Copy email address'
            >
              <span className='font-bold text-button'>
                Copy e-mail
              </span>
            </button>
            {showTooltip && (
              <span className='bg-gray-800 text-white p-2 rounded-md'>
                E-mail copied to clipboard!
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;