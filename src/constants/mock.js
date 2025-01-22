// export const mockSearchResults = {
//   count: 4,
//   result: [
//     {
//       description: "APPLE INC",
//       displaySymbol: "AAPL",
//       symbol: "AAPL",
//       type: "Common Stock",
//     },
//     {
//       description: "APPLE INC",
//       displaySymbol: "AAPL.SW",
//       symbol: "AAPL.SW",
//       type: "Common Stock",
//     },
//     {
//       description: "APPLE INC",
//       displaySymbol: "APC.BE",
//       symbol: "APC.BE",
//       type: "Common Stock",
//     },
//     {
//       description: "APPLE INC",
//       displaySymbol: "APC.DE",
//       symbol: "APC.DE",
//       type: "Common Stock",
//     },
//   ],
// };

// export const mockCompanyDetails = {
//   country: "US",
//   currency: "USD",
//   exchange: "NASDAQ/NMS (GLOBAL MARKET)",
//   ipo: "1980-12-12",
//   marketCapitalization: 1415993,
//   name: "Apple Inc",
//   phone: "14089961010",
//   shareOutstanding: 4375.47998046875,
//   ticker: "AAPL",
//   weburl: "https://www.apple.com/",
//   logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
//   finnhubIndustry: "Technology",
// };

// export const mockStockQuote = {
//   c: 261.74,
//   h: 263.31,
//   l: 260.68,
//   o: 261.07,
//   pc: 259.45,
//   t: 1582641000,
// };

// export const mockHistoricalData = {
//   c: [217.68, 221.03, 219.89],
//   h: [222.49, 221.5, 220.94],
//   l: [217.19, 217.1402, 218.83],
//   o: [221.03, 218.55, 220],
//   s: "ok",
//   t: [1569297600, 1569384000, 1569470400],
//   v: [33463820, 24018876, 20730608],
// };


export const mockSearchResults = {
  bestMatches: [
    {
      "1. symbol": "AAPL",
      "2. name": "APPLE INC",
      "3. type": "Common Stock",
      "4. region": "United States",
    },
    {
      "1. symbol": "AAPL.SW",
      "2. name": "APPLE INC",
      "3. type": "Common Stock",
      "4. region": "Switzerland",
    },
    {
      "1. symbol": "APC.BE",
      "2. name": "APPLE INC",
      "3. type": "Common Stock",
      "4. region": "Germany",
    },
    {
      "1. symbol": "APC.DE",
      "2. name": "APPLE INC",
      "3. type": "Common Stock",
      "4. region": "Germany",
    },
  ],
};

export const mockCompanyDetails = {
  Symbol: "AAPL",
  AssetType: "Common Stock",
  Name: "Apple Inc",
  Description: "N/A", // Alpha Vantage doesn't directly match Finnhub's 'description'
  CIK: "N/A",
  Exchange: "NASDAQ/NMS (GLOBAL MARKET)",
  Currency: "USD",
  Country: "US",
  Sector: "Technology",
  Industry: "Technology",
  Address: "N/A",
  FiscalYearEnd: "N/A",
  LatestQuarter: "N/A",
  MarketCapitalization: "1415993000000", // Converted to string for consistency with Alpha Vantage
  EBITDA: "N/A",
  PERatio: "N/A",
  PEGRatio: "N/A",
  BookValue: "N/A",
  DividendPerShare: "N/A",
  DividendYield: "N/A",
  EPS: "N/A",
  RevenueTTM: "N/A",
  GrossProfitTTM: "N/A",
  DilutedEPSTTM: "N/A",
  QuarterlyEarningsGrowthYOY: "N/A",
  QuarterlyRevenueGrowthYOY: "N/A",
  AnalystTargetPrice: "N/A",
  TrailingPE: "N/A",
  ForwardPE: "N/A",
  PriceToSalesRatioTTM: "N/A",
  PriceToBookRatio: "N/A",
  EVToRevenue: "N/A",
  EVToEBITDA: "N/A",
};

export const mockStockQuote = {
  "Global Quote": {
    "01. symbol": "AAPL",
    "02. open": "261.07",
    "03. high": "263.31",
    "04. low": "260.68",
    "05. price": "261.74",
    "06. volume": "N/A", // Volume is not provided in the mock data
    "07. latest trading day": "2020-02-25", // Convert UNIX timestamp (1582641000) to readable date
    "08. previous close": "259.45",
    "09. change": "2.29", // Calculated as price - previous close
    "10. change percent": "0.88%", // Calculated as (change / previous close) * 100
  },
};

export const mockHistoricalData = {
  "Time Series (1min)": {
    "2019-09-23 09:30:00": {
      "1. open": "221.03",
      "2. high": "222.49",
      "3. low": "217.19",
      "4. close": "217.68",
      "5. volume": "33463820",
    },
    "2019-09-24 09:30:00": {
      "1. open": "218.55",
      "2. high": "221.50",
      "3. low": "217.1402",
      "4. close": "221.03",
      "5. volume": "24018876",
    },
    "2019-09-25 09:30:00": {
      "1. open": "220",
      "2. high": "220.94",
      "3. low": "218.83",
      "4. close": "219.89",
      "5. volume": "20730608",
    },
  },
};
