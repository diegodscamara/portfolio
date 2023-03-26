import styled from 'styled-components';

type ButtonStylesProps = {
  variant: 'filled' | 'outlined';
};

const ButtonStyles = styled.button<ButtonStylesProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 16px;
  height: 45px;
  border-radius: var(--border-radius-sm);
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 700;
  transition: all 0.3s ease-in-out;

    ${({ variant }) => variant === 'filled' ? `
      background: var(--primary-color);
      color: var(--black);
      border: 1px solid var(--primary-color);

      svg path {
          transition: all 0.3s ease-in-out;
          fill: var(--black);
        }

      &:hover {
        color: var(--primary-color);
        background-color: transparent;
        
        svg path {
          fill: var(--primary-color);
        }
      }
      ` : `
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      background-color: transparent;

      &:hover {
        background-color: var(--primary-color);
        color: var(--black);

        svg path {
          fill: var(--black);
        }
      }
      `}
`;

export default ButtonStyles;