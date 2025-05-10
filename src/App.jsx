import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  return (
    <>
      <Navbar onCurrencyChange={handleCurrencyChange} />
      <Products currency={currency} />
    </>
  );
};

export default App;
