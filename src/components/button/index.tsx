import { ButtonProps } from './types';
import ButtonStyles from './styles';
import Link from 'next/link';
import { Url } from "url";

const Button = ({ attributes, variant, children }: ButtonProps) => {
  const handleClick = async () => {
    if (attributes.onClick) {
      await attributes.onClick();
    }
  };

  return (
    <Link
      href={attributes.link as Url}
      target={attributes.target}
      rel={attributes.rel}
      title={attributes.title}
      aria-label={attributes.title}
    >
      <ButtonStyles variant={variant} onClick={handleClick}>
        {children}
      </ButtonStyles>
    </Link>
  );
};

export default Button;