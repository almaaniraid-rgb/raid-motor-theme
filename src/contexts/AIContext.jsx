import { createContext, useContext, useState, useEffect } from 'react';
import { createOpenAIService } from '../services/openai';

const AIContext = createContext();

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within AIProvider');
  }
  return context;
};

export const AIProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('openai_api_key') || '';
  });

  const [service, setService] = useState(null);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    if (apiKey) {
      const newService = createOpenAIService(apiKey);
      setService(newService);
      setIsConfigured(true);
    } else {
      setService(null);
      setIsConfigured(false);
    }
  }, [apiKey]);

  const saveApiKey = (key) => {
    const trimmedKey = key.trim();
    setApiKey(trimmedKey);
    if (trimmedKey) {
      localStorage.setItem('openai_api_key', trimmedKey);
    } else {
      localStorage.removeItem('openai_api_key');
    }
  };

  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem('openai_api_key');
    setService(null);
    setIsConfigured(false);
  };

  return (
    <AIContext.Provider
      value={{
        apiKey,
        service,
        isConfigured,
        saveApiKey,
        clearApiKey
      }}
    >
      {children}
    </AIContext.Provider>
  );
};
