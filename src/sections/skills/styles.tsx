import styled from "styled-components";

export const Section = styled.section``;

export const Title = styled.h3``;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s-300);
  
  & > * {
    width: 12.5%;
    padding: var(--spacing-s-200) var(--spacing-s-300);
  }

  @media only screen and (max-width: 1440px) {
    & > * {
      flex-basis: 15.5%;
    }
  }

  @media only screen and (max-width: 1280px) {
    & > * {
      flex-basis: 18.5%;
    }
  }

  @media only screen and (max-width: 1024px) {
    & > * {
      flex-basis: 23.5%;
    }
  }

  @media only screen and (max-width: 1024px) {
    & > * {
      flex-basis: 31.5%;
    }
  }

  @media only screen and (max-width: 649px) {
    & > * {
      flex-basis: 47%;
    }
  }

  @media only screen and (max-width: 410px) {
    & > * {
      flex-basis: 100%;
    }
  }
`;
