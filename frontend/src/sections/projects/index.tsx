import { Container, Title, Wrapper } from './styles';

import Card from '@/components/card';
import Genetec from 'public/images/Genetec Developer.png'
import MedClub from 'public/images/Med Club.png'
import React from 'react';
import Tambasa from 'public/images/Tambasa.png'

type Project = {
  thumbnail: string;
  name: string;
  description: string;
  link: string;
}

type ProjectsProps = {
  projects: Project[];
}

const LATEST_PROJECTS: Project[] = [
  {
    thumbnail: Genetec,
    name: "Genetec Developer",
    description: "I collaborated with other developers to ensure the site was optimized for performance and scalability. Using Figma, JavaScript, HTML, and CSS, we developed the UI and implemented features that improved the user experience. Our team's contributions ensured a successful launch with no major issues, contributing to the company's online presence and customer experience.",
    link: "https://genetecmarkdown.fluidtopics.net/"
  },
  {
    thumbnail: MedClub,
    name: "MedClub",
    description: " I helped develop an e-learning platform built using NextJS, ReactJS, JavaScript, TypeScript, HTML, CSS, and GraphQL with Apollo and Heroku. We collaborated with the client, implemented features for a great customer experience, and optimized performance and scalability. Our team's contributions resulted in a successful launch with no major issues, boosting the company's online presence and customer satisfaction.",
    link: "https://www.prime.med.club/auth/signin"
  },
  {
    thumbnail: Tambasa,
    name: "Tambasa",
    description: "I collaborated with other developers to create an integrated e-commerce store for Tambasa, specializing in construction materials, tools, and home appliances. Using React and other technologies, we optimized the platform for scalability, responsive design, and easy checkout. Our team successfully contributed to increased online sales and customer engagement, resulting in a successful project completed in time for Tambasa's IPO.",
    link: "https://loja.tambasa.com.br/home"
  }
];

const Projects: React.FC = (): JSX.Element => {
  const renderProjects = ({ projects }: ProjectsProps): JSX.Element => {
    return (
      <Wrapper id="Projects">
        <Title>Projects</Title>
        <Container>
          <Card projects={projects} />
        </Container>
      </Wrapper>
    );
  }

  return renderProjects({ projects: LATEST_PROJECTS });
};

export default Projects;
