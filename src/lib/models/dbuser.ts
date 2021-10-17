import { AccType, School } from '.prisma/client'

export type DbUser = {
  dbuser: {
    id: string
    userName: string
    email: string
    password: string
    image: string | null
    isEmailVerified: boolean
    submittedApplication: boolean
    isActivated: boolean
    initalAccountCreation: boolean
    isActivate: boolean
    accType: AccType
    schoolId: string | null
    school: School
    createdAt: Date
    updatedAt: Date
  } | null
}
