import { useState, useEffect } from 'react';
import { Search, Mic, Zap } from 'lucide-react';

const SearchBar = ({ onSearch, placeholder = "Search the infinite web with AI...", autoFocus = false }) => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();

      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        setQuery(transcript);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const toggleVoiceSearch = () => {
    if (!recognition) {
      alert('Voice search is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setQuery('');
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative flex items-center pulse-glow">
          <Search className="absolute left-8 w-7 h-7 text-[#00d9ff] z-10" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="search-input-cyber w-full pl-20 pr-48"
          />
          <div className="absolute right-4 flex items-center space-x-3 z-10">
            <button
              type="button"
              onClick={toggleVoiceSearch}
              className={`p-3 rounded-xl transition-all ${
                isListening
                  ? 'bg-gradient-to-r from-[#ff6b35] to-[#ff8555] animate-pulse'
                  : 'bg-black/60 border border-[#ff6b35]/30 hover:border-[#ff6b35] hover:bg-black/80'
              }`}
              title={isListening ? 'Stop recording' : 'Voice search'}
            >
              <Mic className={`w-6 h-6 ${
                isListening
                  ? 'text-black'
                  : 'text-[#ff6b35]'
              }`} />
            </button>
            <button
              type="submit"
              className="btn-cyber flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-[#00d9ff] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
      </form>

      {isListening && (
        <div className="mt-6 text-center animate-fade-in">
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-black/80 border border-[#ff6b35]">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-[#ff6b35] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="w-1 h-6 bg-[#ff6b35] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-1 h-4 bg-[#ff6b35] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-[#ff6b35] font-semibold">Listening...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
