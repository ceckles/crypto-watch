export const CryptoCard = ({crypto}) =>{
    return (
    <div className="crypto-card">
        <div className="crypto-header">
            <div className="crypto-info">
                <img src={crypto.image} alt={crypto.name} />
                <div>
                    <h3>{crypto.name}</h3>
                    <p className="symbol">{crypto.symbol.toUpperCase()}</p>
                </div>
            </div>
            <div className="rank">
                Rank #{crypto.market_cap_rank}
            </div>
        </div>
        <div className="crypto-price">
            <div className="price">
                ${crypto.current_price.toLocaleString()}
            </div>
            <div className="change">
                ${crypto.price_change_percentage_24h.toFixed(2)}%
            </div>
        </div>
    </div>)
};

export default CryptoCard;