import { Box, IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useContext } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../Theme'

export default function ToggleTheme() {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const Icon = theme.palette.mode === 'dark' ? Brightness7Icon : Brightness4Icon

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2">
        {theme.palette.mode.toLocaleUpperCase()}
      </Typography>
      <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
        <Icon />
      </IconButton>
    </Box>
  )
}
