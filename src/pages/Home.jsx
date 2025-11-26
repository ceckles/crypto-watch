import { useEffect, useState } from 'react';
import { fetchCrypto } from '../api/coinGecko';
import CryptoCard from '../components/CryptoCard';

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


    //Effect to fetch the crypto data
    useEffect(() => {
        //Fetch the crypto data
        fetchCryptoData();
    }, []);

    //Effect to filter and sort the crypto list
    useEffect(() => {
        //Filter and sort the crypto list
        filterSortCryptoList();
    }, [sortBy, cryptoList]);

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
    //Function to filter crypto list
    const filterSortCryptoList = () => {
        //Create a copy of the crypto list
        let filterd = [...cryptoList];
        //Sort the crypto list
        filterd.sort((a,b)=>{
            //Sort by the sort option
            switch(sortBy){
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
                { filterdList.map((crypto, key) => (
                    <CryptoCard crypto={crypto} key={key}/>
                ))}
            </div>}
        </div>
    )
};

export default Home;