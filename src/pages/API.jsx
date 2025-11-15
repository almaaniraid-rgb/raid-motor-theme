import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Key, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const API = () => {
  const codeExamples = [
    {
      language: 'JavaScript',
      code: `// Initialize RAID MOTOR API
const API_KEY = 'your_api_key_here';
const API_URL = 'https://api.raidmotor.com/search';

async function search(query) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${API_KEY}\`
    },
    body: JSON.stringify({
      query: query,
      filters: {
        safeSearch: true,
        language: 'en'
      }
    })
  });

  const data = await response.json();
  return data;
}

// Usage
search('AI trends 2025').then(results => {
  console.log(results);
});`
    },
    {
      language: 'Python',
      code: `import requests

API_KEY = 'your_api_key_here'
API_URL = 'https://api.raidmotor.com/search'

def search(query):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {API_KEY}'
    }

    payload = {
        'query': query,
        'filters': {
            'safeSearch': True,
            'language': 'en'
        }
    }

    response = requests.post(API_URL, json=payload, headers=headers)
    return response.json()

# Usage
results = search('AI trends 2025')
print(results)`
    },
    {
      language: 'cURL',
      code: `curl -X POST https://api.raidmotor.com/search \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -d '{
    "query": "AI trends 2025",
    "filters": {
      "safeSearch": true,
      "language": "en"
    }
  }'`
    }
  ];

  const endpoints = [
    {
      method: 'POST',
      path: '/api/search',
      description: 'Perform a search query',
      params: [
        { name: 'query', type: 'string', required: true, desc: 'The search query' },
        { name: 'filters', type: 'object', required: false, desc: 'Optional search filters' }
      ]
    },
    {
      method: 'GET',
      path: '/api/results/:id',
      description: 'Get specific search result by ID',
      params: [
        { name: 'id', type: 'string', required: true, desc: 'Result ID' }
      ]
    },
    {
      method: 'POST',
      path: '/api/ai-summary',
      description: 'Generate AI summary for a topic',
      params: [
        { name: 'query', type: 'string', required: true, desc: 'Topic to summarize' },
        { name: 'sources', type: 'array', required: false, desc: 'Specific sources to use' }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times for all queries'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: '99.9% uptime with enterprise-grade security'
    },
    {
      icon: Code,
      title: 'Easy Integration',
      description: 'RESTful API with comprehensive documentation'
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
            RAID MOTOR API
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Integrate powerful AI-powered search into your applications
          </p>
        </motion.div>
      </div>

      <div className="bg-bg-light dark:bg-bg-dark py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
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
            <h2 className="text-3xl font-bold mb-8 gradient-text">Getting Started</h2>
            <div className="card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Authentication
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    All API requests require authentication using an API key. Include your key in the Authorization header:
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-green-400 text-sm">
                      Authorization: Bearer your_api_key_here
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">API Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="card">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded">
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-900 dark:text-white">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {endpoint.description}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 text-gray-700 dark:text-gray-300">Parameter</th>
                          <th className="text-left py-2 text-gray-700 dark:text-gray-300">Type</th>
                          <th className="text-left py-2 text-gray-700 dark:text-gray-300">Required</th>
                          <th className="text-left py-2 text-gray-700 dark:text-gray-300">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.params.map((param, pIndex) => (
                          <tr key={pIndex} className="border-b border-gray-100 dark:border-gray-800">
                            <td className="py-2 font-mono text-primary">{param.name}</td>
                            <td className="py-2 text-gray-600 dark:text-gray-400">{param.type}</td>
                            <td className="py-2">
                              {param.required ? (
                                <span className="text-red-500">Yes</span>
                              ) : (
                                <span className="text-gray-500">No</span>
                              )}
                            </td>
                            <td className="py-2 text-gray-600 dark:text-gray-400">{param.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">Code Examples</h2>
            <div className="space-y-6">
              {codeExamples.map((example, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {example.language}
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 card text-center"
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text">Rate Limits</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1,000</div>
                <div className="text-gray-600 dark:text-gray-400">requests/hour</div>
                <div className="text-sm text-gray-500 mt-1">Free Tier</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">10,000</div>
                <div className="text-gray-600 dark:text-gray-400">requests/hour</div>
                <div className="text-sm text-gray-500 mt-1">Pro Tier</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Unlimited</div>
                <div className="text-gray-600 dark:text-gray-400">requests</div>
                <div className="text-sm text-gray-500 mt-1">Enterprise</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default API;
