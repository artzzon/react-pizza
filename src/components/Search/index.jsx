import React from "react";
import styles from "./Search.module.scss";
import { PaginationContext, SearchContext } from "../../App";
import debounce from "lodash.debounce";

export default function Search() {
  const [localSearchValue, setLocalSearchValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const { setCurrentPage } = React.useContext(PaginationContext);

  const onChangeLocalValue = (e) => {
    setLocalSearchValue(e.target.value);
    onChangeValue(e.target.value);
    setCurrentPage(1);
  };

  const onClickClear = () => {
    setSearchValue("");
    setLocalSearchValue("");
  };

  const onChangeValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
      setCurrentPage(1);
    }, 500),
    []
  );

  return (
    <div className={styles.root}>
      <input
        type="text"
        className={styles.input}
        placeholder="Поиск пицц..."
        value={localSearchValue}
        onChange={(e) => onChangeLocalValue(e)}
      />
      {localSearchValue && (
        <svg
          className={styles.icon}
          onClick={onClickClear}
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
