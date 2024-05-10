/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
// import RouteGuard from './components/RouteGuard';
import AuthProvider from './context';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<RouteGuard element={<Home />} />} /> */}
          {/* <Route path="/" element={<RouteGuard element={<Layout />} />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Route> */}

          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
/*
<ContextProviderA>
  <Foo /> can use context A not B,C 
  <ContextProviderB>
    <Bar />  can use context A,B not C
    <ContextProviderC>
      <App /> can use all 
    </ContextProviderC>
  </ContextProviderB>
</ContextProviderA>
*/
