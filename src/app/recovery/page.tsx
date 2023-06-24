'use client'
import * as React from 'react'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'
import {RecoveryForm} from  'modules/Auth/widgets/FormRecovery'
import  {useTranslation} from "react-i18next"

export default function Recovery() {
  const { t } = useTranslation(['recovery'])
    return (
      <Container>
        <FormContainer title={t('recovery:title')}>
          <RecoveryForm />
        </FormContainer>
      </Container>
    )
  }