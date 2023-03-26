import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 10px;
  height: 56px;
  width: 100%;
  background: var(--dark-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
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
  gap: 24px;

  @media only screen and  (max-width: 1200px) {
    display: none;
  }
`;

export const LinkStyles = styled(Link)`
  display: flex;
  align-items: center;
  text-align: right;

  &:hover {
    color: #38b2ac;
  }
`;

export const MenuButton = styled.button`
  padding: 0.5rem;
  background-color: transparent;
  display: none;

  @media only screen and  (max-width: 1200px) {
    display: flex;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const MobileMenuNav = styled.nav<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px;
  background: var(--dark-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 56px;
  right: 0;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  border-radius: var(--border-radius-sm);

  @media only screen and  (min-width: 1200px) {
    display: none;
  }
`;
