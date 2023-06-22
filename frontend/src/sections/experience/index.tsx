import { Accordion, Company, Container, Content, Details, Header, Intro, Position, Responsibilities, Responsibility, Section, Title, Wrapper } from './styles';
import React, { useState } from 'react';

import ArrowUp from 'public/icons/arrow-up.svg'
import Experiences from './data';
import Image from 'next/image';

// define the types for the Experiences data object
type ExperienceData = {
  logo: any;
  company: string;
  details: string;
  position: string;
  intro: string;
  responsibilities: string[];
};

const Experience = (): JSX.Element => {
  const [open, setOpen] = useState<boolean[]>([true, ...new Array(Experiences().length - 1).fill(false)]);

  const toggleAccordion = (index: number): void => {
    const newOpenState = [...open];
    newOpenState[index] = !newOpenState[index];
    setOpen(newOpenState);
  }

  return (
    <Section id='Experience'>
      <Title>Experience</Title>
      <Wrapper>
        {Experiences().map((experience: ExperienceData, index: number) => (
          <Accordion key={experience.company} open={open[index]}>
            <Header onClick={() => toggleAccordion(index)} open={open[index]}>
              <Container>
                <Image src={experience.logo} alt={experience.company} width={24} height={24}></Image>
                <Company>{experience.company}</Company>
                <Details>{experience.details}</Details>
              </Container>
              <Image src={ArrowUp} alt="Toggle icon" width={12} height={12}></Image>
            </Header>
            <Content open={open[index]}>
              <Position>{experience.position}</Position>
              <Intro>{experience.intro}</Intro>
              <Responsibilities>
                {experience.responsibilities.map((responsibility: string) => (
                  <Responsibility key={responsibility}>{responsibility}</Responsibility>
                ))}
              </Responsibilities>
            </Content>
          </Accordion>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Experience;