//Function to format the price
export const formatPrice = (price) =>{
  //If the price is less than 0.01, return the price to 8 decimal places
  if(price < 0.01) return price.toFixed(8);
  //Return the price formatted to 2 decimal places
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

//Function to format the market cap
export const formatMarketCap = (marketCap) =>{
    //If the market cap is greater than or equal to 1 trillion, return the market cap to 2 decimal places and add 'T'
    if(marketCap >= 1e12) return (marketCap / 1e12).toFixed(2) + 'T';
    //If the market cap is greater than or equal to 1 billion, return the market cap to 2 decimal places and add 'B'
    if(marketCap >= 1e9) return (marketCap / 1e9).toFixed(2) + 'B';
    //If the market cap is greater than or equal to 1 million, return the market cap to 2 decimal places and add 'M'
    if(marketCap >= 1e6) return (marketCap / 1e6).toFixed(2) + 'M';
    
    return marketCap.toLocaleString();
};