const cryptoSymbols = ['bitcoin', 'ethereum', 'tether', 'ripple', 'bnb']; // Add more symbols as needed

function fetchCryptoPrices() {
  cryptoSymbols.forEach((symbol) => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        createCryptoItem(symbol, data[symbol].usd); 
      })
      .catch(error => console.error('Error fetching data:', error));
  });
}

function createCryptoItem(symbol, price) {
  const cryptoTracker = document.querySelector('.crypto-tracker');
  const cryptoItem = document.createElement('div');
  cryptoItem.classList.add('crypto-item');
  cryptoItem.textContent = `${symbol.toUpperCase()}: $${price.toFixed(2)}`; // Format the output
  cryptoTracker.appendChild(cryptoItem);
}

fetchCryptoPrices(); // Fetch data on page load 
// ... your existing JavaScript code ...

function createCryptoItem(symbol, price) {
  const cryptoItem = document.createElement('span');
  cryptoItem.textContent = `${symbol.toUpperCase()}: $${price.toFixed(2)} `; // Add a space after the price
  const priceTracker = document.querySelector('.price-tracker-wrapper');
  priceTracker.appendChild(cryptoItem);
}
