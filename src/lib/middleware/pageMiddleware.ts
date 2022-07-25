// import firebaseAdmin from 'lib/config/clients/firebaseAdmin'
import { GetServerSidePropsContext } from 'next'
import { parseCookies, setCookie } from 'nookies'
import axios from 'axios'
import * as jose from 'jose'

export const withPageAuthFromDash = (getSSRFunc: Function) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const cookies = parseCookies(context)
      const firebaseAuthToken = cookies.QuranTrackerFirebaseAuthToken as any
      const header64 = firebaseAuthToken.split('.')[0]
      const header = JSON.parse(Buffer.from(header64, 'base64').toString('ascii'))
      const res = await axios.get('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
      const publicKeys = res.data
      const ecPublicKey = await jose.importX509(publicKeys[header.kid], 'RS256')
      const token = await jose.jwtVerify(firebaseAuthToken, ecPublicKey, {
        algorithms: ['RS256'],
        audience: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        issuer: `https://securetoken.google.com/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`
      })
      if (token) return await getSSRFunc(context)
    } catch (error) {
      setCookie(undefined, 'QuranTrackerFirebaseAuthToken', '', { path: '/' })
      return {
        redirect: {
          destination: '/auth/signin',
          permanent: false
        }
      }
    }
  }
}

export const withPageAuthToDash = (getSSRFunc: Function) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const cookies = parseCookies(context)
      const firebaseAuthToken = cookies.QuranTrackerFirebaseAuthToken as any
      const header64 = firebaseAuthToken.split('.')[0]
      const header = JSON.parse(Buffer.from(header64, 'base64').toString('ascii'))
      const res = await axios.get('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
      const publicKeys = res.data
      const ecPublicKey = await jose.importX509(publicKeys[header.kid], 'RS256')
      const token = await jose.jwtVerify(firebaseAuthToken, ecPublicKey, {
        algorithms: ['RS256'],
        audience: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        issuer: `https://securetoken.google.com/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`
      })
      if (token)
        return {
          redirect: {
            destination: '/dash',
            permanent: false
          }
        }
      return
    } catch (error) {
      return await getSSRFunc(context)
    }
  }
}

// import * as jose from 'jose'
// import type { NextFetchEvent, NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'

// const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
//   try {
//     const firebaseAuthToken = req.cookies.firebaseAuthToken
//     const header64 = firebaseAuthToken.split('.')[0]
//     const header = JSON.parse(Buffer.from(header64, 'base64').toString('ascii'))
//     const res = await fetch('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
//     const publicKeys = await res.json()
//     const x509Key = publicKeys[header.kid]
//     const ecPublicKey = await jose.importX509(x509Key, 'RS256')
//     const token = await jose.jwtVerify(firebaseAuthToken, ecPublicKey, {
//       algorithms: ['RS256'],
//       audience: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       issuer: `https://securetoken.google.com/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`
//     })
//     if (token) return NextResponse.next()
//   } catch (error) {
//     return NextResponse.redirect('/auth/signin')
//   }
// }

// export default middleware
