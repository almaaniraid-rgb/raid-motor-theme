const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export class OpenAIService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async chat(messages, options = {}) {
    const {
      model = 'gpt-4o-mini',
      temperature = 0.7,
      maxTokens = 2000,
      stream = false,
      onStream = null
    } = options;

    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model,
          messages,
          temperature,
          max_tokens: maxTokens,
          stream
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'OpenAI API error');
      }

      if (stream && onStream) {
        return this.handleStream(response, onStream);
      }

      const data = await response.json();
      return {
        success: true,
        message: data.choices[0].message.content,
        usage: data.usage
      };

    } catch (error) {
      console.error('OpenAI Service Error:', error);
      return {
        success: false,
        error: error.message || 'Failed to connect to OpenAI'
      };
    }
  }

  async handleStream(response, onStream) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';

    try {
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          onStream({ done: true, text: fullText });
          break;
        }

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);

            if (data === '[DONE]') {
              onStream({ done: true, text: fullText });
              break;
            }

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || '';

              if (content) {
                fullText += content;
                onStream({ done: false, text: fullText, chunk: content });
              }
            } catch (e) {
              console.error('Error parsing stream chunk:', e);
            }
          }
        }
      }

      return {
        success: true,
        message: fullText
      };

    } catch (error) {
      console.error('Stream handling error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async search(query, context = null) {
    const systemPrompt = `You are RAID MOTOR AI, an advanced search assistant that provides comprehensive, accurate, and well-sourced answers.

Your responses should:
- Be informative and thorough
- Include relevant facts and data
- Be well-structured with clear sections
- Use markdown formatting when appropriate
- Cite sources when possible
- Be conversational yet professional

If you don't know something, be honest about it.`;

    const messages = [
      { role: 'system', content: systemPrompt }
    ];

    if (context && context.length > 0) {
      messages.push(...context);
    }

    messages.push({
      role: 'user',
      content: query
    });

    return this.chat(messages, {
      temperature: 0.7,
      maxTokens: 2000
    });
  }

  async searchStreaming(query, context = null, onStream) {
    const systemPrompt = `You are RAID MOTOR AI, an advanced search assistant that provides comprehensive, accurate, and well-sourced answers.

Your responses should:
- Be informative and thorough
- Include relevant facts and data
- Be well-structured with clear sections
- Use markdown formatting when appropriate
- Cite sources when possible
- Be conversational yet professional

If you don't know something, be honest about it.`;

    const messages = [
      { role: 'system', content: systemPrompt }
    ];

    if (context && context.length > 0) {
      messages.push(...context);
    }

    messages.push({
      role: 'user',
      content: query
    });

    return this.chat(messages, {
      temperature: 0.7,
      maxTokens: 2000,
      stream: true,
      onStream
    });
  }
}

export const createOpenAIService = (apiKey) => {
  if (!apiKey) {
    console.warn('OpenAI API key not provided');
    return null;
  }
  return new OpenAIService(apiKey);
};
