const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '.env.local' })
const guestList = require('access.json')

export const createToken = async (payload, duration) => {
  const exp = duration || '3h'
  const privateKey = process.env.JWT_SECRET
  //   const privateKey = 'kajshajhfkajshf'
  const token = jwt.sign(payload, privateKey, { expiresIn: exp })
  return token
}

export const decodeToken = token => {
  const privateKey = process.env.JWT_SECRET
  let claim = false
  try {
    claim = jwt.verify(token, privateKey)
  } catch (err) {
    console.log(err)
  }
  return claim
}

export const getSession = async context => {
  const cookie = context.req.headers.cookie
  if (!cookie) {
    return false
  }
  const cookies = cookie.split('; ')
  const accessToken = cookies.find(c => c.startsWith('access-token='))
  if (!accessToken) {
    return false
  }
  const token = accessToken.split('=')[1]
  const claim = decodeToken(token)
  return claim
  // console.log(context)
}

export const exchangeParamForToken = async context => {
  const params = context.query
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

async function test () {
  let token = await createToken({ message: 'hello' })
  token = token.slice(0, token.length - 1)
  const claim = decodeToken(token)
  console.log(claim)
}

// test()
