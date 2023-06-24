'use client'
import * as React from 'react'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'
import {ConfirmPassword} from  'modules/Auth/widgets/FormConfirmPassword'

export default function Confirm() {
    return (
      <Container>
        <FormContainer title="Recuperar Contraseña">
          <ConfirmPassword />
        </FormContainer>
      </Container>
    )
  }