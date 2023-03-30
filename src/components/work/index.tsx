import { Container, Site, Thumbnail, Title, Wrapper } from './styles';
import React, { useState } from 'react';

import ArmazemParaiba from 'public/images/Armazem Paraiba.png';
import { CardProps } from './types';
import GenetecDeveloper from 'public/images/Genetec Developer.png';
import MedClub from 'public/images/Med Club.png';
import Rider from 'public/images/Rider.png';
import Sinsa from 'public/images/Sinsa.png';
import Tambasa from 'public/images/Tambasa.png';

const Card = ({ image, alt, link }: CardProps) => {
  return (
    <div className="thumbnail-wrapper">
      <Thumbnail src={image} alt={alt} width={500} height={250} />
      <Site
        attributes={{
          link: link,
          target: '_blank',
          rel: 'noopener noreferrer',
          title: alt,
        }}
        variant="filled"
      >
        Visit site
      </Site>
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

const Work = () => {
  const [showMore, setShowMore] = useState < boolean > (false);
  const visibleCards = showMore ? cards : cards.slice(0, 3);

  return (
    <Wrapper id="Work">
      <Title>Work</Title>
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
      {cards.length > 3 && (
        <Site
          attributes={{
            link: '#Work',
            title: showMore ? 'Show less' : 'Show more',
            onClick: () => Promise.resolve(setShowMore(!showMore)),
            type: 'button'
          }}
          variant="outlined"
        >
          {showMore ? 'Show less' : 'Show more'}
        </Site>
      )}
    </Wrapper>
  );
};

export default Work;
