import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import ToggleTheme from '../components/ToggleTheme'

const pages = ['Products', 'Pricing', 'Blog']

type Props = {
  toggleDrawer: () => void
}

export default function AppNavBar({ toggleDrawer }: Props) {
  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* logo */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          APP
        </Typography>
        {/* navlinks */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map(page => (
            <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
              {page}
            </Button>
          ))}
        </Box>
        {/* toggle theme */}
        <ToggleTheme />
        {/* avatar */}
        <IconButton
          sx={{ p: 0 }}
          onClick={() => {
            toggleDrawer()
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://cloud.24ways.org/authors/remysharp280.jpg"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
