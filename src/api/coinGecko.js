//Base URL for the CoinGecko API
const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCrypto = async () =>{
    //Fetch crypto data from the CoinGecko API
    const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

    //Check if the response is ok
    if(!response.ok){
        //Throw an error if the response is not ok
        throw new Error('Failed to fetch crypto data');
    }

    //Return the response as JSON
    return response.json();
}