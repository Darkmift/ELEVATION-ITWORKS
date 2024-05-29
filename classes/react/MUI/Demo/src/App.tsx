import Home from './pages/Home'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeProviderWrapper from './Theme'
import Layout from './Layout/Layout'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <ThemeProviderWrapper>
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProviderWrapper>
    </>
  )
}

export default App
