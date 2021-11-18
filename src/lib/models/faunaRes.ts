export type faunaRes<Type> = {
  data: Type
  ref: {
    value: {
      id: string
      collection: object
    }
  }
  ts: number
}
