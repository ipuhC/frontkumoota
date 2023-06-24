'use client'

// import { signIn } from 'next-auth/react'
// import { useSearchParams, useRouter } from 'next/navigation'
// import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Divider, InputLabel, TextField } from '@mui/material'
import styles from '../styles/formlogin.module.css'
import  {useTranslation} from "react-i18next"

// import { useFormik } from 'formik'
// import * as Yup from 'yup'

export const RecoveryForm = () => {

  const { t } = useTranslation(['global'])
    return (
    <form className={styles.formLogin}>
      <InputLabel htmlFor="email">{t('global:inputlabel')}</InputLabel>
      <TextField
        id="email"
        type={'text'}
        fullWidth
        placeholder={t('global:placeholder')}
        label={t('global:placeholder')}
        className={styles.inputsText}
      />
      <Button
        variant="contained"
        className={styles.button}
        // endIcon={<LoginIcon />}
        type="submit"
      >
        {t('global:button')}
      </Button>
    </form>
  )}



