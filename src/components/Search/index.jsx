import React from "react";
import styles from "./Search.module.scss";

export default function Search() {
  return (
    <input type="text" className={styles.root} placeholder="Поиск пицц..." />
  );
}
