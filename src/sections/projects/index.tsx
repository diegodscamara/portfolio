import { Container, Title, Wrapper } from './styles';

import Card from '@/components/card';
import Carousel from '@/components/carousel';
import React from 'react';
import data from './data';

/**
 * Creates a React component that renders a list of projects as a carousel.
 *
 * @return {JSX.Element} A React component that renders a list of projects.
 */
const Projects = (): JSX.Element => {
  return (
    <Wrapper id="Projects">
      <Title>Projects</Title>
      <Container>
        <Carousel data={data().map((project) => <Card key={project.name} project={project} />)} />
      </Container>
    </Wrapper>
  );
};

export default Projects;
