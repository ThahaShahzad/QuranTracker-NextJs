import { form } from 'lib/models/auth/accountCreation'
import React, { useContext, createContext, useState } from 'react'

export interface AccountCreationContextType {
  form: form
  setForm: React.Dispatch<React.SetStateAction<form>>
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
