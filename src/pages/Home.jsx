import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import CircuitBackground from '../components/CircuitBackground';
import { Brain, Cpu, Zap, Network, Globe, Shield, Sparkles, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearch } from '../contexts/SearchContext';

const Home = () => {
  const navigate = useNavigate();
  const { addToHistory } = useSearch();

  const handleSearch = (query) => {
    addToHistory(query);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced neural networks analyze and understand your queries with human-like comprehension"
    },
    {
      icon: Network,
      title: "Multi-Engine Search",
      description: "Simultaneously searches across 10+ search engines for the most comprehensive results"
    },
    {
      icon: Zap,
      title: "Real-Time Results",
      description: "Lightning-fast processing with instant AI-generated summaries and insights"
    },
    {
      icon: Database,
      title: "Smart Aggregation",
      description: "Intelligent data fusion combines results from multiple sources with accuracy verification"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <CircuitBackground />

      <div className="tech-grid fixed inset-0 z-0" />

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative"
              >
                <Cpu className="w-16 h-16 text-[#00d9ff] neon-glow" />
                <div className="absolute inset-0 animate-ping">
                  <Cpu className="w-16 h-16 text-[#b24bf3] opacity-30" />
                </div>
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-4">
              <span className="neon-text tracking-tight">RAID</span>
              <span className="text-white tracking-tight"> MOTOR</span>
            </h1>

            <p className="text-2xl md:text-3xl gradient-text-cyber font-bold mb-3">
              AI-Powered Search Engine
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the future of search with neural-powered intelligence and multi-source aggregation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <SearchBar onSearch={handleSearch} autoFocus />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 text-sm"
          >
            <span className="text-gray-500">Popular searches:</span>
            {['AI technology', 'Quantum computing', 'Neural networks', 'Machine learning'].map((term, i) => (
              <button
                key={i}
                onClick={() => handleSearch(term)}
                className="px-4 py-1 rounded-full bg-black/40 border border-[#00d9ff]/30 text-[#00d9ff] hover:border-[#00d9ff] hover:bg-black/60 transition-all"
              >
                {term}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-black/50 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text-cyber">Next-Generation</span>
              <span className="text-white"> Search Technology</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powered by advanced AI algorithms and distributed computing architecture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="card-cyber text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d9ff] to-[#0099cc] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-black" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-[#00d9ff] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="card-cyber"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#ff6b35] mr-2" />
              <h3 className="text-2xl font-bold text-white">Powered by Advanced AI</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Our cutting-edge neural network architecture delivers unprecedented accuracy and speed in search results
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 rounded-lg bg-black/60 border border-[#00d9ff]/30 text-[#00d9ff]">
                <Globe className="w-4 h-4 inline mr-2" />
                10+ Search Engines
              </div>
              <div className="px-4 py-2 rounded-lg bg-black/60 border border-[#b24bf3]/30 text-[#b24bf3]">
                <Brain className="w-4 h-4 inline mr-2" />
                AI-Powered Analysis
              </div>
              <div className="px-4 py-2 rounded-lg bg-black/60 border border-[#ff6b35]/30 text-[#ff6b35]">
                <Shield className="w-4 h-4 inline mr-2" />
                Verified Sources
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
