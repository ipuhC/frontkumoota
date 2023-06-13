import React from 'react'
import Navbar from 'modules/Layout/widgets/Navbar'
import AuthProvider from 'modules/Auth/components/AuthProvider'
import 'styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <div>{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}
