import { ThemeProvider, createTheme } from '@mui/material'
import { createContext, useMemo, useState } from 'react'

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
