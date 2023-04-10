import { Container, Section, Title } from './styles';

import Azure from 'public/images/stack/azure.png';
import Bootstrap from 'public/images/stack/bootstrap.png';
import Button from '../button';
import CSS3 from 'public/images/stack/css3.png';
import CSharp from 'public/images/stack/csharp.png';
import Figma from 'public/images/stack/figma.png';
import Git from 'public/images/stack/git.png';
import GitHub from 'public/images/stack/github.png';
import GitLab from 'public/images/stack/gitlab.png';
import GraphQL from 'public/images/stack/graphql.png';
import HTML5 from 'public/images/stack/html5.png';
import Image from 'next/image';
import JavaScript from 'public/images/stack/javascript.png';
import Jest from 'public/images/stack/jest.png';
import Knockout from 'public/images/stack/knockout.png';
import Less from 'public/images/stack/lessjs.png';
import MaterialUI from 'public/images/stack/materialui.png';
import NextJS from 'public/images/stack/nextjs.png';
import NodeJS from 'public/images/stack/nodejs.png';
import React from 'react';
import ReactJS from 'public/images/stack/reactjs.png';
import Sass from 'public/images/stack/sass.png';
import TailwindCSS from 'public/images/stack/tailwindcss.png';
import TypeScript from 'public/images/stack/typescript.png';

const stack = [
  {
    name: 'HTML5',
    icon: HTML5
  },
  {
    name: 'JavaScript',
    icon: JavaScript
  },
  {
    name: 'TypeScript',
    icon: TypeScript
  },
  {
    name: 'ReactJS',
    icon: ReactJS
  },
  {
    name: 'NextJS',
    icon: NextJS
  },
  {
    name: 'Knockout',
    icon: Knockout
  },
  {
    name: 'NodeJS',
    icon: NodeJS
  },
  {
    name: 'C# (CSharp)',
    icon: CSharp
  },
  {
    name: 'Figma',
    icon: Figma
  },
  {
    name: 'CSS3',
    icon: CSS3
  },
  {
    name: 'Less.js',
    icon: Less
  },
  {
    name: 'Sass',
    icon: Sass
  },
  {
    name: 'Bootstrap',
    icon: Bootstrap
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindCSS
  },
  {
    name: 'Material UI',
    icon: MaterialUI
  },
  {
    name: 'GraphQL',
    icon: GraphQL
  },
  {
    name: 'Jest',
    icon: Jest
  },
  {
    name: 'GitHub',
    icon: GitHub
  },
  {
    name: 'GitLab',
    icon: GitLab
  },
  {
    name: 'Git',
    icon: Git
  },
  {
    name: 'Azure DevOps',
    icon: Azure
  },
  // Add more technologies here as needed
];

const Skills = () => {
  return (
    <Section id='Skills'>
      <Title>Skills</Title>
      <Container>
        {stack.map((item, index) => (
          <Button
            attributes={{ type: 'button' }}
            variant="skill"
            key={index}
          >
            <Image src={item.icon} width={24} height={24} alt={item.name} />
            {item.name}
          </Button>
        ))}
      </Container>
    </Section>
  );
};

export default Skills;
