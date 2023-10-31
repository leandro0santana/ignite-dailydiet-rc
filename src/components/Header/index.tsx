import { useNavigation } from '@react-navigation/native'
import {
  BackButton,
  BackIcon,
  Container,
  HeaderSizeStyleProps,
  HeaderTypeStyleProps,
  Subtitle,
  Title,
} from './styles'

type HeaderProps = {
  type?: HeaderTypeStyleProps
  size?: HeaderSizeStyleProps
  title: string
  subtitle?: string
}

export function Header({
  type = 'default',
  size = 'md',
  title,
  subtitle,
}: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container type={type} sizeHeader={size}>
      <BackButton onPress={handleGoBack}>
        <BackIcon type={type} />
      </BackButton>

      <Title type={type} sizeHeader={size}>
        {title}
      </Title>
      {size === 'lg' && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  )
}
