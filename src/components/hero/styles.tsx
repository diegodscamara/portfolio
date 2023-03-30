import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

export const Subtitle = styled.h2`
  margin-bottom: 1rem;
`;

export const Description = styled.span`
  margin-bottom: 1rem;
`;

export const ScrollLink = styled.div`
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