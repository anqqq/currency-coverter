import React from "react";
import "./App.css";
import { CurrencyInput } from "./Components/CurrencyInput/CurrencyInput";
import Exchange from "./Images/PNG/exchange.png";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <p className="header">Currency Converter</p>
        <CurrencyInput label="Enter amount" />
        <img className="exchange_icon" src={Exchange} alt="Exchange currency" />
        <CurrencyInput label="You get" />
      </div>
    </div>
  );
}

export default App;
