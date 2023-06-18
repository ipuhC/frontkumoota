'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Divider, InputLabel, TextField } from '@mui/material'
import styles from '../styles/formlogin.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RecoveryForm = () => {
    return (
    <form className={styles.formLogin}>
      <InputLabel htmlFor="email">Correo</InputLabel>
      <TextField
        id="email"
        type={'text'}
        fullWidth
        placeholder="Introduzca su correo"
        label="Introduzca su correo"
        className={styles.inputsText}
      />
      <Button
        variant="contained"
        className={styles.button}
        // endIcon={<LoginIcon />}
        type="submit"
      >
        Siguiente
      </Button>
    </form>
  )}



