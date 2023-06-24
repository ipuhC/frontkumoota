'use client'
import * as React from 'react'
import { LoginForm } from 'modules/Auth/widgets/Formlogin'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'

export default function Login() {
  return (
    <Container>
      <FormContainer title="Iniciar sesión">
        <LoginForm />
      </FormContainer>
    </Container>
  )
}
