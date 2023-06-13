'use client'
import * as React from 'react'
import { Box, Typography } from '@mui/material'
import styles from '../styles/formContainer.module.css'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function FormContainer({ children, title }: Props) {
  return (
    <Box className={styles.formContainer}>
      {title ? (
        <Typography variant="h6" component="h3" align="center" sx={{ mb: 2 }}>
          {title}
        </Typography>
      ) : null}
      <Box>{children}</Box>
    </Box>
  )
}
