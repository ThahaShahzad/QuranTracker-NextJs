import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from 'lib/config/clients/firebase'
import { SignInType } from 'lib/models/auth'
import nookies from 'nookies'
import { faunaRes } from 'lib/models/faunaRes'
import { faunaClient } from 'lib/config/clients/fauna'
import { Get, Index, Match } from 'faunadb'
import { useRouter } from 'next/router'
import { DbUser } from 'lib/models/dbuser'

interface userContext {
  user: DbUser
  signin: ({ email, password }: SignInType) => Promise<firebase.User | null>
  signup: ({ email, password }: SignInType) => Promise<firebase.User | null>
  sendPasswordResetEmail: (email: any) => Promise<boolean>
  confirmPasswordReset: (password: any, code: any) => Promise<boolean>
  signout: () => Promise<void>
}

const authContext = createContext<userContext>(undefined!)

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  const signin = ({ email, password }: SignInType) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user)
        return response.user
      })
  }

  const signup = ({ email, password }: SignInType) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        await response.user?.sendEmailVerification()
        setUser(response.user)
        return response.user
      })
  }

  const sendPasswordResetEmail = (email: string) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true
      })
  }

  const confirmPasswordReset = (password: string, code: string) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true
      })
  }

  // const resendEmailVerification = () => {
  //   return firebase.auth().currentUser?.sendEmailVerification()
  // }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
        router.push('/auth/signin')
      })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken()
          const dbUser: faunaRes<DbUser> = await faunaClient.query(Get(Match(Index('findUserByUID'), user.uid)))
          const idUser = dbUser.data
          dbUser.data.id = dbUser.ref.value.id
          setUser(idUser)
          nookies.set(undefined, 'firebaseAuthToken', token, { path: '/' })
        } catch (error) {
          setUser(false)
          nookies.set(undefined, 'firebaseAuthToken', '', { path: '/' })
        }
      } else {
        setUser(false)
        nookies.set(undefined, 'firebaseAuthToken', '', { path: '/' })
      }
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebase.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    // clean up setInterval
    return () => clearInterval(handle)
  }, [])

  return {
    user,
    signin,
    signup,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signout
  }
}
