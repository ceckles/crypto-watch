import { useEffect, useState } from 'react';
import { fetchCrypto } from '../api/coinGecko';
import CryptoCard from '../components/CryptoCard';

export const Home = () => {
    //State to store the crypto list
    const [cryptoList, setCryptoList] = useState([]);
    //State to store the loading state
    const [isLoading, setIsLoading] = useState(true);
    //State to store the view mode
    const [viewMode, setViewMode] = useState('grid');


    //Effect to fetch the crypto data
    useEffect(() => {
        //Fetch the crypto data
        fetchCryptoData();
    }, []);

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
    return (
        <div className="app">
            <div className="controls">
                <div className="filter-group"></div>
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
                { cryptoList.map((crypto, key) => (
                    <CryptoCard crypto={crypto} key={key}/>
                ))}
            </div>}
        </div>
    )
};

export default Home;