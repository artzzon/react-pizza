import React from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

export default function Search() {
  const { seachValue, setSearchValue } = React.useContext(SearchContext);

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      type="text"
      className={styles.root}
      placeholder="Поиск пицц..."
      value={seachValue}
      onChange={(e) => onChangeValue(e)}
    />
  );
}
