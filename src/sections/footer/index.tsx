import { Content, Icons, Name, Section } from './styles'

import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'

type Icon = {
  src: string
  alt: string
  link: string
}

const icons: Icon[] = [
  {
    src: '/icons/linkedin.svg',
    alt: 'Linkedin',
    link: 'https://www.linkedin.com/in/diegodscamara/',
  },
  {
    src: '/icons/github.svg',
    alt: 'GitHub',
    link: 'https://github.com/diegodscamara',
  },
  {
    src: '/icons/email.svg',
    alt: 'Email',
    link: 'mailto:diegodscamara@gmail.com',
  },
]

const Footer = (): ReactElement => {
  return (
    <Section id="footer">
      <Content>
        Made by <Name>Diego Câmara</Name> - Copyright &copy;{' '}
        {new Date().getFullYear()}
      </Content>
      <Icons>
        {icons.map((icon) => (
          <Link
            href={icon.link}
            key={icon.alt}
            title={icon.alt}
            aria-label={icon.alt}
            target="_blank"
          >
            <Image
              unoptimized
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </Icons>
    </Section>
  )
}

export default Footer
