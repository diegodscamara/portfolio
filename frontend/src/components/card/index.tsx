/* eslint-disable react/display-name */
import { Container, Content, Description, Header, Title } from './styles';
import Image, { StaticImageData } from 'next/image';

import ArrowRight from 'public/icons/arrow-right.svg';
import Button from '../button';
import Link from 'next/link';
import { memo } from 'react';

interface Project {
  id: number;
  thumbnail: string;
  name: string;
  description: string;
  link: string;
}

/**
 * Renders a card component for displaying projects.
 * 
 * @param projects An array of Project objects.
 * @returns A React functional component that displays a card for each project.
 */
const Card: React.FC<{ projects: Project[] }> = memo(({ projects }) => {
  return (
    <>
      {projects.map(({ id, thumbnail, name, description, link }) => (
        <Container key={id}>
          <Image src={thumbnail} alt={name} width={600} height={350} />
          <Content>
            <Header>
              <Title>{name}</Title>
              <Description>{description}</Description>
            </Header>
            <Button variant="inline">
              <Link href={link} aria-label="Visit site" title="Visit site" target="_blank">
                Visit site
                <Image src={ArrowRight} alt="arrow-right" width={16} height={16} />
              </Link>
            </Button>
          </Content>
        </Container>
      ))}
    </>
  );
});

export default Card;
