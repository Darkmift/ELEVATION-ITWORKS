import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { useAppDispatch, useAppSelector } from '../store';
import { logout } from '../store/slices/auth';

const Navbar: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const adminUserName = useAppSelector((state) => state.auth.admin.username);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <nav className="bg-blue-600 dark:bg-darkCard text-white p-4 flex justify-between items-center">
      <div className="space-x-4">
        <span>Hello {adminUserName}</span>
        <Link to="/view-users" className="hover:underline">
          {t('navbar.viewUsers')}
        </Link>
        <Link to="/create-user" className="hover:underline">
          {t('navbar.createUser')}
        </Link>
      </div>
      {isAuthenticated && (
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <button onClick={() => dispatch(logout())} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
