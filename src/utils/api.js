import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const TIMEOUT = 30000;

export const searchAPI = async (query, filters = {}) => {
  try {
    const response = await axios.post(
      API_URL,
      { query },
      {
        timeout: TIMEOUT,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Search API Error:', error);

    if (error.code === 'ECONNABORTED') {
      return {
        success: false,
        error: 'Request timeout. Please try again.'
      };
    }

    if (error.response) {
      return {
        success: false,
        error: error.response.data?.message || 'Server error occurred.'
      };
    }

    return {
      success: false,
      error: 'Network error. Please check your connection.'
    };
  }
};

export const getMockResults = (query) => {
  return {
    aiSummary: {
      text: `Based on your query "${query}", here's a comprehensive overview: This is an AI-generated summary that aggregates information from multiple reliable sources. The technology behind RAID MOTOR combines advanced natural language processing with multi-source verification to provide accurate, up-to-date answers.`,
      sources: [
        { name: 'Google', url: '#' },
        { name: 'Bing', url: '#' },
        { name: 'DuckDuckGo', url: '#' },
        { name: 'Wikipedia', url: '#' }
      ]
    },
    results: [
      {
        id: 1,
        source: 'Google',
        title: `Comprehensive Guide to ${query}`,
        url: 'https://example.com/guide',
        snippet: 'A detailed exploration of the topic with expert insights and analysis. This comprehensive resource covers all aspects from fundamentals to advanced concepts.',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
        timestamp: '2 hours ago'
      },
      {
        id: 2,
        source: 'Bing',
        title: `Latest Updates on ${query}`,
        url: 'https://example.com/updates',
        snippet: 'Stay informed with the most recent developments and breaking news in this field. Updated daily with verified information from trusted sources.',
        thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400',
        timestamp: '5 hours ago'
      },
      {
        id: 3,
        source: 'DuckDuckGo',
        title: `Understanding ${query}: Expert Analysis`,
        url: 'https://example.com/analysis',
        snippet: 'Deep dive into the subject matter with expert commentary and real-world applications. Learn from industry leaders and research professionals.',
        thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
        timestamp: '1 day ago'
      },
      {
        id: 4,
        source: 'Wikipedia',
        title: `${query} - Complete Encyclopedia Entry`,
        url: 'https://example.com/wiki',
        snippet: 'Comprehensive encyclopedia entry with citations and references. Community-verified information with extensive background and context.',
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
        timestamp: '3 days ago'
      },
      {
        id: 5,
        source: 'Google Scholar',
        title: `Academic Research on ${query}`,
        url: 'https://example.com/research',
        snippet: 'Peer-reviewed academic papers and scholarly articles on the topic. Access cutting-edge research and scientific findings.',
        thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
        timestamp: '1 week ago'
      }
    ]
  };
};
