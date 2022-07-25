import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from 'lib/config/clients/firebase'
import { SignInType } from 'lib/models/auth'
import nookies from 'nookies'
import { faunaDoc } from 'lib/models/faunaRes'
import { faunaClient } from 'lib/config/clients/fauna'
import { Call, Function, Get, Index, Match } from 'faunadb'
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
      .then(async (response) => {
        const idToken = (await response.user?.getIdToken()) as string
        nookies.set(undefined, 'QuranTrackerFirebaseAuthToken', idToken, { path: '/' })
        // setUser(response.user)
        return response.user
      })
  }

  const signup = ({ email, password }: SignInType) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        await response.user?.sendEmailVerification()
        // setUser(response.user)
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
        nookies.set(undefined, 'QuranTrackerFirebaseAuthToken', '', { path: '/' })
        router.push('/auth/signin')
      })
  }
  //   Merge(Select(["data", "school"], Var("user")), { school: Var("school") })
  // { ref: Select("ref", Var("classes")) },

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken()
          const dbUser: faunaDoc<DbUser> = await faunaClient.query(Call(Function('GetUser'), user.uid))
          dbUser.data.id = dbUser.ref.id
          const idUser = dbUser.data
          setUser(idUser)
          nookies.set(undefined, 'QuranTrackerFirebaseAuthToken', token, { path: '/' })
          nookies.set(undefined, 'QuranTrackerUserId', idUser.id, { path: '/' })
        } catch (error) {
          setUser(false)
          nookies.set(undefined, 'QuranTrackerFirebaseAuthToken', '', { path: '/' })
        }
      } else {
        console.log('no user')
        setUser(false)
        nookies.set(undefined, 'QuranTrackerFirebaseAuthToken', '', { path: '/' })
      }
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      try {
        const user = firebase.auth().currentUser
        if (user) {
          const token = await user.getIdToken(true)
          nookies.set(undefined, 'QuranTrackerFirebaseAuthToken', token, { path: '/' })
        }
      } catch (error) {
        router.push('/auth/signin')
        console.error(error)
      }
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
