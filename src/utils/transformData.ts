import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

interface TransformedData {
  title: string
  data: MealStorageDTO[]
}

export function transformData(
  originalData: MealStorageDTO[],
): TransformedData[] {
  // Ordenar os itens pelo campo 'date' em ordem decrescente
  const sortedInput = originalData.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-')).getTime()
    const dateB = new Date(b.date.split('/').reverse().join('-')).getTime()
    return dateB - dateA
  })

  const formattedData: TransformedData[] = []

  sortedInput.forEach((item) => {
    const itemDate = item.date.split('/').join('.')
    const existingData = formattedData.find((data) => data.title === itemDate)

    const formattedItem: MealStorageDTO = {
      id: item.id,
      name: item.name,
      description: item.description,
      date: item.date,
      hour: item.hour,
      status: item.status,
    }

    if (existingData) {
      existingData.data.push(formattedItem)
    } else {
      formattedData.push({
        title: itemDate,
        data: [formattedItem],
      })
    }
  })

  return formattedData
}
