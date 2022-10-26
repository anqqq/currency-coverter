import React from "react";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import styles from "./CurrencyInput.module.css";

type CurrencyInputT = {
  labelCurrency: string;
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

export const CurrencyInput = ({
  labelCurrency,
  state,
  handleChange,
}: CurrencyInputT) => {
  return (
    <div className={styles.inputs}>
      <p className={styles.label}>{labelCurrency}</p>
      <CurrencySelect state={state} handleChange={handleChange} />
      <p className={styles.label}>
        {labelCurrency === "From" ? "Enter amount" : "You'll get"}
      </p>
      <input
        className={styles.input}
        type="text"
        value={state.amount}
        onChange={(e) =>
          handleChange({
            ...state,
            amount: +e.target.value.replace(/\D/g, ""),
          })
        }
      />
    </div>
  );
};
