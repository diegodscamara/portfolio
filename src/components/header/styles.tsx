import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px var(--space-md);
  height: var(--space-lg);
  position: fixed;
  width: 100%;
  background-color: var(--gray-900);
  box-shadow: var(--shadow-20);
  z-index: 1;

  @media screen and (max-width: 1024px) {
    padding: 0px var(--space-sm);
  }
`;

export const NavContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: var(--space-xmd);

  @media only screen and  (max-width: 1200px) {
    display: none;
  }
`;

export const LinkStyles = styled(Link)`
  display: flex;
  align-items: center;
  text-align: right;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    border-radius: var(--border-radius-sm);
    background-color: var(--primary-color);
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  display: none;

  @media only screen and  (max-width: 1200px) {
    display: flex;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    
    &:hover {
      path {
        transition: all 0.3s ease-in-out;
        color: var(--primary-color);
      }
    }
  }
`;

export const MobileMenuNav = styled.nav < { isOpen: boolean } > `
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: var(--space-xmd);
  padding: var(--space-lg) var(--space-sm);
  position: fixed;
  top: var(--space-lg);
  right: 0;
  height: 100vh;
  border-radius: var(--border-radius-sm);
  backdrop-filter: var(--background-blur);
  box-shadow: var(--shadow-10);
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  &:hover {
    background: linear-gradient(
      55.27deg,
      rgba(240, 240, 240, 0.04) 0%,
      rgba(240, 240, 240, 0) 100%
    );
    box-shadow: var(--shadow-20);
  }

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;