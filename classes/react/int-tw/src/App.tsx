import './App.css';
import { useTranslation } from 'react-i18next';
import { useScopedTranslation } from './hooks/useScopedTranslation';

const locales = {
  en: {
    welcome: 'Hello World!',
  },
  he: {
    welcome: 'שלום עולם!',
  },
};

function App() {
  const { t, i18n } = useTranslation('translation', {
    keyPrefix: 'App',
  });

  const { t: scopedt } = useScopedTranslation({ defaultLanguage: i18n.language, locales });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t('hello')}</h1>
      <h1>{scopedt('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('he')}>עברית</button>
    </div>
  );
}

export default App;
