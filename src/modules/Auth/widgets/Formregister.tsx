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
import axios from 'axios'
import Email from 'next-auth/providers/email'

export const RegisterForm = () => {

  const { t } = useTranslation(['register'])

  const router = useRouter()
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Este campo es requerido'),

    firstname: Yup.string().required('Este campo es requerido'),

    lastname: Yup.string().required('Este campo es requerido'),

    email: Yup.string()
      .email('Introduzca un email válido')
      .required('Este campo es requerido'),
    password: Yup.string()
      .required('Este campo es requerido')
      .min(8, 'La contraseña debe contener mas de 4 caracteres'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'La contraseñas deben coincidir',
    ),
  })

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: registerSchema,
    // onSubmit: (values) => {
    //   // alert('pepep')
    //   alert(JSON.stringify(values, null, 2))
    // },
    onSubmit: async (values) => {
      try {
        // alert(JSON.stringify(values, null, 2))
        const response = await axios.post(
          'http://127.0.0.1:8000/api/register',
          {
            name: values.name,
            email: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            password: values.password,
            password_confirmation: values.password_confirmation,
          },
        )
        console.log('esta en el registro', response)
        // alert('correcto')
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
        console.log('intento el login', response)

        if (res?.error) {
          console.log(response)
          alert('error')
          console.log('error')
        }
        router.push('/')
      } catch (err) {
        // Handle Error Here
        alert('incorrecto')
        console.error(err)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formLogin}>
      <InputLabel htmlFor="email">{t('register:username')}</InputLabel>
      <TextField
        id="name"
        value={formik.values.name}
        type={'text'}
        fullWidth
        placeholder={t('register:usernameLabel')}
        // label="Introduzca su nombre"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <InputLabel htmlFor="email">{t('register:firstname')}</InputLabel>
      <TextField
        id="firstname"
        value={formik.values.firstname}
        type={'text'}
        fullWidth
        placeholder={t('register:firstnameLabel')}
        // label="Introduzca su nombre"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.touched.firstname && formik.errors.firstname}
      />
      <InputLabel htmlFor="email">{t('register:lastname')}</InputLabel>
      <TextField
        id="lastname"
        value={formik.values.lastname}
        type={'text'}
        fullWidth
        placeholder={t('register:lastnameLabel')}
        // label="Introduzca su nombre"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        helperText={formik.touched.lastname && formik.errors.lastname}
      />
      <InputLabel htmlFor="password">{t('register:email')}</InputLabel>
      <TextField
        id="email"
        value={formik.values.email}
        type={'text'}
        fullWidth
        placeholder={t('register:emailLabel')}
        // label="Introduzca su correo"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <InputLabel htmlFor="password">{t('register:password')}</InputLabel>
      <TextField
        id="password"
        value={formik.values.password}
        type={'password'}
        fullWidth
        placeholder={t('register:passwordLabel')}
        // label="Introduzca su contraseña"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <InputLabel htmlFor="password">
      {t('register:confirmPassword')}
      </InputLabel>
      <TextField
        id="password_confirmation"
        value={formik.values.password_confirmation}
        type={'password'}
        fullWidth
        placeholder={t('register:confirmPasswordLabel')}
        // label="Introduzca nuevamente su contraseña"
        className={styles.inputsText}
        onChange={formik.handleChange}
        error={
          formik.touched.password_confirmation &&
          Boolean(formik.errors.password_confirmation)
        }
        helperText={
          formik.touched.password_confirmation &&
          formik.errors.password_confirmation
        }
      />
      <Button
        variant="contained"
        className={styles.button}
        // endIcon={<LoginIcon />}
        type="submit"
      >
        {t('register:button')}
      </Button>
    </form>
  )
}
