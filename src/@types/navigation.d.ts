export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistic: undefined
      create: undefined
      feedback: {
        status: 'success' | 'fail'
      }
      detail: {
        id: string
      }
      edit: {
        id: string
      }
    }
  }
}
