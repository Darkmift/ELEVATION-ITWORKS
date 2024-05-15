import './App.css';
import { useTranslation } from 'react-i18next';

// const locales = {
//   en: {
//     welcom: 'Hello World!',
//   },
//   he: {
//     welcom: 'שלום עולם!',
//   },
// };

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t('hello')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('he')}>עברית</button>
    </div>
  );
}

export default App;
