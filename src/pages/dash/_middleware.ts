import * as jose from 'jose'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  try {
    const firebaseAuthToken = req.cookies.firebaseAuthToken as any
    const header64 = firebaseAuthToken.split('.')[0]
    const header = JSON.parse(Buffer.from(header64, 'base64').toString('ascii'))
    const res = await fetch('https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
    const publicKeys = await res.json()
    const ecPublicKey = await jose.importX509(publicKeys[header.kid], 'ES256')
    const token = await jose.jwtVerify(firebaseAuthToken, ecPublicKey, {
      algorithms: ['RS256'],
      audience: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      issuer: `https://securetoken.google.com/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`
    })
    console.log(token)
    if (token) return NextResponse.next()
  } catch (error) {
    // return NextResponse.next()
    NextResponse.redirect('/auth/signin')
  }
}

export default middleware
