import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import AIChat from '../components/AIChat';
import Footer from '../components/Footer';
import { useAI } from '../contexts/AIContext';
import { AlertCircle, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const AISearch = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q');
  const { service, isConfigured } = useAI();

  const handleNewSearch = (newQuery) => {
    navigate(`/ai-search?q=${encodeURIComponent(newQuery)}`);
  };

  if (!isConfigured || !service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation showSearch onSearchSubmit={handleNewSearch} />

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full card text-center"
          >
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              OpenAI API Key Required
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              To use AI Chat, you need to configure your OpenAI API key in settings.
            </p>

            <button
              onClick={() => navigate('/settings')}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Settings className="w-5 h-5" />
              <span>Go to Settings</span>
            </button>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-left">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
                How to get an API key:
              </p>
              <ol className="text-sm text-blue-800 dark:text-blue-400 space-y-1 list-decimal list-inside">
                <li>Go to platform.openai.com</li>
                <li>Create an account or sign in</li>
                <li>Navigate to API Keys section</li>
                <li>Create a new secret key</li>
                <li>Copy and paste it in Settings</li>
              </ol>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation showSearch onSearchSubmit={handleNewSearch} />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="h-[calc(100vh-12rem)]">
          <AIChat service={service} initialQuery={query} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AISearch;
