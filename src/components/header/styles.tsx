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
  background: #0D0D0D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const NavLinks = styled.div`
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
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 19.2px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #FAFAFA;

  &:hover {
    color: #38b2ac;
  }
`;

export const MenuButton = styled.button`
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
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
  background: #0d0d0d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 56px;
  right: 0;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  border-radius: 4px;

  @media only screen and  (min-width: 1200px) {
    display: none;
  }
`;
