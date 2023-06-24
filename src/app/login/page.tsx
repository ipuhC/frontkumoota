'use client'
import * as React from 'react'
import { LoginForm } from 'modules/Auth/widgets/Formlogin'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'
import  {useTranslation} from "react-i18next"

export default function Login() {
  const { t } = useTranslation(['global'])
  return (
    <Container>
      <FormContainer title={t('global:loginTitle')}>
        <LoginForm />
      </FormContainer>
    </Container>
  )
}
