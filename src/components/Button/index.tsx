import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import {
  ButtonTypeStyleProps,
  ButtonWidthStyleProps,
  Container,
  Icon,
  Title,
} from './styles'

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  size?: ButtonWidthStyleProps
  icon?: keyof typeof MaterialIcons.glyphMap
  isIcon?: boolean
  title: string
}

export function Button({
  type = 'primary',
  size = 'lg',
  icon = 'add',
  isIcon = false,
  title,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} sizeWidth={size} {...rest}>
      {isIcon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
