import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
import { PaginationContext } from "../../App";

export default function Pagination({ pageCount }) {
  const { setCurrentPage } = React.useContext(PaginationContext);
  return (
    <ReactPaginate
      className={styles.ul}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
