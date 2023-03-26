import {CardContainer, CardDescription, CardTitle, ExpertiseCardWrapper, ExpertiseContainer, ExpertiseTitle} from './styles';

import { CardProps } from './types';
import React from 'react';

const Card = ({ title, description }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

const cards = [
  {
    title: 'Software Development',
    description:
      'Custom software development services, utilizing a variety of technologies and tools to create reliable and efficient software solutions. Experienced in front-end development, and integrating systems and APIs.',
  },
  {
    title: 'Web design',
    description:
      'User-friendly interfaces and engaging websites. Design tools such as Figma, and Styled Components, TailwindCSS, Chakra UI, Sass, Less, Bootstrap, Wordpress, and Elementor.',
  },
  {
    title: 'Website Optimization',
    description:
      'Optimize your website to improve its performance, speed, and user experience. This includes implementing best practices in web development, such as responsive design and optimized images.',
  },
];

const Expertise: React.FC = () => {
  return (
    <ExpertiseContainer id="Expertise">
      <ExpertiseTitle>Expertise</ExpertiseTitle>
      <ExpertiseCardWrapper>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </ExpertiseCardWrapper>
    </ExpertiseContainer>
  );
};

export default Expertise;