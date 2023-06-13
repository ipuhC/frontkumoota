'use client'
import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import { LoginForm } from './Formlogin'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import styles from './Formlogin.module.css'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        className={styles.contenedor}
      >
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
      </Grid>
    </React.Fragment>
  )
}
