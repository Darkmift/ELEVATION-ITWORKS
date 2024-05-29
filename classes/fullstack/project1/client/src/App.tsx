import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login';
import Build from './pages/Build';
import Layout from './pages/Layout';
import './App.css';
import { useAppDispatch } from './store/hooks';
import { fetchBuildsPaginatedThunk } from './store/thunks/builds';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getPagintedBuilds(1, 10, 'asc');
    dispatch(fetchBuildsPaginatedThunk({ page: 1, limit: 10, sort: 'buildId' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute redirectPath="/login" />}>
            <Route path="/" index element={<Home />} />
            <Route index path="/home" element={<Home />} />
            <Route path="/home/:id" index element={<Build />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
