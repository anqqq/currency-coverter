import React from "react";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import styles from "./CurrencyInput.module.css";

interface CurrencyInputI {
  label: string;
}

export const CurrencyInput = ({ label }: CurrencyInputI) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <div className={styles.inputs}>
        <CurrencySelect />
        <input className={styles.input} type="text" />
      </div>
    </div>
  );
};
