import { ButtonProps } from './types'
import ButtonStyles from './styles'

const Button = ({ variant, children }: ButtonProps) => {
  return <ButtonStyles variant={variant}>{children}</ButtonStyles>
}

export default Button
