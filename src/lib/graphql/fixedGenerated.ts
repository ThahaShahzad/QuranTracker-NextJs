import { Expr } from 'faunadb'
import { faunaDoc } from 'lib/models/faunaRes'

export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Time: any
}
type SingleRef = {
  '@ref': {
    collection: any
    id: string
  }
}
export enum AssignmentStatus {
  New = 'New',
  Completed = 'Completed',
  Edited = 'Edited'
}

export type AssignmentDoc = {
  data: {
    createdAt: Scalars['Time']
    end: Scalars['String']
    notes: Scalars['String']
    school: SingleRef
    start: Scalars['String']
    status: AssignmentStatus
    grade: Scalars['String']
    gradeNotes: Scalars['String']
    classRef: SingleRef
    student: SingleRef
    subject: Scalars['String']
    surah: Scalars['String']
    teacher: SingleRef
    updatedAt: Scalars['Time']
    completedAt: Scalars['Time']
  }
  ref: {
    id: string
    '@ref': {
      id: string
    }
  }
  ts: number
}
export type AssignmentObj = {
  createdAt: Scalars['Time']
  end: Scalars['String']
  notes: Scalars['String']
  school: SingleRef
  status: AssignmentStatus
  start: Scalars['String']
  grade: Scalars['String']
  gradeNotes: Scalars['String']
  classRef: SingleRef
  student: SingleRef
  subject: Scalars['String']
  surah: Scalars['String']
  teacher: SingleRef
  updatedAt: Scalars['Time']
  completedAt: Scalars['Time']
}

export type AssignmentCreateObj = {
  createdAt: Scalars['Time']
  end: Scalars['String']
  notes: Scalars['String']
  school: Scalars['String']
  start: Scalars['String']
  status: AssignmentStatus
  classRef: Scalars['String']
  student: Scalars['String']
  subject: Scalars['String']
  surah: Scalars['String']
  teacher: Scalars['String']
  grade: Scalars['String']
  gradeNotes: Scalars['String']
  updatedAt: Scalars['Time']
  completedAt: Scalars['Time']
}
export type AssignmentUpdateObj = {
  assignmentId: Scalars['String']
  data: {
    end: Scalars['String']
    notes: Scalars['String']
    start: Scalars['String']
    status: AssignmentStatus
    grade: Scalars['String']
    gradeNotes: Scalars['String']
    updatedAt: Scalars['Time']
    completedAt: Scalars['Time']
    subject: Scalars['String']
    surah: Scalars['String']
  }
}

// export type NewAssignmentDoc = {
//   data: {
//     createdAt: Scalars['Time']
//     end: Scalars['String']
//     notes: Scalars['String']
//     parentCheck: Scalars['Boolean']
//     school: SchoolDoc
//     start: Scalars['String']
//     student: StudentDoc
//     classRef: ClassesDoc
//     subject: Scalars['String']
//     surah: Scalars['String']
//     teacher: UserDoc
//     updatedAt: Scalars['Time']
//   }
//   ref: {
//     id: string
//     '@ref': {
//       id: string
//     }
//   }
//   ts: number
// }
// export type NewAssignmentObj = {
//   createdAt: Scalars['Time']
//   end: Scalars['String']
//   notes: Scalars['String']
//   school: SchoolDoc
//   start: Scalars['String']
//   student: StudentDoc
//   classRef: ClassesDoc
//   subject: Scalars['String']
//   surah: Scalars['String']
//   teacher: UserDoc
//   updatedAt: Scalars['Time']
// }

export type ClassesDoc = {
  data: {
    createdAt: Scalars['Time']
    isActive: Scalars['Boolean']
    name: Scalars['String']
    school: SchoolDoc
    students: StudentDoc[]
    subject: Array<Scalars['String']>
    teacher: UserDoc
    updatedAt: Scalars['Time']
  }
  ref: {
    id: string
    '@ref': {
      id: string
    }
  }
  ts: number
}
export type ClassesObj = {
  createdAt: Scalars['Time']
  isActive: Scalars['Boolean']
  name: Scalars['String']
  school: SchoolDoc
  students: Array<StudentDoc>
  subject: Array<Scalars['String']>
  teacher: UserDoc
  updatedAt: Scalars['Time']
}

export type SchoolDoc = {
  data: {
    city: Scalars['String']
    email: Scalars['String']
    phone: Scalars['String']
    schoolName: Scalars['String']
    state: Scalars['String']
    type: SchoolType
    users: Array<UserDoc>
  }
  ref: {
    id: string
    '@ref': {
      id: string
    }
  }
  ts: number
}
export type SchoolObj = {
  city: Scalars['String']
  email: Scalars['String']
  phone: Scalars['String']
  schoolName: Scalars['String']
  state: Scalars['String']
  type: SchoolType
  users: Array<UserDoc>
}

export enum SchoolType {
  Islamic = 'Islamic',
  Masjid = 'Masjid',
  Other = 'Other'
}

export type StudentDoc = {
  data: {
    age: Scalars['Int']
    assignments: Array<AssignmentDoc>
    classes: Array<ClassesDoc>
    createdAt: Scalars['Time']
    firstName: Scalars['String']
    grade: Scalars['String']
    isActive: Scalars['Boolean']
    lastName: Scalars['String']
    parent: UserDoc
    school: SchoolDoc
    studentId: Scalars['ID']
    updatedAt: Scalars['Time']
  }
  ref: {
    id: string
    '@ref': {
      id: string
    }
  }
  ts: number
}
export type StudentObj = {
  age: Scalars['Int']
  assignments: Array<AssignmentDoc>
  classes: Array<ClassesDoc>
  createdAt: Scalars['Time']
  firstName: Scalars['String']
  grade: Scalars['String']
  isActive: Scalars['Boolean']
  lastName: Scalars['String']
  parent: UserDoc
  school: SchoolDoc
  studentId: Scalars['ID']
  updatedAt: Scalars['Time']
}

export type UserDoc = {
  data: {
    accType: UserAccType
    children: Array<StudentDoc>
    classes: Array<ClassesDoc>
    createdAt: Scalars['Time']
    email: Scalars['String']
    emailVerified: Scalars['Boolean']
    firstName: Scalars['String']
    initialAccountCreation: Scalars['Boolean']
    isActivated: Scalars['Boolean']
    isActive: Scalars['Boolean']
    lastName: Scalars['String']
    school: SchoolDoc
    submittedApplication: Scalars['Boolean']
    uid: Scalars['ID']
    updatedAt: Scalars['Time']
  }
  ref: {
    id: string
    '@ref': {
      id: string
    }
  }
  ts: number
}
export type UserObj = {
  accType: UserAccType
  children: Array<StudentDoc>
  classes: Array<ClassesDoc>
  createdAt: Scalars['Time']
  email: Scalars['String']
  emailVerified: Scalars['Boolean']
  firstName: Scalars['String']
  initialAccountCreation: Scalars['Boolean']
  isActivated: Scalars['Boolean']
  isActive: Scalars['Boolean']
  lastName: Scalars['String']
  school: SchoolDoc
  submittedApplication: Scalars['Boolean']
  uid: Scalars['ID']
  updatedAt: Scalars['Time']
}

export enum UserAccType {
  Admin = 'Admin',
  Parent = 'Parent',
  Teacher = 'Teacher'
}
