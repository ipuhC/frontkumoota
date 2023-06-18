'use client'
import * as React from 'react'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'
import {RecoveryForm} from  'modules/Auth/widgets/FormRecovery'

export default function Recovery() {
    return (
      <Container>
        <FormContainer title="Recuperar Contraseña">
          <RecoveryForm />
        </FormContainer>
      </Container>
    )
  }