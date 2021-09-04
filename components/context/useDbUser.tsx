import axios from 'axios'
import React, { useState, useEffect, useContext, createContext } from 'react'
import { IUser } from 'util/models/user'

interface userContext {
  user: IUser
}

const authContext = createContext<userContext>(undefined!)

export const DbUserProvider: React.FC = ({ children }) => {
  const auth = useDbUser()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useDbAuth = () => {
  return useContext(authContext)
}

function useDbUser() {
  const [user, setUser] = useState<IUser>(undefined!)
  useEffect(() => {
    ;(async () => {
      const response: any = await axios.get('/api/auth/getUser')
      const user = response.data
      setUser(user)
    })()
  }, [])

  return { user }
}
