import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert } from 'react-native'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { mealGetById } from '@storage/meal/mealGetById'
import { mealRemoveById } from '@storage/meal/mealRemoveById'

import { AppError } from '@utils/AppError'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'

import {
  Container,
  Content,
  Description,
  MealInfo,
  Status,
  Tag,
  Title,
  TitleDataTime,
  TitleTag,
} from './styles'

type RouteParams = {
  id: string
}

export function DetailDiet() {
  const [isLoading, setIsLoading] = useState(true)
  const [meal, setMeal] = useState<MealStorageDTO>()

  const route = useRoute()
  const navigation = useNavigation()

  const { id } = route.params as RouteParams

  function handleEditMeal() {
    navigation.navigate('edit', { id })
  }

  async function handleRemoveMeal() {
    try {
      await mealRemoveById(id)
      navigation.navigate('home')
    } catch (err) {
      Alert.alert('Remove refeição', 'Não foi possível remove a refeição.')
      console.log(err)
    }
  }

  function handleRemoveQuestionMeal() {
    Alert.alert(
      'Remove refeição',
      'Deseja realmente excluir o registro da refeição?',
      [
        {
          text: 'Sim, excluir',
          onPress: () => handleRemoveMeal(),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    )
  }

  async function fecthMeal() {
    try {
      setIsLoading(true)

      const storadMeal = await mealGetById(id)
      setMeal(storadMeal)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
      } else {
        Alert.alert('Refeição', 'Não foi possível carregar a refeição.')
        console.log(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fecthMeal()
  }, [])

  if (isLoading || !meal) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <Header type={meal.status} title="Refeição" />
      <Content>
        <MealInfo>
          <Title>{meal.name}</Title>
          <Description>{meal.description}</Description>
          <TitleDataTime>Data e hora</TitleDataTime>
          <Description>{`${meal.date} às ${meal.hour}`}</Description>
          <Tag type={meal.status}>
            <Status type={meal.status} />
            <TitleTag>
              {meal.status === 'success' ? 'dentro da dieta' : 'fora da dieta'}
            </TitleTag>
          </Tag>
        </MealInfo>

        <Button
          title="Editar refeição"
          icon="edit"
          isIcon
          onPress={handleEditMeal}
        />
        <Button
          title="Excluir refeição"
          icon="delete"
          isIcon
          type="secondary"
          onPress={handleRemoveQuestionMeal}
        />
      </Content>
    </Container>
  )
}
