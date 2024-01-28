import React from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={styles.root}>
      <input
        type="text"
        className={styles.input}
        placeholder="Поиск пицц..."
        value={searchValue}
        onChange={(e) => onChangeValue(e)}
      />
      {searchValue && (
        <svg
          className={styles.icon}
          onClick={() => setSearchValue("")}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M7 17L16.8995 7.10051"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7.00001L16.8995 16.8995"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
