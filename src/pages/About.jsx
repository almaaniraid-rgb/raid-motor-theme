import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Cpu, Database, Shield, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "Comet AI Integration",
      description: "Advanced neural networks process your queries to understand context and intent, delivering precise answers."
    },
    {
      icon: Database,
      title: "Perplexity Technology",
      description: "Cutting-edge information retrieval algorithms ensure you get the most relevant and up-to-date results."
    },
    {
      icon: Search,
      title: "Multi-Engine Aggregation",
      description: "Simultaneously searches across Google, Bing, DuckDuckGo, and 10+ more engines for comprehensive coverage."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "You Ask",
      description: "Type your question or search query in natural language"
    },
    {
      number: "02",
      title: "AI Analyzes",
      description: "Our AI processes your query across 10+ search engines and sources"
    },
    {
      number: "03",
      title: "Get Answers",
      description: "Receive verified answers with AI summaries and source citations"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="gradient-bg py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About RAID MOTOR
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            We're revolutionizing how people discover information online by combining
            artificial intelligence with multi-source search technology.
          </p>
        </motion.div>
      </div>

      <div className="bg-bg-light dark:bg-bg-dark py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              RAID MOTOR combines state-of-the-art AI with powerful search aggregation
              to deliver accurate, comprehensive answers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {tech.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="card h-full">
                    <div className="text-6xl font-bold gradient-text mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="card text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              "To democratize access to information by building the most intelligent,
              trustworthy, and user-friendly search experience. We believe everyone deserves
              instant access to verified, comprehensive answers backed by transparent sources."
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
