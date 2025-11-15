import { Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const AISummaryCard = ({ summary, sources }) => {
  if (!summary) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-6"
    >
      <div className="flex items-start space-x-3 mb-4">
        <div className="p-2 gradient-bg rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            AI-Generated Summary
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Powered by Comet AI & Perplexity Technology
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-4">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {summary}
        </p>
      </div>

      {sources && sources.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Sources:
          </p>
          <div className="flex flex-wrap gap-2">
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <span>[{index + 1}] {source.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AISummaryCard;
