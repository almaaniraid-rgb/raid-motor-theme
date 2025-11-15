import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : {
      safeSearch: true,
      resultsPerPage: 10,
      language: 'en',
      searchHistory: true,
      analytics: true
    };
  });

  const addToHistory = (query) => {
    if (!settings.searchHistory || !query.trim()) return;

    const newHistory = [
      { query: query.trim(), timestamp: Date.now() },
      ...searchHistory.filter(item => item.query !== query.trim())
    ].slice(0, 50);

    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const updateSettings = (newSettings) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('settings', JSON.stringify(updated));
  };

  return (
    <SearchContext.Provider value={{
      searchHistory,
      addToHistory,
      clearHistory,
      settings,
      updateSettings
    }}>
      {children}
    </SearchContext.Provider>
  );
};
