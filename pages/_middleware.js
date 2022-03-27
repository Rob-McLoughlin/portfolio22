import { NextResponse } from 'next/server'
// import { exchangeParamForToken } from '@/lib/auth'
const jwt = require('jsonwebtoken')
const guestList = require('../access.json')

const openPaths = [
  '/login',
  '/api/login',
  '.png',
  '.ico',
  '.jpg',
  '.jpeg',
  '.svg'
]

const createToken = async (payload, duration) => {
  const exp = duration || '3h'
  const privateKey = process.env.JWT_SECRET
  //   const privateKey = 'kajshajhfkajshf'
  const token = jwt.sign(payload, privateKey, { expiresIn: exp })
  return token
}

const exchangeParamForToken = async url => {
  console.log('Trying to exchange params for token')
  const urlContainsParams = url.includes('?')
  if (!urlContainsParams) {
    return false
  }
  const params = {}
  let urlParams = url.split('?')[1]
  urlParams = urlParams.split('&')
  urlParams = urlParams.map(p => {
    const param = p.split('=')
    const keyName = param[0]
    const value = param[1]
    params[keyName] = value
  })
  if (!params.k) {
    return false
  }
  const { invites } = guestList
  let matchedInvite = null
  invites.forEach(invite => {
    if (invite.key === params.k) {
      matchedInvite = invite
    }
  })
  if (!matchedInvite) {
    return false
  }
  const newToken = await createToken(matchedInvite)
  return newToken
}

// MAIN MIDDLEWARE FUNCTION
export async function middleware (request) {
  console.log('URL -> ', request.url)
  let response = NextResponse.next()
  let clear = false

  openPaths.forEach(op => {
    if (request.url.includes(op)) {
      clear = true
      return
    }
  })

  if (clear) {
    return response
  }

  const tokenFromParams = await exchangeParamForToken(request.url)
  if (tokenFromParams) {
    response.cookie('access-token', tokenFromParams, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })
    return response
  }

  const authCookie = request.cookies['access-token']
  if (!authCookie) {
    response = NextResponse.redirect('/login')
  }

  const privateKey = process.env.JWT_SECRET

  let claim = false
  try {
    claim = jwt.verify(authCookie, privateKey)
  } catch (err) {
    console.log(err)
  }
  if (!claim) {
    response = NextResponse.redirect('/login')
  }

  return response
}
