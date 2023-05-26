import { Content, Description, Header, Title, Wrapper } from './styles';

import AboutImage from 'public/images/about.svg'
import { ArrowRightIcon } from 'public/icons/arrow-right';
import Button from '../button';
import { DownloadIcon } from 'public/icons/download';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <Wrapper id='About'>
      <Image src={AboutImage} alt={'Front End Developer'} width={600} height={600}></Image>
      <Content>
        <Header>
          <ArrowRightIcon />
          <Title>About Me</Title>
        </Header>
        <Description>
          As a Front End Developer, I have a passion for creating user-friendly interfaces using technologies such as ReactJS, NextJS, JavaScript, TypeScript, HTML, CSS, and my design skills extend beyond coding, as I&apos;m proficient in Figma to bring my visions to life. I integrate frontend systems with content management systems and have experience with both GraphQL and REST APIs. With expertise in Scrum, Kanban, Agile, and code versioning tools.
          <br />
          <br />
          Additionally, I am proactive, skilled in conflict resolution, possess strong analytical and problem-solving skills, and have excellent communication skills that ensure project success. I work collaboratively as part of a team and mentor junior developers, while also dedicating myself to continuous improvement and making web applications more efficient as I&apos;m always exploring new technologies to stay ahead of the curve.
        </Description>
        <Button variant='outlined'>
          <Link href={'documents/resume.pdf'} target='_blank' rel='noopener noreferrer' title='Open resume in new tab'>
            Download resume
            <DownloadIcon />
          </Link>
        </Button>
      </Content>
    </Wrapper>
  );
};

export default About;