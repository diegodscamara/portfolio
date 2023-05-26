import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  text-align: left;
  padding: calc(var(--space-xl) + var(--space-lg)) var(--space-md) var(--space-xl) var(--space-md);

  @media only screen and (max-width: 1024px) {
  padding: var(--space-xl) var(--space-sm) var(--space-lg) var(--space-sm);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-md);
  width: 100%;

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
  width: 70%;

  &:last-child {
    align-items: flex-end;
    width: 30%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  width: 100%;
`;

export const Subtitle = styled.h4`
  color: var(--gray-100);
  font-weight: var(--font-weight-regular);
  width: 100%;
`;

export const ScrollLink = styled.div`
  display: block;
  margin-top: var(--space-md);
  animation: bounce 1s infinite;

  svg {
    width: var(--space-md);
    height: var(--space-md);

    &:hover {
      transform: scale(1.1);
    }
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