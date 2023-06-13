'use client'
import * as React from 'react'
import Navbar from './Navbar'
import styles from '../styles/container.module.css'
import { Box } from '@mui/material'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
    </>
  )
}
