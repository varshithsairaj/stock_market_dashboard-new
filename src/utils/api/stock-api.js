// const basePath = "https://finnhub.io/api/v1";

// /**
//  * Searches best stock matches based on a user's query
//  * @param {string} query - The user's query, e.g. 'fb'
//  * @returns {Promise<Object[]>} Response array of best stock matches
//  */
// export const searchSymbol = async (query) => {
//   const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   return await response.json();
// };

// /**
//  * Fetches the details of a given company
//  * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
//  * @returns {Promise<Object>} Response object
//  */
// export const fetchStockDetails = async (stockSymbol) => {
//   const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   return await response.json();
// };

// /**
//  * Fetches the latest quote of a given stock
//  * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
//  * @returns {Promise<Object>} Response object
//  */
// export const fetchQuote = async (stockSymbol) => {
//   const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   return await response.json();
// };

// /**
//  * Fetches historical data of a stock (to be displayed on a chart)
//  * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
//  * @param {string} resolution - Resolution of timestamps. Supported resolution includes: 1, 5, 15, 30, 60, D, W, M
//  * @param {number} from - UNIX timestamp (seconds elapsed since January 1st, 1970 at UTC). Interval initial value.
//  * @param {number} to - UNIX timestamp (seconds elapsed since January 1st, 1970 at UTC). Interval end value.
//  * @returns {Promise<Object>} Response object
//  */
// export const fetchHistoricalData = async (
//   stockSymbol,
//   resolution,
//   from,
//   to
// ) => {
//   const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   return await response.json();
// };
const basePath = "https://www.alphavantage.co/query";

/**
 * Searches best stock matches based on a user's query
 * @param {string} query - The user's query, e.g. 'fb'
 * @returns {Promise<Object[]>} Response array of best stock matches
 */
export const searchSymbol = async (query) => {
  const url = `${basePath}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data.bestMatches || []; // Alpha Vantage returns 'bestMatches' for symbol search
};

/**
 * Fetches the details of a given company
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}?function=OVERVIEW&symbol=${stockSymbol}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data; // Returns company overview details
};

/**
 * Fetches the latest quote of a given stock
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data["Global Quote"] || {}; // Alpha Vantage uses "Global Quote" for quotes
};

/**
 * Fetches historical data of a stock (to be displayed on a chart)
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @param {string} interval - Time interval for intraday data. Supported: 1min, 5min, 15min, 30min, 60min
 * @returns {Promise<Object>} Response object
 */
export const fetchHistoricalData = async (stockSymbol, interval) => {
  const url = `${basePath}?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=${interval}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data[`Time Series (${interval})`] || {}; // Returns intraday data for the specified interval
};
