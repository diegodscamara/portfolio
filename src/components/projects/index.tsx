import { Container, Thumbnail, Title, Wrapper } from './styles';
import React, { useState } from 'react';

import ArmazemParaiba from 'public/images/Armazem Paraiba.png';
import { CardProps } from './types';
import GenetecDeveloper from 'public/images/Genetec Developer.png';
import MedClub from 'public/images/Med Club.png';
import Rider from 'public/images/Rider.png';
import Sinsa from 'public/images/Sinsa.png';
import Tambasa from 'public/images/Tambasa.png';

const Card = ({ image, alt }: CardProps) => {
  return (
    <div className="thumbnail-wrapper">
      <Thumbnail src={image} alt={alt} width={500} height={250} />
    </div>
  );
};

const cards = [
  {
    image: GenetecDeveloper,
    alt: 'Genetec Developer',
    link: 'https://genetecmarkdown.fluidtopics.net/',
  },
  {
    image: MedClub,
    alt: 'Med Club',
    link: 'https://www.prime.med.club/',
  },
  {
    image: Tambasa,
    alt: 'Tambasa',
    link: 'https://loja.tambasa.com.br/',
  },
  {
    image: ArmazemParaiba,
    alt: 'Armazem Paraíba',
    link: 'https://www.armazemparaiba.com.br/',
  },
  {
    image: Sinsa,
    alt: 'Sinsa',
    link: 'https://www.sinsa.com.ni/',
  },
  {
    image: Rider,
    alt: 'Rider',
    link: 'https://www.rider.com.br/',
  },
  // Add more cards here as needed
];

const Projects = () => {
  const [showMore, setShowMore] = useState < boolean > (false);
  const visibleCards = showMore ? cards : cards.slice(0, 3);

  return (
    <Wrapper id="Projects">
      <Title>Projects</Title>
      <Container>
        {visibleCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            alt={card.alt}
            link={card.link}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Projects;
