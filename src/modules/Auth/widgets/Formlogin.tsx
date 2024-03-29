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
  const [error, setError] = useState(null)
  const router = useRouter()
  const handleSignInGmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signIn('google')
  }
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email('Introduzca un email válido')
      .required('Este campo es requerido'),
    password: Yup.string()
      .required('Este campo es requerido')
      .min(8, 'La contraseña debe contener mas de 4 caracteres'),
    // .matches(
    //   /(?=.*[a-z])(?=.*[A-Z])\w+/,
    //   'Password ahould contain at least one uppercase and lowercase character',
    // )
    // .matches(/\d/, 'Password should contain at least one number')
    // .matches(
    //   /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
    //   'Password should contain at least one special character',
    // ),
  })
  // formulario
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('error')
      const email = values.email
      const password = values.password
      const res = await signIn('credentials', {
        email,
        password,
        // The page where I want to redirect to after a
        // successful login
        callbackUrl: `/`,
        redirect: false,
      })

      // if (res.url) router.push(res.url)
      // if (res?.error) handleError(res.error)
      // alert(JSON.stringify(values, null, 2))
      if (res?.error) {
        alert('error')
        console.log('error')
        setError(res.error)
      } else {
        setError(null)
      }
      if (res.url) router.push(res.url)
      setSubmitting(false)
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
        // label="Introduzca su correo"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <InputLabel htmlFor="password">Contraseña</InputLabel>
      <TextField
        id="password"
        value={formik.values.password}
        type={'password'}
        fullWidth
        placeholder="Introduzca su contraseña"
        // label="Introduzca su contraseña"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
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
