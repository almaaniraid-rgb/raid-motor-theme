import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, Bot, Loader2, Copy, Check } from 'lucide-react';

const AIChat = ({ service, initialQuery = null }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (initialQuery) {
      handleSend(initialQuery);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (text = input) => {
    const query = text.trim();
    if (!query || isLoading) return;

    const userMessage = {
      role: 'user',
      content: query,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setStreamingText('');

    const context = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const result = await service.searchStreaming(
      query,
      context,
      ({ done, text, chunk }) => {
        if (!done) {
          setStreamingText(text);
        } else {
          setStreamingText('');
          const assistantMessage = {
            role: 'assistant',
            content: text,
            timestamp: Date.now()
          };
          setMessages(prev => [...prev, assistantMessage]);
          setIsLoading(false);
        }
      }
    );

    if (!result.success) {
      const errorMessage = {
        role: 'assistant',
        content: `Sorry, I encountered an error: ${result.error}. Please check your OpenAI API key in settings.`,
        timestamp: Date.now(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
      setStreamingText('');
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatMessage = (content) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-2xl font-bold mt-4 mb-2">{line.slice(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-bold mt-3 mb-2">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={i} className="text-lg font-semibold mt-2 mb-1">{line.slice(4)}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={i} className="ml-4">{line.slice(2)}</li>;
      } else if (line.match(/^\d+\. /)) {
        return <li key={i} className="ml-4 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
      } else if (line.trim() === '') {
        return <br key={i} />;
      } else {
        const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em>$1</em>')
                              .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">$1</code>');
        return <p key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: formatted }} />;
      }
    });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <div className="flex items-center space-x-3 p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="p-2 gradient-bg rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            RAID MOTOR AI Chat
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Powered by OpenAI GPT-4
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block p-4 gradient-bg rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Welcome to RAID MOTOR AI
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ask me anything and I'll provide comprehensive answers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                'Explain quantum computing',
                'Latest AI developments',
                'Climate change solutions',
                'Future of technology'
              ].map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(suggestion)}
                  className="p-3 text-left bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-start space-x-3 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex-shrink-0 p-2 gradient-bg rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}

              <div
                className={`max-w-3xl rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white ml-12'
                    : message.isError
                    ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                }`}
              >
                <div className="prose dark:prose-invert max-w-none">
                  {formatMessage(message.content)}
                </div>

                {message.role === 'assistant' && !message.isError && (
                  <button
                    onClick={() => copyToClipboard(message.content, index)}
                    className="mt-2 text-xs flex items-center space-x-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {message.role === 'user' && (
                <div className="flex-shrink-0 p-2 bg-blue-600 rounded-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {streamingText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start space-x-3"
          >
            <div className="flex-shrink-0 p-2 gradient-bg rounded-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="max-w-3xl rounded-2xl p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
              <div className="prose dark:prose-invert max-w-none">
                {formatMessage(streamingText)}
                <span className="inline-block w-2 h-4 bg-blue-600 animate-pulse ml-1" />
              </div>
            </div>
          </motion.div>
        )}

        {isLoading && !streamingText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start space-x-3"
          >
            <div className="flex-shrink-0 p-2 gradient-bg rounded-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="rounded-2xl p-4 bg-gray-100 dark:bg-gray-800">
              <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              rows="1"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 resize-none disabled:opacity-50"
              style={{ minHeight: '48px', maxHeight: '200px' }}
            />
          </div>
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="p-3 gradient-bg rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
};

export default AIChat;
