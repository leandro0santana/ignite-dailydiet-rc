import { useEffect, useState } from 'react'

import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Select } from '@components/Select'

import {
  Container,
  Content,
  DateTimeContainer,
  DateTimeContent,
  Form,
  Label,
  Option,
} from './styles'
import { mealGetById } from '@storage/meal/mealGetById'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'
import { Loading } from '@components/Loading'
import { mealUpdate } from '@storage/meal/mealUpdate'

type RouteParams = {
  id: string
}

export function EditMeal() {
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [status, setStatus] = useState<'success' | 'fail'>('success')

  const route = useRoute()
  const navigation = useNavigation()

  const { id } = route.params as RouteParams

  async function handleEditMeal() {
    try {
      if (name.trim().length === 0) {
        return Alert.alert('Nova refeição', 'Informe o nome da refeição.')
      }

      if (description.trim().length === 0) {
        return Alert.alert('Nova refeição', 'Informe a descrição da refeição.')
      }

      if (date.trim().length === 0) {
        return Alert.alert('Nova refeição', 'Informe a data da refeição.')
      }

      if (hour.trim().length === 0) {
        return Alert.alert('Nova refeição', 'Informe a hora da refeição.')
      }

      await mealUpdate({
        id,
        name,
        description,
        date,
        hour,
        status,
      })

      navigation.navigate('home')
    } catch (error) {
      Alert.alert(
        'Nova refeição',
        'Não foi possível adiciona uma nova refeição.',
      )
      console.log(error)
    }
  }

  async function fecthMeal() {
    try {
      setIsLoading(true)

      const storadMeal = await mealGetById(id)
      setName(storadMeal.name)
      setDescription(storadMeal.description)
      setDate(storadMeal.date)
      setHour(storadMeal.hour)
      setStatus(storadMeal.status)
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

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <Header title="Editar refeição" />
      <Content>
        <Form>
          <Label>Nome</Label>
          <Input value={name} onChangeText={setName} />

          <Label>Descrição</Label>
          <Input
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            type="lg"
          />

          <DateTimeContainer>
            <DateTimeContent>
              <Label>Data</Label>
              <Input
                value={date}
                onChangeText={setDate}
                keyboardType="numbers-and-punctuation"
              />
            </DateTimeContent>

            <DateTimeContent>
              <Label>Hora</Label>
              <Input
                value={hour}
                onChangeText={setHour}
                keyboardType="numbers-and-punctuation"
              />
            </DateTimeContent>
          </DateTimeContainer>

          <Label>Está dentro da dieta?</Label>
          <Option>
            <Select
              title="Sim"
              isActive={status === 'success'}
              onPress={() => setStatus('success')}
            />
            <Select
              title="Não"
              type="fail"
              isActive={status === 'fail'}
              onPress={() => setStatus('fail')}
            />
          </Option>
        </Form>

        <Button title="Salvar alterações" onPress={handleEditMeal} />
      </Content>
    </Container>
  )
}
