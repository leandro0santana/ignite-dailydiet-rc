import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { mealCreate } from '@storage/meal/mealCreate'

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

export function CreateMeal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [status, setStatus] = useState<'success' | 'fail'>('success')

  const navigation = useNavigation()

  async function handleCreateMeal() {
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

      await mealCreate({
        name,
        description,
        date,
        hour,
        status,
      })

      navigation.navigate('feedback', { status })
    } catch (error) {
      Alert.alert(
        'Nova refeição',
        'Não foi possível adiciona uma nova refeição.',
      )
      console.log(error)
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <Form>
          <Label>Nome</Label>
          <Input value={name} onChangeText={setName} />

          <Label>Descrição</Label>
          <Input
            multiline
            numberOfLines={4}
            type="lg"
            value={description}
            onChangeText={setDescription}
          />

          <DateTimeContainer>
            <DateTimeContent>
              <Label>Data</Label>
              <Input
                keyboardType="numbers-and-punctuation"
                value={date}
                onChangeText={setDate}
              />
            </DateTimeContent>

            <DateTimeContent>
              <Label>Hora</Label>
              <Input
                keyboardType="numbers-and-punctuation"
                value={hour}
                onChangeText={setHour}
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

        <Button title="Cadastrar refeição" onPress={handleCreateMeal} />
      </Content>
    </Container>
  )
}
