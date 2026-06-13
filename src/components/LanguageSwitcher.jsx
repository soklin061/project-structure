import React from 'react';

function LanguageSwitcher() {
  const currentLang = localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem('language', selectedLanguage);
    window.location.reload();
  };

  return (
    <div className="language-switcher" style={{ padding: '10px' }}>
      <label htmlFor="lang-select" style={{ marginRight: '8px', fontWeight: 'bold' }}>
        Language: 
      </label>
      <select 
        id="lang-select" 
        value={currentLang} 
        onChange={handleLanguageChange}
        style={{ padding: '5px', borderRadius: '4px', cursor: 'pointer' }}
      >
        <option value="en">English (EN)</option>
        <option value="km">ភាសាខ្មែរ (KM)</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;