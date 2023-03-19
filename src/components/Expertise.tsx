import React from 'react';

const expertiseStyles = {
  container: 'container mx-auto px-8 py-36',
  title: 'font-poppins font-bold text-center text-section text-white',
  cardsContainer: 'flex gap-4',
  card: 'flex flex-col items-start p-4 gap-4 w-full border-2 border-gray-400 rounded-md',
  cardTitle: '',
  cardDescription: ''
};

const cards = [
  {
    title: 'Software Development',
    description: 'Custom software development services, utilizing a variety of technologies and tools to create reliable and efficient software solutions. Experienced in front-end development, and integrating systems and APIs.',
  },
  {
    title: 'Web design',
    description: 'User-friendly interfaces and engaging websites. Design tools such as Figma, and Styled Components, TailwindCSS, Chakra UI, Sass, Less, Bootstrap, Wordpress, and Elementor.',
  },
  {
    title: 'Website Optimization',
    description: 'Optimize your website to improve its performance, speed, and user experience. This includes implementing best practices in web development, such as responsive design and optimized images.',
  },
];

const Card = ({ title, description }) => {
  return (
    <div className={expertiseStyles.card}>
      <h4 className={''}>{title}</h4>
      <span>{description}</span>
    </div>
  );
};

const Expertise = () => {
  return (
    <section className={expertiseStyles.container} id="Expertise">
      <h2 className={expertiseStyles.title}>Expertise</h2>
      <div className={expertiseStyles.cardsContainer}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;