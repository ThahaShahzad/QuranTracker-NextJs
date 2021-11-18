import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Long: any;
  Time: any;
};

export type Classes = {
  __typename?: 'Classes';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  students: StudentPage;
  teacher: User;
};


export type ClassesStudentsArgs = {
  _cursor?: Maybe<Scalars['String']>;
  _size?: Maybe<Scalars['Int']>;
};

export type ClassesInput = {
  name?: Maybe<Scalars['String']>;
  students?: Maybe<ClassesStudentsRelation>;
  teacher?: Maybe<ClassesTeacherRelation>;
};

export type ClassesPage = {
  __typename?: 'ClassesPage';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  data: Array<Maybe<Classes>>;
};

export type ClassesStudentsRelation = {
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  create?: Maybe<Array<Maybe<StudentInput>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ClassesTeacherRelation = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<UserInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClasses: Classes;
  createSchool: School;
  createStudent: Student;
  createUser: User;
  deleteClasses?: Maybe<Classes>;
  deleteSchool?: Maybe<School>;
  deleteStudent?: Maybe<Student>;
  deleteUser?: Maybe<User>;
  updateClasses?: Maybe<Classes>;
  updateSchool?: Maybe<School>;
  updateStudent?: Maybe<Student>;
  updateUser?: Maybe<User>;
};


export type MutationCreateClassesArgs = {
  data: ClassesInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationDeleteClassesArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSchoolArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateClassesArgs = {
  data: ClassesInput;
  id: Scalars['ID'];
};


export type MutationUpdateSchoolArgs = {
  data: SchoolInput;
  id: Scalars['ID'];
};


export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  data: UserInput;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  findClassesByID?: Maybe<Classes>;
  findSchoolByID?: Maybe<School>;
  findStudentByID?: Maybe<Student>;
  findUserByID?: Maybe<User>;
  findUserByUID?: Maybe<User>;
};


export type QueryFindClassesByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindSchoolByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindStudentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByUidArgs = {
  uid: Scalars['ID'];
};

export type School = {
  __typename?: 'School';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  type?: Maybe<SchoolType>;
  users: UserPage;
};


export type SchoolUsersArgs = {
  _cursor?: Maybe<Scalars['String']>;
  _size?: Maybe<Scalars['Int']>;
};

export type SchoolInput = {
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  type?: Maybe<SchoolType>;
  users?: Maybe<SchoolUsersRelation>;
};

export enum SchoolType {
  Islamic = 'Islamic',
  Masjid = 'Masjid',
  Other = 'Other'
}

export type SchoolUsersRelation = {
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  create?: Maybe<Array<Maybe<UserInput>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Student = {
  __typename?: 'Student';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  age?: Maybe<Scalars['Int']>;
  classes: ClassesPage;
  firstName?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  parent: User;
  parentEmail?: Maybe<Scalars['String']>;
};


export type StudentClassesArgs = {
  _cursor?: Maybe<Scalars['String']>;
  _size?: Maybe<Scalars['Int']>;
};

export type StudentClassesRelation = {
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  create?: Maybe<Array<Maybe<ClassesInput>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StudentInput = {
  age?: Maybe<Scalars['Int']>;
  classes?: Maybe<StudentClassesRelation>;
  firstName?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  parent?: Maybe<StudentParentRelation>;
  parentEmail?: Maybe<Scalars['String']>;
};

export type StudentPage = {
  __typename?: 'StudentPage';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  data: Array<Maybe<Student>>;
};

export type StudentParentRelation = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<UserInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  accType?: Maybe<UserAccType>;
  children: StudentPage;
  classes: ClassesPage;
  createdAt?: Maybe<Scalars['Time']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  initalAccountCreation?: Maybe<Scalars['Boolean']>;
  isActivated?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  school: School;
  submittedApplication?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Time']>;
};


export type UserChildrenArgs = {
  _cursor?: Maybe<Scalars['String']>;
  _size?: Maybe<Scalars['Int']>;
};


export type UserClassesArgs = {
  _cursor?: Maybe<Scalars['String']>;
  _size?: Maybe<Scalars['Int']>;
};

export type UserChildrenRelation = {
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  create?: Maybe<Array<Maybe<StudentInput>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserClassesRelation = {
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  create?: Maybe<Array<Maybe<ClassesInput>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserInput = {
  accType?: Maybe<UserAccType>;
  children?: Maybe<UserChildrenRelation>;
  classes?: Maybe<UserClassesRelation>;
  createdAt?: Maybe<Scalars['Time']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  initalAccountCreation?: Maybe<Scalars['Boolean']>;
  isActivated?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  school?: Maybe<UserSchoolRelation>;
  submittedApplication?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type UserPage = {
  __typename?: 'UserPage';
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  data: Array<Maybe<User>>;
};

export type UserSchoolRelation = {
  connect?: Maybe<Scalars['ID']>;
  create?: Maybe<SchoolInput>;
};

export enum UserAccType {
  Admin = 'Admin',
  Parent = 'Parent',
  Teacher = 'Teacher'
}

export type AdminApplicationMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UserInput;
}>;


export type AdminApplicationMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', _id: string, uid?: string | null | undefined, email?: string | null | undefined, school: { __typename?: 'School', schoolName?: string | null | undefined, email?: string | null | undefined, state?: string | null | undefined, city?: string | null | undefined, phone?: string | null | undefined, type?: SchoolType | null | undefined } } | null | undefined };

export type CreateAdminMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, uid?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, emailVerified?: boolean | null | undefined, submittedApplication?: boolean | null | undefined, isActivated?: boolean | null | undefined, isActive?: boolean | null | undefined, accType?: UserAccType | null | undefined } };


export const AdminApplicationDocument = `
    mutation AdminApplication($id: ID!, $input: UserInput!) {
  updateUser(id: $id, data: $input) {
    _id
    uid
    email
    school {
      schoolName
      email
      state
      city
      phone
      type
    }
  }
}
    `;
export const useAdminApplicationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AdminApplicationMutation, TError, AdminApplicationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AdminApplicationMutation, TError, AdminApplicationMutationVariables, TContext>(
      'AdminApplication',
      (variables?: AdminApplicationMutationVariables) => fetcher<AdminApplicationMutation, AdminApplicationMutationVariables>(client, AdminApplicationDocument, variables, headers)(),
      options
    );
export const CreateAdminDocument = `
    mutation createAdmin($input: UserInput!) {
  createUser(data: $input) {
    _id
    uid
    firstName
    lastName
    email
    emailVerified
    submittedApplication
    isActivated
    isActive
    accType
  }
}
    `;
export const useCreateAdminMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateAdminMutation, TError, CreateAdminMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateAdminMutation, TError, CreateAdminMutationVariables, TContext>(
      'createAdmin',
      (variables?: CreateAdminMutationVariables) => fetcher<CreateAdminMutation, CreateAdminMutationVariables>(client, CreateAdminDocument, variables, headers)(),
      options
    );