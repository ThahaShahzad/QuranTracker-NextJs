import firebase from 'firebase/compat/app'
import { getAnalytics } from 'firebase/analytics'
import 'firebase/compat/auth'

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

if (!firebase.apps.length) {
  const app = firebase.initializeApp(clientCredentials)
  if (typeof window !== 'undefined') {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    getAnalytics(app)
  }
}

export default firebase
