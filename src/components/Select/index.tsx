import { TouchableOpacityProps } from 'react-native'

import {
  Container,
  SelectActiveStyleProps,
  SelectTypeStyleProps,
  Status,
  Title,
} from './styles'

type SelectProps = TouchableOpacityProps & {
  title: string
  isActive?: SelectActiveStyleProps
  type?: SelectTypeStyleProps
}

export function Select({
  title,
  type = 'success',
  isActive = false,
  ...rest
}: SelectProps) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Status type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
