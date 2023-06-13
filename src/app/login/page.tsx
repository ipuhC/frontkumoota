'use client'
import * as React from 'react'
import { LoginForm } from '../../modules/Auth/widgets/Formlogin'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import Container from 'modules/Layout/widgets/Container'

export default function Login() {
  return (
    <Container>
      <Card variant="outlined" sx={{ padding: 5 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" component="div">
              Iniciar Sesión
            </Typography>
          </Box>

          <LoginForm></LoginForm>
        </CardContent>
      </Card>
    </Container>
  )
}
