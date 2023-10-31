import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

export function calculateSequenceSuccess(records: MealStorageDTO[]): number {
  let sequenciaAtual = 0
  let maiorSequencia = 0

  for (const record of records) {
    if (record.status === 'success') {
      sequenciaAtual++
      if (sequenciaAtual > maiorSequencia) {
        maiorSequencia = sequenciaAtual
      }
    } else {
      sequenciaAtual = 0
    }
  }

  return maiorSequencia
}
