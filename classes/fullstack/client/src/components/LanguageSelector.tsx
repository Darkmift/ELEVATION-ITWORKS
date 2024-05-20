import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-darkText bg-white dark:bg-darkCard rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          <FaGlobe className="mr-2" />
          {i18n.language === 'en' ? 'English' : 'Русский'}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-darkCard ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => changeLanguage('en')}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-darkText hover:bg-gray-200 dark:hover:bg-gray-600"
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-darkText hover:bg-gray-200 dark:hover:bg-gray-600"
              role="menuitem"
            >
              Русский
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
