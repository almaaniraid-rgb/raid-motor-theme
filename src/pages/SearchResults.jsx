import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AISummaryCard from '../components/AISummaryCard';
import ResultCard from '../components/ResultCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Footer from '../components/Footer';
import CircuitBackground from '../components/CircuitBackground';
import { useSearch } from '../contexts/SearchContext';
import { searchAPI } from '../utils/api';
import { Filter, Clock, Shield, Loader2, Zap } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q');
  const { addToHistory, settings } = useSearch();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [filters, setFilters] = useState({
    timeRange: 'any',
    safeSearch: settings.safeSearch
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query, filters]);

  const performSearch = async () => {
    setLoading(true);
    setError(null);
    setResults(null);
    addToHistory(query);

    const response = await searchAPI(query, {
      ...filters,
      category: activeTab
    });

    if (response.success) {
      setResults(response.data);
    } else {
      setError(response.error || 'Failed to fetch results');
    }

    setLoading(false);
  };

  const handleNewSearch = (newQuery) => {
    navigate(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  const tabs = [
    { id: 'all', label: 'All', icon: Zap },
    { id: 'images', label: 'Images' },
    { id: 'videos', label: 'Videos' },
    { id: 'news', label: 'News' },
    { id: 'academic', label: 'Academic' },
    { id: 'shopping', label: 'Shopping' }
  ];

  const timeRanges = [
    { value: 'any', label: 'Any time' },
    { value: 'hour', label: 'Past hour' },
    { value: 'day', label: 'Past 24 hours' },
    { value: 'week', label: 'Past week' },
    { value: 'month', label: 'Past month' },
    { value: 'year', label: 'Past year' }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <CircuitBackground />
      <div className="tech-grid fixed inset-0 z-0" />

      <div className="relative z-10">
        <Navigation showSearch onSearchSubmit={handleNewSearch} />

        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Search results for <span className="gradient-text-cyber">"{query}"</span>
            </h1>
            {results && (
              <p className="text-sm text-gray-400">
                Found {results.results?.length || 0} results
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#00d9ff] to-[#0099cc] text-black shadow-lg shadow-[#00d9ff]/30'
                    : 'bg-black/60 border border-[#00d9ff]/30 text-gray-300 hover:border-[#00d9ff] hover:text-white'
                }`}
              >
                {tab.icon && <tab.icon className="w-4 h-4" />}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              {loading ? (
                <LoadingSkeleton />
              ) : error ? (
                <div className="text-center py-12 card-cyber">
                  <Loader2 className="w-12 h-12 text-[#ff6b35] mx-auto mb-4 animate-spin" />
                  <p className="text-lg font-semibold text-white mb-2">Nessun risultato trovato</p>
                  <p className="text-sm text-gray-400">{error}</p>
                </div>
              ) : results ? (
                <>
                  {results.aiSummary && (
                    <AISummaryCard
                      summary={results.aiSummary.text}
                      sources={results.aiSummary.sources}
                    />
                  )}

                  <div className="space-y-4">
                    {results.results?.length > 0 ? (
                      results.results.map((result, index) => (
                        <ResultCard key={result.id} result={result} index={index} />
                      ))
                    ) : (
                      <div className="text-center py-12 card-cyber">
                        <p className="text-lg font-semibold text-white">Nessun risultato trovato</p>
                      </div>
                    )}
                  </div>

                  {results.results?.length > 0 && (
                    <div className="mt-8 text-center">
                      <button className="btn-cyber">
                        Load More Results
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12 card-cyber">
                  <p className="text-lg font-semibold text-white">Nessun risultato trovato</p>
                </div>
              )}
            </div>

            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-4">
                <div className="card-cyber">
                  <h3 className="font-bold text-white mb-4 flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-[#00d9ff]" />
                    <span>Filters</span>
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-300 mb-2">
                        <Clock className="w-4 h-4 text-[#ff6b35]" />
                        <span>Time Range</span>
                      </label>
                      <select
                        value={filters.timeRange}
                        onChange={(e) => setFilters({ ...filters, timeRange: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-[#00d9ff]/30 bg-black/60 text-white focus:outline-none focus:border-[#00d9ff]"
                      >
                        {timeRanges.map(range => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={filters.safeSearch}
                          onChange={(e) => setFilters({ ...filters, safeSearch: e.target.checked })}
                          className="rounded border-[#00d9ff]/30 text-[#00d9ff] focus:ring-[#00d9ff]"
                        />
                        <span className="text-sm text-gray-300 flex items-center space-x-1">
                          <Shield className="w-4 h-4 text-[#b24bf3]" />
                          <span>Safe Search</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card-cyber">
                  <h3 className="font-bold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-[#ff6b35] mr-2" />
                    Search Tips
                  </h3>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      Use quotes for exact phrases
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      Add - to exclude words
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      Use OR for alternatives
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      Try related keywords
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SearchResults;
