import React, { useState, useEffect } from "react";
import styles from "./Container.module.css";
import Exchange from "../../Images/PNG/exchange.png";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";

type currencyStateType = {
  currency: string;
  image: string;
  amount: number;
};

export const Container = () => {
  const [currencyFrom, setCurrencyFrom] = useState<currencyStateType>({
    currency: "BYN",
    image: "by",
    amount: 100,
  });

  const [currencyTo, setCurrencyTo] = useState<currencyStateType>({
    currency: "USD",
    image: "us",
    amount: 0,
  });

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/dc8ea7c96927c39648902138/pair/${currencyFrom.currency}/${currencyTo.currency}/${currencyFrom.amount}`
    )
      .then((response) => response.json())
      .then((result) =>
        setCurrencyTo({
          ...currencyTo,
          amount: result.conversion_result.toFixed(2),
        })
      );
  }, [currencyFrom.currency, currencyTo.currency, currencyFrom.amount]);

  return (
    <div className={styles.container}>
      <p className={styles.header}>Currency Converter</p>
      <div className={styles.converter}>
        <CurrencyInput
          labelCurrency="From"
          state={currencyFrom}
          handleChange={setCurrencyFrom}
        />
        <img className={styles.exchange_icon} src={Exchange} alt="Exchange" />
        <CurrencyInput
          labelCurrency="To"
          state={currencyTo}
          handleChange={setCurrencyTo}
        />
      </div>
    </div>
  );
};
