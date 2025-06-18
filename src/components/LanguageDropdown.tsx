import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'fr', label: '🇫🇷 Français' }
  ];

  return (
    <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
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
