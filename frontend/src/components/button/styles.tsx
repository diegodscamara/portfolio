import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'filled' | 'outlined' | 'inline' | 'skill';
};

const variants = {
  filled: css`
    background: var(--primary-color);
    color: var(--gray-900);
    box-shadow: var(--shadow-10);

    svg path {
        transition: all 0.3s ease-in-out;
        fill: var(--gray-900);
      }

    &:hover {
      background-color: var(--primary-variant-color);
      box-shadow: var(--shadow-20);
    }
  `,
  outlined: css`
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    background-color: transparent;

    &:hover {
      background: rgba(119, 245, 255, 0.3);
    }
  `,
  inline: css`
    border: none;
    background-color: transparent;
    color: var(--gray-50);
    cursor: default;
    padding: var(--space-xs) 0;

    &:hover {
      color: var(--primary-color);
    }
  `,
  skill: css`
    border: 1px solid var(--gray-200);
    color: var(--gray-200);
    background-color: transparent;
    box-shadow: var(--shadow-10);
    cursor: default;

    &:hover {
      box-shadow: var(--shadow-20);
      background: rgba(119, 245, 255, 0.3);
      border: 1px solid var(--primary-variant-color);
    }
  `
};

const ButtonStyles = styled.button < ButtonProps > `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  width: fit-content;
  border-radius: var(--border-radius-sm);
  font-weight: var(--font-weight-bold);
  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--space-xs);
  }
  ${props => variants[props.variant || 'filled']}    
`;

export default ButtonStyles;