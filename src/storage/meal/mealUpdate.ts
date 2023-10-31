/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { MealStorageDTO } from './MealStorageDTO'
import { mealsGetAll } from './mealsGetAll'

export async function mealUpdate(updateMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll()

    const meals = storedMeals.map((meal) => {
      if (meal.id === updateMeal.id) {
        return updateMeal
      } else {
        return meal
      }
    })

    const storageMeals = JSON.stringify(meals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storageMeals)
  } catch (error) {
    throw error
  }
}
