// import React, { useContext } from "react";
// import Card from "./Card";
// import ThemeContext from "../context/ThemeContext";

// const Details = ({ details }) => {
//   const { darkMode } = useContext(ThemeContext);

//   const detailsList = {
//     name: "Name",
//     country: "Country",
//     currency: "Currency",
//     exchange: "Exchange",
//     ipo: "IPO Date",
//     marketCapitalization: "Market Capitalization",
//     finnhubIndustry: "Industry",
//   };

//   const convertMillionToBillion = (number) => {
//     return (number / 1000).toFixed(2);
//   };

//   return (
//     <Card>
//       <ul
//         className={`w-full h-full flex flex-col justify-between divide-y-1 ${
//           darkMode ? "divide-gray-800" : null
//         }`}
//       >
//         {Object.keys(detailsList).map((item) => {
//           return (
//             <li key={item} className="flex-1 flex justify-between items-center">
//               <span>{detailsList[item]}</span>
//               <span className="font-bold">
//                 {item === "marketCapitalization"
//                   ? `${convertMillionToBillion(details[item])}B`
//                   : details[item]}
//               </span>
//             </li>
//           );
//         })}
//       </ul>
//     </Card>
//   );
// };

// export default Details;
import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

// Function to fetch stock details from Alpha Vantage API
const fetchStockDetails = async (symbol) => {
  const API_KEY = "YOUR_ALPHA_VANTAGE_API_KEY"; // Replace with your Alpha Vantage API key
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stock details:", error);
    return null; // Return null in case of an error
  }
};

const Details = ({ stockSymbol }) => {
  const { darkMode } = useContext(ThemeContext);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const formatToBillion = (number) => {
    if (isNaN(number) || number === null) return "N/A";
    return `${(number / 1000).toFixed(2)}B`;
  };

  useEffect(() => {
    const getStockDetails = async () => {
      setLoading(true);
      setError(null);

      const fetchedDetails = await fetchStockDetails(stockSymbol);

      if (fetchedDetails) {
        setDetails(fetchedDetails);
      } else {
        setError("Failed to fetch stock details.");
      }

      setLoading(false);
    };

    getStockDetails();
  }, [stockSymbol]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y ${
          darkMode ? "divide-gray-800" : "divide-gray-300"
        }`}
      >
        {Object.keys(detailsList).map((item) => (
          <li key={item} className="flex-1 flex justify-between items-center">
            <span>{detailsList[item]}</span>
            <span className="font-bold">
              {item === "marketCapitalization"
                ? formatToBillion(details[item])
                : details[item] || "N/A"}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Details;
