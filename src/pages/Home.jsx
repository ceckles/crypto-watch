import { useEffect, useState } from 'react';
import { fetchCrypto } from '../api/coinGecko';
import CryptoCard from '../components/CryptoCard';
import { useTheme } from '../contexts/ThemeContext';

export const Home = () => {
    //State to store the crypto list
    const [cryptoList, setCryptoList] = useState([]);
    //State to store the filtered list
    const [filterdList, setFilterdList] = useState([]);
    //State to store the loading state
    const [isLoading, setIsLoading] = useState(true);
    //State to store the view mode
    const [viewMode, setViewMode] = useState('grid');
    //State to store the sort option
    const [sortBy, setSortBy] = useState('market_cap_rank');
    //State to store the search query
    const [searchQuery, setSearchQuery] = useState('');
    //Theme context
    const { theme, toggleTheme } = useTheme();

    //Function to fetch the crypto data
    const fetchCryptoData = async () => {
        try {
            //Fetch the crypto data
            const data = await fetchCrypto();
            //Set the crypto list
            setCryptoList(data);
        } catch (error) {
            //Log the error
            console.error('Error fetching crypto data:', error);
        } finally {
            //Set the loading state to false
            setIsLoading(false);
        }
    }

    //Effect to fetch the crypto data
    useEffect(() => {
        //Fetch the crypto data immediately on mount
        fetchCryptoData();
        //Then fetch the crypto data every 30 seconds
        const interval = setInterval(fetchCryptoData, 30000);
        return () => clearInterval(interval);
    }, []);

    //Effect to filter and sort the crypto list
    useEffect(() => {
        //Filter and sort the crypto list
        filterSortCryptoList();
    }, [sortBy, cryptoList, searchQuery]);
    //Function to filter crypto list
    const filterSortCryptoList = () => {
        //Filter the crypto list by the search query
        let filterd = cryptoList.filter((crypto) => crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()));

        //Sort the crypto list
        filterd.sort((a, b) => {
            //Sort by the sort option
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                case "price":
                    return a.current_price - b.current_price;
                case "price_desc":
                    return b.current_price - a.current_price;
                case "change":
                    return a.price_change_percentage_24 - b.price_change_percentage_24
                case "market_cap":
                    return a.market_cap - b.market_cap;
                default:
                    return a.market_cap_rank - b.market_cap_rank;
            }
        });
        //Set the filtered list
        setFilterdList(filterd);
    }

    return (
        <div className="app">
            <header className="header">
                <div className="header-content">
                    <div className="logo-section">
                        <h1><span className="coin-emoji">🪙</span> Crypto Watch</h1>
                        <p>Track crypto currencies in real-time</p>
                    </div>
                    <div className="search-section">
                        <input type="text" placeholder="Search for a crypto" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <div className="theme-toggle">
                        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </header>
            <div className="controls">
                <div className="filter-group">
                    <label>Sort by:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="market_cap_rank">Rank</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="price_desc">Price (Descending)</option>
                        <option value="change">24h Change</option>
                        <option value="market_cap">Market Cap</option>
                    </select>
                </div>
                <div className="view-toggle">
                    <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')}>Grid</button>
                    <button className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')}>List</button>
                </div>
            </div>
            {/* Loading State */}
            {isLoading ? <div className='loading'>
                <div className="spinner" />
                <p>Loading crypto data...</p>
            </div>
                :
                <div className={`crypto-container ${viewMode}`}>
                    {filterdList.map((crypto, key) => (
                        <CryptoCard crypto={crypto} key={key} />
                    ))}
                </div>}
            <footer className="footer">
                <p>Data provided by CoinGecko API • Updated every 30 seconds</p>
            </footer>
        </div>
    )
};

export default Home;