import {Container, Description, ScrollLink, Subtitle, Title} from './styles';

import Button from '../button';
import Link from 'next/link';
import React from 'react';
import { ScrollDownIcon } from 'public/scroll-down-icon';

const Hero = () => {
  return (
    <Container id='Home'>
      <Title>Diego Câmara</Title>
      <Subtitle>Front End Developer</Subtitle>
      <Description>
        Crafting exceptional user experiences as a front end developer with a passion for UI/UX design
      </Description>
      <Button
        attributes={{
          link: '#Contact',
          title: 'Get in touch',
        }}
        variant={'filled'}
      >
        Get in touch
      </Button>
      <Link href={'#About'} title={'Scroll down'} aria-label={'Scroll down'}>
        <ScrollLink>
          <ScrollDownIcon />
        </ScrollLink>
      </Link>
    </Container>
  );
};

export default Hero;