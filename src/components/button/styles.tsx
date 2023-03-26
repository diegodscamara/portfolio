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
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 13.33px;
  line-height: 15px;
  transition: all 0.3s ease-in-out;

    ${({ variant }) => variant === 'filled' ? `
      background: #00E7F9;
      color: #000000;
      border: 1px solid #00E7F9;

      svg path {
          transition: all 0.3s ease-in-out;
          fill: #000000;
        }

      &:hover {
        color: #00E7F9;
        background-color: transparent;
        
        svg path {
          fill: #00E7F9;
        }
      }
      ` : `
      color: #00E7F9;
      border: 1px solid #00E7F9;
      background-color: transparent;

      &:hover {
        background-color: #00E7F9;
        color: #000000;

        svg path {
          fill: #000000;
        }
      }
      `}
`;

export default ButtonStyles;