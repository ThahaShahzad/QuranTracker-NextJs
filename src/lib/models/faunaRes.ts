export type faunaDoc<Type> = {
  data: Type
  ref: {
    id: string
    '@ref': {
      id: string
    }
  }
  ts: number
}
export type faunaRes<Type> = {
  data: Type
}
