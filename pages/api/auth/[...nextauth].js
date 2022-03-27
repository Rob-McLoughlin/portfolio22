import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
const guestList = require('access.json')

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'keys',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        key: { label: 'Key', type: 'string' }
      },
      async authorize (credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        const { invites } = guestList
        const { key } = credentials
        // console.log(invites)
        // console.log(credentials)
        let user = null
        invites.forEach(invite => {
          if (invite.key === key) {
            // Any object returned will be saved in `user` property of the JWT
            user = {
              id: invite.id,
              name: invite.name
            }
          }
        })
        // If you return null then an error will be displayed advising the user to check their details.
        return user
      }
    })
  ],

  callbacks: {
    redirect: async (url, baseUrl) => {
      return Promise.resolve('/')
    },
    async signIn ({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  }
})
