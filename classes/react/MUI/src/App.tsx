import Home from './pages/home'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeProviderWrapper from './Theme'
import Layout from './Layout/Layout'

function App() {
  return (
    <>
      <ThemeProviderWrapper>
        <CssBaseline enableColorScheme />
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </ThemeProviderWrapper>
    </>
  )
}

export default App
