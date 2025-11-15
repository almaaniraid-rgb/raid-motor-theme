import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-[#00d9ff]/20 mt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00d9ff] to-[#0099cc] rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold neon-text">RAID MOTOR</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Next-generation AI-powered search engine combining neural intelligence with multi-source aggregation technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Zap className="w-4 h-4 text-[#ff6b35] mr-2" />
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <Zap className="w-4 h-4 text-[#b24bf3] mr-2" />
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00d9ff]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} RAID MOTOR. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              <span className="gradient-text-cyber font-semibold mr-2">Powered by</span>
              <span className="text-gray-400">Advanced Neural Networks</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
