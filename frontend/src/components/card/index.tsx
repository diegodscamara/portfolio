import { Container, Content, Description, Header, Tag, Title } from './styles';
import Image, { StaticImageData } from 'next/image';

import ArrowRight from 'public/icons/arrow-right.svg';
import Button from '../button';
import Link from 'next/link';
import { memo } from 'react';

interface Project {
  thumbnail: StaticImageData;
  name: string;
  description: string;
  link: string;
  work: string;
}

/**
 * Renders a card component for displaying projects.
 * 
 * @param {project} An object of type Project.
 * @returns {JSX.Element} A React functional component that displays a card for the given project.
 */
const Card: React.FC<{ project: Project }> = memo(({ project }): JSX.Element => {
  return (
    <Container>
      <Image src={project.thumbnail} alt={project.name} width={600} height={350} />
      <Tag>{project.work}</Tag>
      <Content>
        <Header>
          <Title>{project.name}</Title>
          <Description>{project.description}</Description>
        </Header>
        <Button variant="inline">
          <Link href={project.link} aria-label="Visit site" title="Visit site" target="_blank">
            Visit site
            <Image src={ArrowRight} alt="arrow-right" width={16} height={16} />
          </Link>
        </Button>
      </Content>
    </Container>
  );
});

Card.displayName = 'Card';

export default Card;
