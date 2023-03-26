import Button from '../button';
import { DownloadIcon } from 'public/download';
import Link from 'next/link';
import { Logo } from 'public/logo';
import { useState } from 'react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <Link href={href} onClick={onClick} className={'text-card font-bold font-sans mx-4 hover:text-primary'} title={`${children} section`} aria-label={`${children} section`}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Expertise", label: "Expertise" },
    { href: "#Work", label: "Work" },
    { href: "#Experience", label: "Experience" },
    { href: "#Skills", label: "Skills" },
    { href: "#Contact", label: "Contact" }
  ];

  return (
    <header className="bg-gray-900 text-white fixed w-full bg-black shadow-light-gray z-10">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/"><Logo /></Link>
        <div className="hidden xl:flex gap-2 items-center justify-between">
          {navLinks.map(({ href, label }) => (
            <NavLink key={label} href={href}>{label}</NavLink>
          ))}
            <Button
            attributes={{
              link: 'Resume - Diego Câmara.pdf',
              target: '_blank',
              rel: 'noopener noreferrer',
              title: 'Open resume in new tab'
            }}
            variant='outlined'
          >
            Download resume
            <DownloadIcon />
          </Button>
        </div>
        <div className="xl:hidden">
          <button
            className="p-2 focus:outline-none"
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
          </button>
        </div>
        <div
          className={`xl:hidden top-0 left-0 w-full h-full flex justify-center items-center bg-dark-gray fixed transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div className="flex flex-col items-center gap-4">
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href} onClick={toggleMenu}>{label}</NavLink>
            ))}
            <Button
            attributes={{
              link: 'Resume - Diego Câmara.pdf',
              target: '_blank',
              rel: 'noopener noreferrer',
              title: 'Open resume in new tab'
            }}
            variant='outlined'
          >
            Download resume
            <DownloadIcon />
          </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
