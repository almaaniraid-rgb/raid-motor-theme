import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';
import { AIProvider } from './contexts/AIContext';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import AISearch from './pages/AISearch';
import About from './pages/About';
import Settings from './pages/Settings';
import API from './pages/API';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <AIProvider>
        <SearchProvider>
          <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/ai-search" element={<AISearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/api" element={<API />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Router>
        </SearchProvider>
      </AIProvider>
    </ThemeProvider>
  );
}

export default App;
