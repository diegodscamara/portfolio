import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 64px;
  }
`;

export const IllustrationContainer = styled.div`
  svg {
    display: flex;
    width: 660px;
  }  
  
  @media only screen and (max-width: 1024px) {
    svg {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (max-width: 1024px) {
    gap: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const AboutSectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: var(--font-size-md);
  text-transform: uppercase;
  color: var(--button-color);
`;

export const AboutDescription = styled.span`
  color: var(--text-color);
`;

export const AboutButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    a, button {
      width: 100%;
    }
  }
`;

export const ToolTip = styled.span`
  color: var(--light-gray);
`;