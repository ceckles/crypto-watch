# 🪙 Crypto Watch

A modern, real-time cryptocurrency tracking application built with React. Monitor cryptocurrency prices, view detailed coin information, and analyze price trends with beautiful charts and a responsive design.

![Crypto Watch](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 📊 **Real-time Crypto Data** - Track top 100 cryptocurrencies with live price updates
- 📈 **Interactive Charts** - 7-day price history charts powered by Recharts
- 🔍 **Search & Filter** - Search cryptocurrencies by name or symbol
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🌓 **Light/Dark Mode** - Toggle between light and dark themes with persistent preferences
- 🎨 **Modern UI** - Glassmorphism design with smooth animations
- 📑 **Detailed Coin Pages** - View comprehensive information for each cryptocurrency
- 🔄 **Sorting Options** - Sort by rank, name, price, market cap, or 24h change
- 📊 **Grid/List Views** - Switch between grid and list view modes

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **React Router 7.9.6** - Client-side routing
- **Recharts 3.5.0** - Charting library for data visualization
- **Vite 7.2.4** - Build tool and dev server
- **CoinGecko API** - Cryptocurrency data source

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm**, **yarn**, or **pnpm** (package manager)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Crypto-Watch
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using yarn:
   ```bash
   yarn install
   ```
   
   Using pnpm:
   ```bash
   pnpm install
   ```

## ⚙️ Configuration

### API Configuration

The application uses the CoinGecko API (free tier) which doesn't require an API key. The API endpoints are configured in `src/api/coinGecko.js`:

- **Base URL**: `https://api.coingecko.com/api/v3`
- **Markets Endpoint**: `/coins/markets` - Fetches top 100 cryptocurrencies
- **Coin Detail Endpoint**: `/coins/{id}` - Fetches detailed information for a specific coin
- **Chart Data Endpoint**: `/coins/{id}/market_chart` - Fetches 7-day price history

### Theme Configuration

Theme preferences are automatically saved to `localStorage` and persist across sessions. The theme can be toggled using the theme switcher button in the header.

## 🏃 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

Or with pnpm:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Production Build

Build the project for production:

```bash
npm run build
```

The optimized build will be created in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## 📁 Project Structure

```
Crypto-Watch/
├── public/                 # Static assets
├── src/
│   ├── api/               # API integration
│   │   └── coinGecko.js   # CoinGecko API functions
│   ├── components/        # Reusable components
│   │   └── CryptoCard.jsx # Crypto card component
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.jsx # Theme management
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page (crypto list)
│   │   └── CoinDetail.jsx # Coin detail page
│   ├── utils/             # Utility functions
│   │   └── formatter.js   # Number formatting utilities
│   ├── App.jsx             # Main app component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and theme variables
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Features in Detail

### Home Page
- Displays top 100 cryptocurrencies in a grid or list view
- Search functionality to filter coins
- Sort by rank, name, price, market cap, or 24h change
- Click on any card to view detailed information

### Coin Detail Page
- Comprehensive coin information
- Current price with 24h change indicator
- 7-day price history chart
- Market statistics (market cap, volume, supply)
- 24h high/low prices

### Theme System
- Light and dark mode support
- Smooth transitions between themes
- Theme preference saved in localStorage
- All components are theme-aware

## 🔌 API Information

This project uses the **CoinGecko Free API** which:
- Doesn't require authentication
- Has rate limits (50 calls/minute for free tier)
- Provides comprehensive cryptocurrency data
- Updates data every 30 seconds

For production use, consider:
- Implementing API rate limiting
- Adding error handling for API failures
- Using CoinGecko Pro API for higher rate limits

### API Endpoints

#### 1. Get Cryptocurrency Markets
**Endpoint**: `GET /coins/markets`

**Query Parameters**:
- `vs_currency`: Currency for price comparison (default: `usd`)
- `order`: Sort order (default: `market_cap_desc`)
- `per_page`: Number of results per page (default: `100`)
- `page`: Page number (default: `1`)
- `sparkline`: Include sparkline data (default: `false`)

**Response**: Array of market data objects
```json
[
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    "current_price": 43250.50,
    "market_cap": 850123456789,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 908765432109,
    "total_volume": 12345678901,
    "high_24h": 44500.00,
    "low_24h": 42000.00,
    "price_change_24h": 1250.50,
    "price_change_percentage_24h": 2.98,
    "market_cap_change_24h": 25000000000,
    "market_cap_change_percentage_24h": 3.03,
    "circulating_supply": 19650000,
    "total_supply": 19650000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -37.35,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 63657.89,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "last_updated": "2024-01-15T10:30:00.000Z"
  }
]
```

**Key Fields Used**:
- `id`: Unique identifier (used for navigation)
- `name`: Full name of the cryptocurrency
- `symbol`: Ticker symbol (e.g., BTC, ETH)
- `image`: URL to coin logo
- `current_price`: Current price in USD
- `market_cap`: Market capitalization
- `market_cap_rank`: Ranking by market cap
- `price_change_percentage_24h`: 24-hour price change percentage
- `total_volume`: 24-hour trading volume

#### 2. Get Coin Details
**Endpoint**: `GET /coins/{id}`

**Path Parameters**:
- `id`: Coin ID (e.g., `bitcoin`, `ethereum`)

**Query Parameters**:
- `localization`: Include localized names (default: `false`)
- `tickers`: Include ticker data (default: `false`)
- `market_data`: Include market data (default: `true`)
- `community_data`: Include community data (default: `false`)
- `developer_data`: Include developer data (default: `false`)
- `sparkline`: Include sparkline data (default: `false`)

**Response**: Detailed coin object
```json
{
  "id": "bitcoin",
  "symbol": "btc",
  "name": "Bitcoin",
  "image": {
    "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
    "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
  },
  "market_data": {
    "current_price": {
      "usd": 43250.50
    },
    "market_cap": {
      "usd": 850123456789
    },
    "market_cap_rank": 1,
    "total_volume": {
      "usd": 12345678901
    },
    "high_24h": {
      "usd": 44500.00
    },
    "low_24h": {
      "usd": 42000.00
    },
    "price_change_24h": 1250.50,
    "price_change_percentage_24h": 2.98,
    "price_change_percentage_7d": 5.23,
    "price_change_percentage_30d": -2.15,
    "market_cap_change_24h": 25000000000,
    "market_cap_change_percentage_24h": 3.03,
    "circulating_supply": 19650000,
    "total_supply": 19650000,
    "max_supply": 21000000
  },
  "last_updated": "2024-01-15T10:30:00.000Z"
}
```

**Key Fields Used**:
- `id`: Coin identifier
- `name`: Full name
- `symbol`: Ticker symbol
- `image.large`: Large logo URL
- `market_data.current_price.usd`: Current USD price
- `market_data.market_cap_rank`: Market cap ranking
- `market_data.price_change_percentage_24h`: 24h price change
- `market_data.high_24h.usd`: 24h high price
- `market_data.low_24h.usd`: 24h low price
- `market_data.market_cap.usd`: Market capitalization
- `market_data.total_volume.usd`: 24h trading volume
- `market_data.circulating_supply`: Circulating supply
- `market_data.total_supply`: Total supply

#### 3. Get Market Chart Data
**Endpoint**: `GET /coins/{id}/market_chart`

**Path Parameters**:
- `id`: Coin ID (e.g., `bitcoin`, `ethereum`)

**Query Parameters**:
- `vs_currency`: Currency for price comparison (default: `usd`)
- `days`: Number of days of historical data (default: `7`)

**Response**: Price history data
```json
{
  "prices": [
    [1705324800000, 43000.50],
    [1705411200000, 43250.75],
    [1705497600000, 43500.25]
  ],
  "market_caps": [
    [1705324800000, 845000000000],
    [1705411200000, 850000000000],
    [1705497600000, 855000000000]
  ],
  "total_volumes": [
    [1705324800000, 12000000000],
    [1705411200000, 12300000000],
    [1705497600000, 12500000000]
  ]
}
```

**Response Structure**:
- `prices`: Array of `[timestamp, price]` pairs
  - `timestamp`: Unix timestamp in milliseconds
  - `price`: Price in the specified currency
- `market_caps`: Array of `[timestamp, market_cap]` pairs
- `total_volumes`: Array of `[timestamp, volume]` pairs

**Data Processing**:
The application transforms the `prices` array into chart-friendly format:
```javascript
{
  time: "Jan 15",  // Formatted date
  price: "43250.50"  // Formatted price string
}
```

### Error Handling

All API endpoints may return errors:
- **429 Too Many Requests**: Rate limit exceeded
- **404 Not Found**: Coin ID doesn't exist
- **500 Internal Server Error**: CoinGecko API error

The application handles these errors gracefully and displays appropriate messages to users.

## 🎯 Usage

1. **View Cryptocurrencies**: Browse the top 100 cryptocurrencies on the home page
2. **Search**: Use the search bar to find specific cryptocurrencies
3. **Sort**: Use the dropdown to sort by different criteria
4. **View Details**: Click on any cryptocurrency card to see detailed information
5. **Toggle Theme**: Click the sun/moon icon in the header to switch themes
6. **Switch Views**: Toggle between grid and list views using the view buttons

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### API Errors
If you encounter API errors:
- Check your internet connection
- Verify CoinGecko API is accessible
- Check browser console for detailed error messages

### Build Issues
If the build fails:
- Clear `node_modules` and reinstall dependencies
- Ensure Node.js version is compatible
- Check for any linting errors


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.



---

**Note**: This project is for educational purposes. Always verify cryptocurrency data from official sources before making financial decisions.

