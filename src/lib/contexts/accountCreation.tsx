import React, { useContext, createContext, useState } from 'react'

export interface AccountCreationContextType {
  form: form
  setForm: React.Dispatch<React.SetStateAction<form>>
}
export interface form {
  Parents?: {
    'First Name': string
    'Last Name': string
    Email: string
    'Child(ren)': string
  }[]
  Students?: {
    'Student ID': string
    'Parent Email': string
    'First Name': string
    'Last Name': string
    Age: string
    Grade: string
  }[]
  Teachers?: {
    'First Name': string
    'Last Name': string
    Email: string
  }[]
  Classes?: {
    Name: string
    "Teacher's email": string
    Students: string
  }[]
}

const accountCreationContext = createContext<AccountCreationContextType>(undefined!)

export const AccountCreationProvider: React.FC = ({ children }) => {
  const Value = useProvideAccountCreation()
  return <accountCreationContext.Provider value={Value}>{children}</accountCreationContext.Provider>
}

export const useAccountCreationContext = () => {
  return useContext(accountCreationContext)
}

const useProvideAccountCreation = () => {
  const [form, setForm] = useState<form>({})
  return {
    form,
    setForm
  }
}
