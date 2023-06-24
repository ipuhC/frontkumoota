'use client'
import * as React from 'react'
import { RegisterForm } from 'modules/Auth/widgets/Formregister'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'
import  {useTranslation} from "react-i18next"

export default function register() {
  const { t } = useTranslation(['register'])
  return (
    <Container>
      <FormContainer title={t('register:title')}>
        <RegisterForm />
      </FormContainer>
    </Container>
  )
}
