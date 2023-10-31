import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { mealsGetAll } from '@storage/meal/mealsGetAll'

import { calculatePercentage } from '@utils/calculatePercentage'
import { calculateSequenceSuccess } from '@utils/calculateSequenceSuccess'

import { Header } from '@components/Header'
import { Loading } from '@components/Loading'

import {
  Container,
  Content,
  Fail,
  Info,
  Sequence,
  SubtitleBox,
  Success,
  Title,
  TitleBox,
} from './styles'

export function Statistic() {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  async function fecthMeals() {
    try {
      setIsLoading(true)

      const storadMeals = await mealsGetAll()
      setMeals(storadMeals)
    } catch (error) {
      Alert.alert('Estatística', 'Não foi posível carregar as estatísticas.')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fecthMeals()
  }, [])

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header
            size="lg"
            title={`${calculatePercentage(meals)}%`}
            type={calculatePercentage(meals) >= 50 ? 'success' : 'fail'}
            subtitle="das refeições dentro da dieta"
          />

          <Content>
            <Title>Estatísticas gerais</Title>

            <Sequence>
              <TitleBox>{calculateSequenceSuccess(meals)}</TitleBox>
              <SubtitleBox>
                melhor sequência de pratos dentro da dieta
              </SubtitleBox>
            </Sequence>

            <Sequence>
              <TitleBox>{meals.length}</TitleBox>
              <SubtitleBox>refeições registradas</SubtitleBox>
            </Sequence>

            <Info>
              <Success>
                <TitleBox>
                  {meals.filter((record) => record.status === 'success').length}
                </TitleBox>
                <SubtitleBox>refeições dentro da dieta</SubtitleBox>
              </Success>

              <Fail>
                <TitleBox>
                  {meals.filter((record) => record.status === 'fail').length}
                </TitleBox>
                <SubtitleBox>refeições fora da dieta</SubtitleBox>
              </Fail>
            </Info>
          </Content>
        </>
      )}
    </Container>
  )
}
