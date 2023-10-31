import { TouchableOpacityProps } from 'react-native'
import {
  ButtonTypeStyleProps,
  Container,
  Icon,
  Subtitle,
  Title,
} from './styles'

type PercentProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  title: string
}

export function Percent({ type = 'PRIMARY', title, ...rest }: PercentProps) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}
