import { TouchableOpacityProps } from 'react-native'

import {
  Container,
  Divider,
  Hour,
  MealStatusTypeStyleProps,
  Status,
  Title,
} from './styles'

type MealCardProps = TouchableOpacityProps & {
  status?: MealStatusTypeStyleProps
  hour: string
  title: string
}

export function MealCard({
  status = 'success',
  hour,
  title,
  ...rest
}: MealCardProps) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Divider />
      <Title>{title}</Title>
      <Status type={status} />
    </Container>
  )
}
