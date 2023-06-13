'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Divider, InputLabel, TextField } from '@mui/material'
import styles from '../styles/formlogin.module.css'

export const LoginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setFormValues({ email: '', password: '' })

      const res = await signIn('credentials', {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      })

      setLoading(false)
      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        setError('invalid email or password')
      }
    } catch (error: any) {
      setLoading(false)
      setError(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSignInGmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signIn('google')
  }

  return (
    <form onSubmit={onSubmit} className={styles.formLogin}>
      {error && <p>{error}</p>}
      <InputLabel htmlFor="correo">Correo</InputLabel>
      <TextField
        id="correo"
        value={formValues.email}
        type={'text'}
        fullWidth
        placeholder="Introduzca su correo"
        onChange={handleChange}
        label="Introduzca su correo"
        className={styles.inputsText}
      />
      <InputLabel htmlFor="contraseña">Contraseña</InputLabel>
      <TextField
        id="contraseña"
        value={formValues.password}
        type={'password'}
        fullWidth
        placeholder="Introduzca su contraseña"
        label="Introduzca su contraseña"
        onChange={handleChange}
        className={styles.inputsText}
      />
      <Button
        variant="contained"
        className={styles.button}
        // endIcon={<LoginIcon />}
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
