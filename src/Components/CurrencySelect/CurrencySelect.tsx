import React from "react";
import { countryList } from "../Container/countryList";
import styles from "./CurrencySelect.module.css";

type CurrencySelectT = {
  state: {
    currency: string;
    image: string;
    amount: number;
  };
  handleChange: (items: {
    currency: string;
    image: string;
    amount: number;
  }) => void;
};

export const CurrencySelect = ({ state, handleChange }: CurrencySelectT) => {
  return (
    <div className={styles.select_wrapper}>
      <img src={`https://flagcdn.com/w80/${state.image}.png`} alt="flag" />
      <select
        value={state.currency}
        onChange={(e) =>
          handleChange({
            ...state,
            currency: e.target.value,
            image: countryList[e.target.value].toLowerCase(),
          })
        }
      >
        {Object.keys(countryList).map((currency, index) => (
          <option key={index} value={currency} selected>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
