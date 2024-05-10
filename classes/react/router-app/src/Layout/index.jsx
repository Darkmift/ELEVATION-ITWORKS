import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
const routeMapper = {
  '/': 'Home',
  '/about': 'About',
  '/login': 'Login',
};

const Layout = () => {
  return (
    <>
      <nav className="app-nav">
        <div className="links">
          {Object.entries(routeMapper).map(([path, name]) => (
            <div key={path}>
              <Link to={path}>{name}</Link>
            </div>
          ))}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
