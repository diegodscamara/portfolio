import styled, { css } from 'styled-components';

export const Section = styled.footer`
  display: flex;
  height: 4.375rem;
  padding: 1.1875rem var(--spacing-m-500);
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  align-self: stretch;
  border-top: 1px solid var(--gray-500);
`;

export const textStyles = css`
  font-size: 1.3rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: var(--font-weight-regular);
  line-height: 1.5rem;
`;


export const Content = styled.span`
  color: var(--gray-500);
  ${textStyles}
`;

export const Name = styled.span`
  color: var(--gray-200);
  ${textStyles}
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: var(--spacing-s-300);
    height: var(--spacing-s-300);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    box-shadow: var(--shadow-10);
    transition: var(--transition-03);

    &:hover {
      box-shadow: var(--shadow-20);
      transform: translateY(-5px);
    }
  }
`;