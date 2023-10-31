/* eslint-disable no-useless-catch */
import { AppError } from '@utils/AppError'
import { mealsGetAll } from './mealsGetAll'

export async function mealGetById(mealId: string) {
  try {
    const storedMeals = await mealsGetAll()

    const meal = storedMeals.find((meal) => meal.id === mealId)

    if (!meal) {
      throw new AppError('Refeição não encontrada!')
    }

    return meal
  } catch (error) {
    throw error
  }
}
