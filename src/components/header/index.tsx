import { HeaderContainer, LinkStyles, MenuButton, MobileMenuNav, NavContainer, NavLinks } from './styles';

import Button from '../button';
import { DownloadIcon } from 'public/icons/download';
import Link from 'next/link';
import { Logo } from 'public/images/logo';
import { NavLinkProps } from './types';
import { useState } from 'react';

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <LinkStyles
      href={href}
      onClick={onClick}
      title={`${children} section`}
      aria-label={`${children} section`}
      className={`${children} section`}>
      {children}
    </LinkStyles>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Experience", label: "Experience" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" }
  ];

  return (
    <HeaderContainer>
      <NavContainer>
        <Link href="/" title='Go to homepage' arial-label="Go to homepage"><Logo /></Link>
        <NavLinks>
          {navLinks.map(({ href, label }) => (
            <NavLink key={label} href={href}>{label}</NavLink>
          ))}
          <Button variant='filled'>
            <Link href={'documents/resume.pdf'} target='_blank' rel='noopener noreferrer' title='Open resume in new tab'>
              Download resume
              <DownloadIcon />
            </Link>
          </Button>
        </NavLinks>
        <MenuButton
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 z-10 relative hover:text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </MenuButton>
        <MobileMenuNav isOpen={isOpen}>
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href} onClick={toggleMenu}>{label}</NavLink>
          ))}
          <Button variant='filled'>
            <Link href={'documents/resume.pdf'} target='_blank' rel='noopener noreferrer' title='Open resume in new tab'>
              Download resume
              <DownloadIcon />
            </Link>
          </Button>
        </MobileMenuNav>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
