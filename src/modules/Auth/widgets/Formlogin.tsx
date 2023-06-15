'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Divider, InputLabel, TextField } from '@mui/material'
import styles from '../styles/formlogin.module.css'

import { useFormik } from 'formik'
import * as yup from 'yup'

export const LoginForm = () => {
  const handleSignInGmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signIn('google')
  }
  // let userSchema = yup.object({
  //   name: yup.string().required(),

  //   email: yup.string().email(),

  // });

  // formulario
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema: userSchema,
    onSubmit: (values) => {
      // alert('pepep')
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formLogin}>
      <InputLabel htmlFor="email">Correo</InputLabel>
      <TextField
        id="email"
        value={formik.values.email}
        type={'text'}
        fullWidth
        placeholder="Introduzca su correo"
        label="Introduzca su correo"
        className={styles.inputsText}
        onChange={formik.handleChange}
      />
      <InputLabel htmlFor="password">Contraseña</InputLabel>
      <TextField
        id="password"
        value={formik.values.password}
        type={'password'}
        fullWidth
        placeholder="Introduzca su contraseña"
        label="Introduzca su contraseña"
        className={styles.inputsText}
        onChange={formik.handleChange}
      />
      <Button
        variant="contained"
        className={styles.button}
        // endIcon={<LoginIcon />}
        type="submit"
      >
        Iniciar Sesión
      </Button>
      <Divider />
      <Button
        variant="outlined"
        onClick={handleSignInGmail}
        role="button"
        className={`${styles.button} ${styles.googleButton}`}
        startIcon={
          <img
            className={styles.googleIcon}
            src="img/assets/icons/google.svg"
          />
        }
      >
        Iniciar Sesión con Gmail
      </Button>
    </form>
  )
}
