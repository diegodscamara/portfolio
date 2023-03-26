import { AboutIllustration } from 'public/about';
import { ArrowRightIcon } from 'public/arrow-right';
import Button from '../button';
import { DownloadIcon } from 'public/download';
import { useState } from 'react';

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
    <section className={'container mx-auto px-8 py-36'} id='About'>
      <div className={'flex flex-col lg:flex-row gap-32'}>
        <div className='w-full'><AboutIllustration /></div>
        <div className='flex flex-col gap-4'>
          <div className={'flex flex-row items-center gap-4'}>
            <ArrowRightIcon />
            <h3 className={'text-4xl font-normal font-sans text-button tracking-widest transform uppercase'}>About Me</h3>
          </div>
          <span className={'aboutStyles.description'}>
            Hey there! I’m a Front End Developer with a passion for creating user-friendly interfaces using technologies such as ReactJS, NextJS, KnockoutJS, JS, TypeScript, HTML, CSS, and my design skills extend beyond coding, as I’m proficient in Figma to bring my visions to life. I integrate frontend systems with content management systems and have experience with both GraphQL and REST APIs. With expertise in Scrum, Kanban, Agile, and code versioning tools, I&apos;m always exploring new technologies to stay ahead of the curve.
          </span>
          <div className={'flex flex-row gap-4'}>
            <Button
              attributes={{
                link: 'Resume - Diego Câmara.pdf',
                target: '_blank',
                rel: 'noopener noreferrer',
                title: 'Open resume in new tab'
              }}
              variant='filled'
            >
              Download resume
              <DownloadIcon />
            </Button>

            <Button
              attributes={{
                link: '#About',
                title: 'Copy e-mail to clipboard',
                onClick: copyEmailToClipboard
              }}
              variant='outlined'
            >
                Copy e-mail to clipboard
            </Button>
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