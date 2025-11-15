import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';
import { useSearch } from '../contexts/SearchContext';
import { useAI } from '../contexts/AIContext';
import { Sun, Moon, Shield, Globe, Trash2, Save, Key, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { settings, updateSettings, clearHistory } = useSearch();
  const { apiKey, saveApiKey, clearApiKey } = useAI();
  const [localSettings, setLocalSettings] = useState(settings);
  const [saved, setSaved] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(apiKey || '');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSave = () => {
    updateSettings(localSettings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your search history?')) {
      clearHistory();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Settings
          </h1>

          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
                <Key className="w-5 h-5" />
                <span>OpenAI API Configuration</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    OpenAI API Key
                  </label>
                  <div className="relative">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      value={apiKeyInput}
                      onChange={(e) => setApiKeyInput(e.target.value)}
                      placeholder="sk-...."
                      className="w-full px-4 py-3 pr-24 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary font-mono text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    >
                      {showApiKey ? (
                        <EyeOff className="w-4 h-4 text-gray-500" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">platform.openai.com</a>
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      saveApiKey(apiKeyInput);
                      setSaved(true);
                      setTimeout(() => setSaved(false), 3000);
                    }}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save API Key</span>
                  </button>
                  {apiKey && (
                    <button
                      onClick={() => {
                        clearApiKey();
                        setApiKeyInput('');
                      }}
                      className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Note:</strong> Your API key is stored locally in your browser and never sent to our servers. It's only used to communicate directly with OpenAI.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
                <Sun className="w-5 h-5" />
                <span>Appearance</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Theme
                  </label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        theme === 'light'
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <Sun className="w-6 h-6 mx-auto mb-2" />
                      <span className="block text-sm font-medium">Light</span>
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        theme === 'dark'
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <Moon className="w-6 h-6 mx-auto mb-2" />
                      <span className="block text-sm font-medium">Dark</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Search Preferences</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Results Per Page
                  </label>
                  <select
                    value={localSettings.resultsPerPage}
                    onChange={(e) => setLocalSettings({ ...localSettings, resultsPerPage: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary"
                  >
                    <option value={10}>10 results</option>
                    <option value={20}>20 results</option>
                    <option value={50}>50 results</option>
                    <option value={100}>100 results</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Language
                  </label>
                  <select
                    value={localSettings.language}
                    onChange={(e) => setLocalSettings({ ...localSettings, language: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                    <option value="zh">Chinese</option>
                    <option value="ja">Japanese</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Privacy & Security</span>
              </h2>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Safe Search</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Filter explicit content from search results
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={localSettings.safeSearch}
                    onChange={(e) => setLocalSettings({ ...localSettings, safeSearch: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Search History</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Save your search queries locally
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={localSettings.searchHistory}
                    onChange={(e) => setLocalSettings({ ...localSettings, searchHistory: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Analytics</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Help us improve by sharing anonymous usage data
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={localSettings.analytics}
                    onChange={(e) => setLocalSettings({ ...localSettings, analytics: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </label>

                <button
                  onClick={handleClearHistory}
                  className="w-full flex items-center justify-center space-x-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="font-medium">Clear Search History</span>
                </button>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSave}
                className="btn-primary flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>

            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg text-center font-medium"
              >
                Settings saved successfully!
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
