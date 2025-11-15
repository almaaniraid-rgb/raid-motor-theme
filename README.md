# RAID MOTOR 🚀

**Rapid AI Discovery & Multi-Origin Retrieval**

An AI-powered search engine website with multi-source aggregation, powered by Comet AI & Perplexity Technology.

![RAID MOTOR](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop)

## ✨ Features

- **AI-Powered Answers** - Get intelligent, contextual answers powered by Comet AI integration
- **Multi-Source Aggregation** - Search across 10+ search engines simultaneously
- **Real-Time Results** - Lightning-fast responses with instant AI-generated summaries
- **Source Citations** - Every answer includes verified sources and references
- **Dark/Light Mode** - Beautiful theme switching with smooth transitions
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Search History** - Local storage of your search queries (can be disabled)
- **Keyboard Shortcuts** - Efficient navigation with keyboard commands

## 🎨 Design

The design is inspired by Perplexity.ai with RAID MOTOR's unique branding:

- **Primary Color**: Indigo Blue (#6366f1)
- **Secondary Color**: Purple (#8b5cf6)
- **Accent Color**: Pink (#ec4899)
- Modern gradient backgrounds
- Smooth animations and transitions
- Glass morphism effects
- Professional card-based layouts

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 📁 Project Structure

```
raid-motor/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── AISummaryCard.jsx
│   │   ├── ResultCard.jsx
│   │   └── LoadingSkeleton.jsx
│   ├── contexts/           # React Context providers
│   │   ├── ThemeContext.jsx
│   │   └── SearchContext.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── SearchResults.jsx
│   │   ├── About.jsx
│   │   ├── Settings.jsx
│   │   ├── API.jsx
│   │   ├── Privacy.jsx
│   │   └── NotFound.jsx
│   ├── hooks/              # Custom React hooks
│   │   └── useKeyboardShortcuts.js
│   ├── utils/              # Utility functions
│   │   └── api.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── .env                    # Environment variables
└── package.json            # Project dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
VITE_API_URL=https://raidoneone.app.n8n.cloud/webhook/search
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## ⚡ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Context + Hooks

## 📄 Pages

1. **Homepage (/)** - Hero section with search bar and features
2. **Search Results (/search)** - AI summary and search results with filters
3. **About (/about)** - Technology overview and mission statement
4. **Settings (/settings)** - Appearance, search preferences, and privacy options
5. **API (/api)** - API documentation with code examples
6. **Privacy (/privacy)** - Privacy policy and data handling information
7. **404** - Custom not found page

## 🎯 API Integration

The app is configured to connect to the n8n webhook endpoint:

```javascript
POST https://raidoneone.app.n8n.cloud/webhook/search

Body:
{
  "query": "search query",
  "filters": {
    "safeSearch": true,
    "timeRange": "any",
    "language": "en",
    "category": "all"
  }
}
```

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + K` - Focus search bar
- `Ctrl/Cmd + /` - Show shortcuts menu
- `Esc` - Clear search or close modals

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#ec4899',
}
```

### Search Providers

Modify `src/utils/api.js` to add or remove search sources.

## 🚀 Deployment

Build the production bundle:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Inspired by Perplexity.ai's clean design
- Powered by Comet AI & Perplexity Technology
- Icons from Lucide React
- Stock photos from Unsplash

---

**Built with ❤️ by the RAID MOTOR team**
