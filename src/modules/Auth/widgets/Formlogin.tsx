'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Divider, InputLabel, TextField } from '@mui/material'
import styles from '../styles/formlogin.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginForm = () => {
  const handleSignInGmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signIn('google')
  }
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('This field is required'),
    password: Yup.string()
      .required('This field is required')
      .min(8, 'Pasword must be 8 or more characters')
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        'Password ahould contain at least one uppercase and lowercase character',
      )
      .matches(/\d/, 'Password should contain at least one number')
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        'Password should contain at least one special character',
      ),
  })
  // formulario
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateSchema,
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
      <a href="#" className={styles.passwordLink}>
        Recuperar Contraseña
      </a>
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
