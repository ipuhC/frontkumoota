'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { useSession, signOut, signIn } from 'next-auth/react'
import Link from 'next/link'
import { SERVER_URLS } from 'config/serverUrls'

const { URL_LOGIN } = SERVER_URLS

function MyAccount() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )
  const { data: session, status } = useSession()

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signIn('google')
  }

  return (
    <>
      {session?.user ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={session.user.name ?? 'Profile image'}
                src={session.user.image ?? '/imagen.webp'}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Mi perfil</Typography>
            </MenuItem>
            <MenuItem onClick={() => signOut()}>
              <Typography textAlign="center">Cerrar sesión</Typography>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Link href={URL_LOGIN}>Iniciar sesión</Link>
      )}
    </>
  )
}

export default MyAccount
