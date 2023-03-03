import Link from 'next/link';
import { Logo } from 'public/logo';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
  };

  const NavLink = ({ href, children, onClick }: NavLinkProps) => {
    const router = useRouter();
    const sectionId = href.slice(1);
    const isActive = router.asPath.includes(sectionId);
    const className = `text-card font-bold font-sans mx-4 hover:text-primary ${isActive ? 'text-primary' : ''}`;

    return (
      <Link href={href} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full bg-black shadow-light-gray z-10">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/"><Logo /></Link>
        <div className="hidden md:block">
          <NavLink href="#Home">Home</NavLink>
          <NavLink href="#Work">Work</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Services">Services</NavLink>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
          className={`md:hidden top-0 left-0 w-full h-full flex justify-center items-center bg-dark-gray fixed transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div className="flex flex-col items-center gap-4">
            <NavLink href="#Home" onClick={toggleMenu}>Home</NavLink>
            <NavLink href="#Work" onClick={toggleMenu}>Work</NavLink>
            <NavLink href="#Projects" onClick={toggleMenu}>Projects</NavLink>
            <NavLink href="#Skills" onClick={toggleMenu}>Skills</NavLink>
            <NavLink href="#Services" onClick={toggleMenu}>Services</NavLink>
            <NavLink href="#About" onClick={toggleMenu}>About</NavLink>
            <NavLink href="#Contact" onClick={toggleMenu}>Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
