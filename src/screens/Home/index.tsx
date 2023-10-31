import { useCallback, useState } from 'react'
import { Alert, SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { mealsGetAll } from '@storage/meal/mealsGetAll'

import { transformData } from '@utils/transformData'
import { calculatePercentage } from '@utils/calculatePercentage'

import { Button } from '@components/Button'
import { Percent } from '@components/Percent'
import { MealCard } from '@components/MealCard'
import { Loading } from '@components/Loading'
import { ListEmpty } from '@components/ListEmpty'

import {
  Avatar,
  Container,
  Header,
  ListTitle,
  Logo,
  Profile,
  Title,
} from './styles'

import logoImg from '@assets/logo.png'
import ProfileImg from '@assets/profile.jpg'

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  const navigation = useNavigation()

  function handleStatistic() {
    navigation.navigate('statistic')
  }

  function handleCreateMeal() {
    navigation.navigate('create')
  }

  function handleOpenDetailDiet(id: string) {
    navigation.navigate('detail', { id })
  }

  async function fecthMeals() {
    try {
      setIsLoading(true)

      const storadGroups = await mealsGetAll()
      setMeals(storadGroups)
    } catch (err) {
      Alert.alert('Refeições', 'Não foi posível carregar as refeições.')
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fecthMeals()
    }, []),
  )

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile>
          <Avatar source={ProfileImg} />
        </Profile>
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Percent
            title={`${calculatePercentage(meals)}%`}
            type={calculatePercentage(meals) >= 50 ? 'success' : 'fail'}
            onPress={handleStatistic}
          />

          <Title>Refeições</Title>

          <Button title="Nova refeição" isIcon onPress={handleCreateMeal} />
          <SectionList
            sections={transformData(meals)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MealCard
                hour={item.hour}
                title={item.name}
                status={item.status}
                onPress={() => {
                  handleOpenDetailDiet(item.id)
                }}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <ListTitle>{title}</ListTitle>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              meals.length === 0 && { flex: 1 },
            ]}
            ListEmptyComponent={() => (
              <ListEmpty message="Que tal cadastrar a primeira refeição?" />
            )}
          />
        </>
      )}
    </Container>
  )
}
