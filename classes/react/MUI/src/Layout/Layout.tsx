import { Box, Container, Drawer, Typography } from '@mui/material'
import AppNavBar from './AppNavBar'
import { useState } from 'react'

type Props = { children: React.ReactNode }

const AppDrawer = ({
  open,
  toggleDrawer,
}: {
  open: boolean
  toggleDrawer: () => void
}) => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
      open={open}
      onClose={toggleDrawer}
    >
      <Box
        sx={{
          margin: '75px 10px',
        }}
      >
        <Typography>Drawer content</Typography>
      </Box>
    </Drawer>
  )
}

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => {
    setOpen(v => !v)
  }
  return (
    <>
      <AppNavBar toggleDrawer={toggleDrawer} />
      <Container sx={{ marginTop: '65px' }}>
        <AppDrawer open={open} toggleDrawer={toggleDrawer} />
        {children}
      </Container>
    </>
  )
}
