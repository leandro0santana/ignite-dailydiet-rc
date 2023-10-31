/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { mealsGetAll } from './mealsGetAll'

export async function mealRemoveById(mealId: string) {
  try {
    const storageMeals = await mealsGetAll()

    const filteredMeals = storageMeals.filter((meal) => meal.id !== mealId)

    const meals = JSON.stringify(filteredMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, meals)
  } catch (error) {
    throw error
  }
}
