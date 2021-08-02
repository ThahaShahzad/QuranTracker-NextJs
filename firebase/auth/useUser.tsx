import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from '@/firebase/init/firebase'
import { removeUserCookie, setUserCookie, getUserFromCookie } from './userCookies'
import { useRouter } from 'next/router'

if (!firebase.apps.length) {
  initFirebase()
}
interface authContext {
  user: null
  signin: ({ email, password }: loginInfo) => Promise<any>
  signup: ({ email, password }: loginInfo) => Promise<any>
  signout: () => Promise<void>
  sendPasswordResetEmail: (email: string) => Promise<{}>
  confirmPasswordReset: ({ password, code }: passwordResetInfo) => Promise<{}>
}
const AuthContext = createContext<authContext>(undefined!)

export const ProvideAuth = ({ children }: any) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
interface loginInfo {
  email: string
  password: string
}
interface authResponse {}
interface passwordResetInfo {
  password: string
  code: string
}
function useProvideAuth() {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const signin = ({ email, password }: loginInfo) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response: any) => {
        console.log(response)
        setUser(response.user)
        return response.user
      })
  }

  const signup = ({ email, password }: loginInfo) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response: any) => {
        setUser(response.user)
        return response.user
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
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

  const confirmPasswordReset = ({ password, code }: passwordResetInfo) => {
    //const resetCode = code
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true
      })
  }

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user: any) => {
      if (user) {
        setUserCookie(user)
        setUser(user)
      } else {
        removeUserCookie()
        setUser(null)
      }
    })

    const userFromCookie = getUserFromCookie()
    if (!userFromCookie) {
      router.push('/auth/login')
    }
    setUser(userFromCookie)

    return () => {
      cancelAuthListener()
    }
  }, [])

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  }
}
// const useUser = () => {
//     const [user, setUser] = useState()
//     const router = useRouter()

//     const logout = async () => {
//         return firebase
//             .auth()
//             .signOut()
//             .then(() => {
//                 // Sign-out successful.
//                 router.push('/auth')
//             })
//             .catch((e) => {
//                 console.error(e)
//             })
//     }

//     useEffect(() => {
//         // Firebase updates the id token every hour, this
//         // makes sure the react state and the cookie are
//         // both kept up to date
//         const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
//             if (user) {
//                 const userData = mapUserData(user)
//                 setUserCookie(userData)
//                 setUser(userData)
//             } else {
//                 removeUserCookie()
//                 setUser()
//             }
//         })

//         const userFromCookie = getUserFromCookie()
//         if (!userFromCookie) {
//             router.push('/')
//             return
//         }
//         setUser(userFromCookie)

//         return () => {
//             cancelAuthListener()
//         }
//     }, [])

//     return { user, logout }
// }

// export { useUser }
