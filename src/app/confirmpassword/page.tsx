'use client'
import * as React from 'react'
import Container from 'modules/Layout/widgets/Container'
import FormContainer from 'modules/Layout/widgets/FormContainer'
import {ConfirmPassword} from  'modules/Auth/widgets/FormConfirmPassword'
import  {useTranslation} from "react-i18next"


export default function Confirm() {
  const { t } = useTranslation(['register,recovery'])

    return (
      <Container>
        <FormContainer title={t('recovery:title')}>
          <ConfirmPassword />
        </FormContainer>
      </Container>
    )
  }