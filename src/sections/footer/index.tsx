import { Content, Icons, Name, Section } from './styles';

import Email from 'public/icons/email.svg'
import GitHub from 'public/icons/github.svg'
import Image from 'next/image';
import Link from 'next/link';
import Linkedin from 'public/icons/linkedin.svg'
import React from 'react';

const icons = [
  { src: Linkedin, alt: 'Linkedin', link: 'https://www.linkedin.com/in/diegodscamara/' },
  { src: GitHub, alt: 'GitHub', link: 'https://github.com/diegodscamara' },
  { src: Email, alt: 'Email', link: 'mailto:diegodscamara@gmail.com' }
];

const Footer = () => {
  return (
    <Section id='footer'>
      <Content>
        Made with ♡ by <Name>Diego Câmara</Name> - Copyright &copy; {new Date().getFullYear()}
      </Content>
      <Icons>
        {icons.map(icon =>
          <Link href={icon.link} key={icon.alt} title={icon.alt} aria-label={icon.alt} target='_blank'>
            <Image src={icon.src} alt={icon.alt} width={24} height={24} />
          </Link>
        )}
      </Icons>
    </Section >
  );
};

export default Footer;
