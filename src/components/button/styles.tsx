import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'skill';
};

const variants = {
  filled: css`
    background: var(--primary-color);
    color: var(--black);
    border: 1px solid var(--primary-color);

    svg path {
        transition: all 0.3s ease-in-out;
        fill: var(--black);
      }

    &:hover {
      color: var(--black);
      background-color: #16b4c1;
      border: 1px solid #16b4c1;
    }
  `,
  outlined: css`
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    background-color: transparent;

    &:hover {
      background-color: #043b3f;
    }
  `,
  skill: css`
    border: 1px solid var(--light-gray);
    color: var(--light-gray);
    background-color: transparent;
    cursor: default;
  `
};

const ButtonStyles = styled.button < ButtonProps > `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  border-radius: var(--border-radius-sm);
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  ${props => variants[props.variant || 'skill']}    
`;

export default ButtonStyles;