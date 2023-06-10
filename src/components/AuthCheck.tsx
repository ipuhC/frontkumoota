'use client'

import { useSession } from 'next-auth/react'
import { SignInButton, SignOutButton } from './buttons'
import Image from 'next/image'

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()

  console.log(session, status)

  if (status === 'authenticated') {
    return (
      <>
        <Image
          src={session.user?.image ?? '/imagen.webp'}
          width={32}
          height={32}
          alt="avatar del usuario"
        />
        <SignOutButton />
      </>
    )
  } else {
    return (
      <>
        <SignInButton />
      </>
    )
  }
}
