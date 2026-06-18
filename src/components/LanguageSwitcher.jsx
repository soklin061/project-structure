import { useState } from 'react';
import ColorSelect from './ui/Search';
import { getCurrentLanguage, acceptLanguage } from '../../src/utils/acceptLanguage';

function LanguageSwitcher() {
  const languageOptions = [
    { value: 'en', label: '🇺🇸 English' },
    { value: 'km', label: '🇰🇭 ភាសាខ្មែរ' },
  ];

  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

  const selectedLang = languageOptions.find(
    (item) => item.value === currentLang
  );

  const handleChange = (selected) => {
    const lang = selected.value;

    setCurrentLang(lang);
    acceptLanguage(lang);
  };

  return (
    <div className="w-48">
      <ColorSelect
        options={languageOptions}
        value={selectedLang}
        onChange={handleChange}
        placeholder="Language"
      />
    </div>
  );
}

export default LanguageSwitcher;