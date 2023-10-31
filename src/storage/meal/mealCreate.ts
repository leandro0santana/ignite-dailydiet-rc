/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

import { MealStorageDTO } from './MealStorageDTO'
import { mealsGetAll } from './mealsGetAll'
import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function mealCreate({
  name,
  description,
  date,
  hour,
  status,
}: Omit<MealStorageDTO, 'id'>) {
  try {
    const storedMeals = await mealsGetAll()

    const newMeal: MealStorageDTO = {
      id: String(uuid.v4()),
      name,
      description,
      date,
      hour,
      status,
    }

    const meals = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(MEAL_COLLECTION, meals)
  } catch (error) {
    throw error
  }
}
