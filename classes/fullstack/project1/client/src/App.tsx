
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login';
import Build from './pages/Build';
import Layout from './pages/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute redirectPath='/login' />}>
            <Route path="/" index element={<Home />}/>
            <Route index path="/home" element={<Home />}/>
            <Route path="/home/:id" index element={<Build />}/>
          </ Route>
        </ Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
