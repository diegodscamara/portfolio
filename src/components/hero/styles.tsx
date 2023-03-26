import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.75rem;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 3.75rem;
    line-height: 4.25rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const Description = styled.span`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const ScrollLink = styled.a`
  display: block;
  margin-top: 3rem;
  animation: bounce 1s infinite;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #ffffff;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;