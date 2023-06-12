'use client'
import * as React from 'react'
import ResponsiveAppBar from './Navbar'

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <p>Footer</p>
    </>
  )
}
