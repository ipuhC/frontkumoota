'use client'

import React from 'react'
import Navbar from 'modules/Layout/widgets/Navbar'
import AuthProvider from 'modules/Auth/components/AuthProvider'
import 'styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <html lang="es">
          <body>
            <div>{children}</div>
          </body>
        </html>
      </AuthProvider>
    </I18nextProvider>
  )
}
