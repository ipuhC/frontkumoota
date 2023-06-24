'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Divider, InputLabel, TextField } from '@mui/material'
import styles from '../styles/formlogin.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ConfirmPassword = () => {
    return (
    <form className={styles.formLogin}>
       <InputLabel htmlFor="password">Contraseña</InputLabel>
      <TextField
        id="password"
        type={'password'}
        fullWidth
        placeholder="Introduzca su contraseña"
        // label="Introduzca su contraseña"
        className={styles.inputsText}
        // onChange={formik.handleChange}
      />
      <InputLabel htmlFor="password">
        Introduzca nuevamente su contraseña
      </InputLabel>
      <TextField
        id="password_confirmation"
        type={'password'}
        fullWidth
        placeholder="Introduzca nuevamente su contraseña"
        // label="Introduzca nuevamente su contraseña"
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



