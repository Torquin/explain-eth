import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');

    if (!savedLang) {
        const browserLang = navigator.language.split('-')[0]; // e.g., 'fr-FR' → 'fr'
        const supportedLang = languages.find((lang) => lang.code === browserLang);

        if (supportedLang) {
            i18n.changeLanguage(browserLang);
            setSelectedLang(browserLang);
        }
    } else {
        const browserLang = navigator.language.split('-')[0]; // e.g., 'fr-FR' → 'fr'
        setSelectedLang(browserLang);
    }
  }, [i18n]);


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    setSelectedLang(lang);
  };

  return (
    <select
        value={selectedLang}
        onChange={handleChange}
        className="border px-3 py-1 rounded shadow bg-white dark:bg-gray-800 dark:text-white"
    >
    {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
        {lang.label}
        </option>
    ))}
    </select>

  );
};

export default LanguageDropdown;
