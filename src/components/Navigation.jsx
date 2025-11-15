import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sparkles, Cpu } from 'lucide-react';
import { useState } from 'react';

const Navigation = ({ showSearch = false, onSearchSubmit }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearchSubmit) {
      onSearchSubmit(searchQuery);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/ai-search', label: 'AI Chat', icon: Sparkles },
    { path: '/about', label: 'About' },
    { path: '/api', label: 'API' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-cyber backdrop-blur-2xl border-b border-[#00d9ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00d9ff] to-[#0099cc] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold neon-text">RAID MOTOR</span>
          </Link>

          {showSearch && (
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search anything..."
                  className="w-full px-4 py-2 pr-10 rounded-full border-2 border-[#00d9ff]/30 focus:border-[#00d9ff] focus:outline-none bg-black/60 text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-[#00d9ff]/20 transition-colors"
                >
                  <Search className="w-5 h-5 text-[#00d9ff]" />
                </button>
              </div>
            </form>
          )}

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors flex items-center space-x-1 ${
                  location.pathname === link.path
                    ? 'text-[#00d9ff] neon-text'
                    : 'text-gray-300 hover:text-[#00d9ff]'
                }`}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                <span>{link.label}</span>
              </Link>
            ))}

          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#00d9ff]/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#00d9ff]/20 bg-black/95">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00d9ff]'
                    : 'text-gray-300 hover:text-[#00d9ff]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
