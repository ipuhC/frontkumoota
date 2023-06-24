'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Divider, InputLabel, TextField } from '@mui/material'
import styles from '../styles/formlogin.module.css'
import  {useTranslation} from "react-i18next"


import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ConfirmPassword = () => {
  const { t } = useTranslation(['register,recovery'])

    return (
    <form className={styles.formLogin}>
       <InputLabel htmlFor="password">{t('register:password')}</InputLabel>
      <TextField
        id="password"
        type={'password'}
        fullWidth
        placeholder={t('register:passwordLabel')}
        // label="Introduzca su contraseña"
        className={styles.inputsText}
        // onChange={formik.handleChange}
      />
      <InputLabel htmlFor="password">
      {t('register:confirmPassword')}
      </InputLabel>
      <TextField
        id="password_confirmation"
        type={'password'}
        fullWidth
        placeholder={t('register:confirmPasswordLabel')}
        // label="Introduzca nuevamente su contraseña"
        className={styles.inputsText}
      />
      <Button
        variant="contained"
        className={styles.button}
        // endIcon={<LoginIcon />}
        type="submit"
      >
        {t('recovery:nextButton')}
      </Button>
    </form>
  )}



