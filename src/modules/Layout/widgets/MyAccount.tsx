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
import  {useTranslation} from "react-i18next"


const { URL_LOGIN } = SERVER_URLS

function MyAccount() {
  const { t } = useTranslation(['navBar'])
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
              <Typography textAlign="center">{t('navBar:profile')}</Typography>
            </MenuItem>
            <MenuItem onClick={() => signOut()}>
              <Typography textAlign="center">{t('navBar:signOff')}</Typography>
            </MenuItem>
            <MenuItem>{session.user.name}</MenuItem>
          </Menu>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: '20px',
            }}
          >
            <Link href={URL_LOGIN}>{t('navBar:login')}</Link>
            <Link href="/register">{t('navBar:register')}</Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
              gap: '20px',
              flexDirection: 'column',
            }}
          >
            <Link href={URL_LOGIN}>{t('navBar:login')}</Link>
            <Link href="/register">{t('navBar:register')}</Link>
          </Box>
        </>
      )}
    </>
  )
}

export default MyAccount
