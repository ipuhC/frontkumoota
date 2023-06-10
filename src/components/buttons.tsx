'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export function SignInButton() {
  const { data: session, status } = useSession()
  console.log(session, status)

  if (status === 'loading') {
    return <> ...</>
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/`}>
        <Image
          src={session.user?.image ?? '/imagen.webp'}
          width={32}
          height={32}
          alt="avatar del usuario"
        />
      </Link>
    )
  }
  return (
    <button type="button" onClick={() => signIn()}>
      Iniciar Sesion
    </button>
  )
}

export function SignOutButton() {
  return (
    <button type="button" onClick={() => signOut()}>
      Cerrar sesion
    </button>
  )
}
