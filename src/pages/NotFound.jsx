import { Link } from 'react-router-dom';
import { Search, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 gradient-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 bg-white/20">
          <Search className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-white/90 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all shadow-xl hover:scale-105"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
