// import React, { useContext, useEffect, useState } from "react";
// import ThemeContext from "../context/ThemeContext";
// import Overview from "./Overview";
// import Details from "./Details";
// import Chart from "./Chart";
// import Header from "./Header";
// import StockContext from "../context/StockContext";
// import { fetchStockDetails, fetchQuote } from "../utils/api/stock-api";

// const Dashboard = () => {
//   const { darkMode } = useContext(ThemeContext);

//   const { stockSymbol } = useContext(StockContext);

//   const [stockDetails, setStockDetails] = useState({});

//   const [quote, setQuote] = useState({});

//   useEffect(() => {
//     const updateStockDetails = async () => {
//       try {
//         const result = await fetchStockDetails(stockSymbol);
//         setStockDetails(result);
//       } catch (error) {
//         setStockDetails({});
//         console.log(error);
//       }
//     };

//     const updateStockOverview = async () => {
//       try {
//         const result = await fetchQuote(stockSymbol);
//         setQuote(result);
//       } catch (error) {
//         setQuote({});
//         console.log(error);
//       }
//     };

//     updateStockDetails();
//     updateStockOverview();
//   }, [stockSymbol]);

//   return (
//     <div
//       className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
//         darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
//       }`}
//     >
//       <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
//         <Header name={stockDetails.name} />
//       </div>
//       <div className="md:col-span-2 row-span-4">
//         <Chart />
//       </div>
//       <div>
//         <Overview
//           symbol={stockSymbol}
//           price={quote.pc}
//           change={quote.d}
//           changePercent={quote.dp}
//           currency={stockDetails.currency}
//         />
//       </div>
//       <div className="row-span-2 xl:row-span-3">
//         <Details details={stockDetails} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useContext, useEffect, useState, useCallback } from "react";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../utils/api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext); // Assuming the stock symbol is stored here

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  const updateStockDetails = useCallback(async () => {
    try {
      const result = await fetchStockDetails(stockSymbol); // Call API for details
      setStockDetails(result); // Update stockDetails state
    } catch (error) {
      setStockDetails({});
      console.log(error);
    }
  }, [stockSymbol]);

  const updateStockOverview = useCallback(async () => {
    try {
      const result = await fetchQuote(stockSymbol); // Call API for quote
      setQuote(result); // Update quote state
    } catch (error) {
      setQuote({});
      console.log(error);
    }
  }, [stockSymbol]);

  useEffect(() => {
    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol, updateStockDetails, updateStockOverview]); // Add functions as dependencies

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name} />
      </div>

      {/* Chart displaying historical stock data */}
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>

      {/* Stock Overview displaying price change, percentage, and currency */}
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.c} // Current stock price
          change={quote.d} // Daily price change
          changePercent={quote.dp} // Daily change percentage
          currency={stockDetails.currency} // Currency (e.g., USD)
        />
      </div>

      {/* Detailed stock information */}
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
