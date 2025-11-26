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