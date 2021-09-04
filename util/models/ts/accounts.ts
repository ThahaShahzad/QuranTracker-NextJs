export interface Accounts {
  classes: [
    {
      name: string
      teacher: string
      students: string[]
    }
  ]
  teachers: [
    {
      firstName: string //given_name
      lastName: string //family_name
      email: string
      password: string
      teacherClasses: string[]
    }
  ]
  students: [
    {
      firstName: string
      lastName: string
      age: number
      grade?: string
      studentClasses: string[]
    }
  ]
}
export interface Auth0CreateAccRes {
  created_at: string
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  identities: []
  name: string
  nickname: string
  picture: string
  updated_at: string
  user_id: string
}
