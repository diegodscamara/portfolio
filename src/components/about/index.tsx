import { AboutButtons, AboutContainer, AboutDescription, AboutFlexContainer, AboutSectionTitle, IllustrationContainer, Content, ToolTip, Header } from './styles';

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
    <AboutContainer id='About'>
      <AboutFlexContainer>
        <IllustrationContainer><AboutIllustration /></IllustrationContainer>
        <Content>
          <Header>
            <ArrowRightIcon />
            <AboutSectionTitle>About Me</AboutSectionTitle>
          </Header>
          <AboutDescription>
            As a Front End Developer, I have a passion for creating user-friendly interfaces using technologies such as ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS, and my design skills extend beyond coding, as I&apos;m proficient in Figma to bring my visions to life. I integrate frontend systems with content management systems and have experience with both GraphQL and REST APIs. With expertise in Scrum, Kanban, Agile, and code versioning tools.
            <br />
            <br />
            Additionally, I am proactive, skilled in conflict resolution, possess strong analytical and problem-solving skills, and have excellent communication skills that ensure project success. I work collaboratively as part of a team and mentor junior developers, while also dedicating myself to continuous improvement and making web applications more efficient as I&apos;m always exploring new technologies to stay ahead of the curve.
          </AboutDescription>
          <AboutButtons>
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
              <ToolTip>
                E-mail copied to clipboard!
              </ToolTip>
            )}
          </AboutButtons>
        </Content>
      </AboutFlexContainer>
    </AboutContainer>
  );
};

export default About;