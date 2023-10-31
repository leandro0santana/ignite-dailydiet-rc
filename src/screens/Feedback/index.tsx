import { useNavigation, useRoute } from '@react-navigation/native'

import { Container, FeedbackImage, Strong, Subtitle, Title } from './styles'

import { Button } from '@components/Button'

import dietSuccessImg from '@assets/diet-success.png'
import dietFailImg from '@assets/diet-fail.png'

type RouteParams = {
  status: 'success' | 'fail'
}

export function Feedback() {
  const route = useRoute()
  const navigation = useNavigation()

  const { status } = route.params as RouteParams

  function handleGoBackHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      {status === 'success' ? (
        <>
          <Title type={status}>Continue assim!</Title>
          <Subtitle>
            Você continua <Strong>dentro da dieta</Strong>. Muito bem!
          </Subtitle>
        </>
      ) : (
        <>
          <Title type={status}>Que pena!</Title>
          <Subtitle>
            Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
            esforçando e não desista!
          </Subtitle>
        </>
      )}

      {status === 'success' ? (
        <FeedbackImage source={dietSuccessImg} />
      ) : (
        <FeedbackImage source={dietFailImg} />
      )}

      <Button
        title="Ir para a página inicial"
        size="md"
        onPress={handleGoBackHome}
      />
    </Container>
  )
}
