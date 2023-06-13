'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import { Box, Grid, InputLabel, TextField, Typography } from '@mui/material'
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

      console.log(res)
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
    console.log(value)
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSignInGmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signIn('google')
  }

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      {/* <div className="mb-6">
          <input
            required
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Correo"
          />
        </div> */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12}>
          <InputLabel htmlFor="correo">Correo</InputLabel>

          <TextField
            id="correo"
            value={formValues.email}
            type={'text'}
            placeholder="Introduzca su correo"
            onChange={handleChange}
            label="Introduzca su correo"
            className={styles.inputsText}
          />
        </Grid>
        {/* <div className="mb-6">
          <input
            required
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Contraseña"
          />
        </div> */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-start ">
            <InputLabel htmlFor="contraseña">Contraseña</InputLabel>
          </Box>
          <TextField
            id="contraseña"
            value={formValues.password}
            type={'password'}
            placeholder="Introduzca su contraseña"
            label="Introduzca su contraseña"
            onChange={handleChange}
            className={styles.inputsText}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" endIcon={<LoginIcon />}>
            Iniciar Sesión
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#da4747' }}
            onClick={handleSignInGmail}
            role="button"
          >
            Iniciar Sesión con Gmail
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
