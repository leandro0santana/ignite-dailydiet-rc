import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

export function calculatePercentage(records: MealStorageDTO[]): number {
  const totalRecords = records.length
  const successRecords = records.filter(
    (record) => record.status === 'success',
  ).length

  const percentage =
    totalRecords > 0 ? (successRecords / totalRecords) * 100 : 0

  return parseFloat(percentage.toFixed(2))
}
