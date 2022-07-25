import { GraphQLClient } from 'graphql-request'
import { RequestInit } from 'graphql-request/dist/types.dom'
import { useQuery, UseQueryOptions } from 'react-query'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers)
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Time: any
}

export type Assignment = {
  __typename?: 'Assignment'
  classRef: Classes
  createdAt?: Maybe<Scalars['Time']>
  end?: Maybe<Scalars['String']>
  grade?: Maybe<Scalars['String']>
  gradeNotes?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  school: School
  start?: Maybe<Scalars['String']>
  status?: Maybe<AssignmentStatus>
  student: Student
  subject?: Maybe<Scalars['String']>
  surah?: Maybe<Scalars['String']>
  teacher: User
  updatedAt?: Maybe<Scalars['Time']>
  completedAt?: Maybe<Scalars['Time']>
}

export enum AssignmentStatus {
  Completed = 'Completed',
  Edited = 'Edited',
  New = 'New'
}

export type Classes = {
  __typename?: 'Classes'
  createdAt?: Maybe<Scalars['Time']>
  isActive: Scalars['Boolean']
  name: Scalars['String']
  school: School
  students?: Maybe<Array<Student>>
  subjects?: Maybe<Array<Scalars['String']>>
  teacher: User
  updatedAt?: Maybe<Scalars['Time']>
}

export type Query = {
  __typename?: 'Query'
  findUserByID?: Maybe<User>
}

export type QueryFindUserByIdArgs = {
  uid: Scalars['ID']
}

export type School = {
  __typename?: 'School'
  city?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  schoolName: Scalars['String']
  state?: Maybe<Scalars['String']>
  type: SchoolType
  users?: Maybe<Array<User>>
}

export enum SchoolType {
  Islamic = 'Islamic',
  Masjid = 'Masjid',
  Other = 'Other'
}

export type Student = {
  __typename?: 'Student'
  age?: Maybe<Scalars['Int']>
  assignments?: Maybe<Array<Assignment>>
  classes?: Maybe<Array<Classes>>
  createdAt?: Maybe<Scalars['Time']>
  firstName: Scalars['String']
  grade?: Maybe<Scalars['String']>
  isActive: Scalars['Boolean']
  lastName: Scalars['String']
  parent: User
  school: School
  studentId: Scalars['ID']
  updatedAt?: Maybe<Scalars['Time']>
}

export type User = {
  __typename?: 'User'
  accType: UserAccType
  children?: Maybe<Array<Student>>
  classes?: Maybe<Array<Classes>>
  createdAt?: Maybe<Scalars['Time']>
  email: Scalars['String']
  emailVerified: Scalars['Boolean']
  firstName: Scalars['String']
  initialAccountCreation?: Maybe<Scalars['Boolean']>
  isActivated?: Maybe<Scalars['Boolean']>
  isActive: Scalars['Boolean']
  lastName: Scalars['String']
  school: School
  submittedApplication?: Maybe<Scalars['Boolean']>
  uid: Scalars['ID']
  updatedAt?: Maybe<Scalars['Time']>
}

export enum UserAccType {
  Admin = 'Admin',
  Parent = 'Parent',
  Teacher = 'Teacher'
}

export type RootQueryVariables = Exact<{ [key: string]: never }>

export type RootQuery = { __typename?: 'Query'; findUserByID?: { __typename?: 'User'; uid: string; firstName: string } | null | undefined }

export const RootDocument = `
    query Root {
  findUserByID(uid: "") {
    uid
    firstName
  }
}
    `
export const useRootQuery = <TData = RootQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: RootQueryVariables,
  options?: UseQueryOptions<RootQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<RootQuery, TError, TData>(
    variables === undefined ? ['Root'] : ['Root', variables],
    fetcher<RootQuery, RootQueryVariables>(client, RootDocument, variables, headers),
    options
  )
