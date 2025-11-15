import { ExternalLink, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const SourceBadge = ({ source }) => {
  const colors = {
    Google: 'from-[#4285f4] to-[#34a853]',
    Bing: 'from-[#008373] to-[#00a885]',
    DuckDuckGo: 'from-[#de5833] to-[#ff6b35]',
    Wikipedia: 'from-gray-600 to-gray-700',
    'Google Scholar': 'from-[#4285f4] to-[#b24bf3]',
    default: 'from-[#00d9ff] to-[#0099cc]'
  };

  return (
    <span className={`bg-gradient-to-r ${colors[source] || colors.default} text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg`}>
      {source}
    </span>
  );
};

const ResultCard = ({ result, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="result-card-cyber group"
      onClick={() => window.open(result.url, '_blank')}
    >
      <div className="flex gap-4">
        {result.thumbnail && (
          <div className="hidden sm:block flex-shrink-0">
            <div className="relative">
              <img
                src={result.thumbnail}
                alt={result.title}
                className="w-28 h-28 object-cover rounded-xl border-2 border-[#00d9ff]/20 group-hover:border-[#00d9ff] transition-colors"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-3">
            <SourceBadge source={result.source} />
            {result.timestamp && (
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Clock className="w-3 h-3 text-[#ff6b35]" />
                <span>{result.timestamp}</span>
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d9ff] transition-colors line-clamp-2">
            {result.title}
          </h3>

          <p className="text-sm text-[#00d9ff] mb-3 truncate flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            {result.url}
          </p>

          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
            {result.snippet}
          </p>

          <div className="mt-4 flex items-center space-x-2 text-[#00d9ff] group-hover:text-[#ff6b35] transition-colors">
            <span className="text-sm font-bold">View Source</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#00d9ff] transition-colors pointer-events-none" />
    </motion.div>
  );
};

export default ResultCard;
