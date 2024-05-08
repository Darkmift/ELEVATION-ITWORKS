import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import './App.css';
import Layout from './Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          {/* redirect on not found */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
        <Route path="/foo" element={<main>foo</main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// /foo
