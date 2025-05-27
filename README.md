[STOCK DASHBOARD.pdf](https://github.com/user-attachments/files/20464294/STOCK.DASHBOARD.pdf)# **Stock Market Dashboard**

## **Features**

* Real-time stock data fetching using Financial Modeling Prep (FMP) API
* Interactive chart with multiple time frame filters (1D, 1W, 1M, etc.)
* Company profile and quote overview
* Dark and light theme toggle
* Global state management using React Context API

## **Tech Stack**

* **React** (with functional components and hooks)
* **Tailwind CSS** for styling
* **Recharts** for data visualization
* **Context API** for state management
* **Financial Modeling Prep (FMP) API** for stock data

## **How It Works**

1. **User searches a stock symbol (e.g., AAPL)**:

   * Input is managed in a search component.
   * `setStockSymbol("AAPL")` updates the global context.

2. **Dashboard reacts to symbol change**:

   * Fetches data using:

     * `fetchQuote("AAPL")`
     * `fetchCompanyProfile("AAPL")`
   * Updates state and triggers re-renders of **Header**, **Overview**, and **Details** components.

3. **Chart component**:

   * Fetches historical data using `fetchHistoricalData(stockSymbol, interval)`
   * Supports time-based filters (1D, 1W, 1M, etc.) and updates chart data on change.

4. **Components communicate via Context**:

   * `ThemeContext` manages dark/light mode
   * `StockContext` shares current stock symbol globally

5. **Environment Variable**:

   * `.env` stores the API key as `REACT_APP_FMP_API_KEY`

---

This project is optimized for modularity, performance, and maintainability, using clean state and UI separation.
[STOCK DASHBOARD.pdf](https://github.com/user-attachments/files/20464298/STOCK.DASHBOARD.pdf)



https://github.com/user-attachments/assets/eb965817-9734-42f3-bac7-5d8052628c00


