'use client'
import * as React from 'react'
import { RegisterForm } from 'modules/Auth/widgets/Formregister'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'

export default function register() {
  return (
    <Container>
      <FormContainer title="Registrarse en Kumoota">
        <RegisterForm />
      </FormContainer>
    </Container>
  )
}
