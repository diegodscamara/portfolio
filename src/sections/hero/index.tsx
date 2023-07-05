import {
  Column,
  Container,
  ScrollLink,
  Subtitle,
  Title,
  Wrapper,
} from './styles'

import Avatar from 'public/images/avatar.svg'
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ScrollDownIcon } from 'public/icons/scroll-down-icon'

const Hero = () => {
  return (
    <Wrapper id="Home">
      <Container>
        <Column>
          <Title>
            Hi, I&apos;m Diego Câmara
            <br />
            A Front End Developer
            <br />
            Based in Montreal
          </Title>
          <Subtitle>
            I help businesses and companies reach
            <br />
            their goals by designing and developing
            <br />
            user-centric web applications
          </Subtitle>
          <Button variant="filled">
            <Link href={'#Contact'} title="Get in touch">
              Get in touch
            </Link>
          </Button>
        </Column>

        <Column>
          <Image
            src={Avatar}
            alt={'Diego Câmara'}
            width={420}
            height={420}
          ></Image>
        </Column>
      </Container>

      <Link href={'#About'} title={'Scroll down'} aria-label={'Scroll down'}>
        <ScrollLink>
          <ScrollDownIcon />
        </ScrollLink>
      </Link>
    </Wrapper>
  )
}

export default Hero
