import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'
import axios from 'axios'
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async ({ session, token }) => {
      session.user = token // Setting token in session
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    GoogleProvider({
      clientId: process.env.GMAIL_ID!,
      clientSecret: process.env.GMAIL_SECRET!,
    }),

    CredentialProvider({
      async authorize(credentials) {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: credentials.email,
          password: credentials.password,
        })

        // Returning token to set in session
        return {
          token: response,
        }
      },
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
