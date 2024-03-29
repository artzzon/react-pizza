import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
import { PaginationContext, PaginationContextType } from "../../App";

type PaginationPropsType = {
  pageCount: number;
};

const Pagination: React.FC<PaginationPropsType> = ({ pageCount }) => {
  const { setCurrentPage } = React.useContext(
    PaginationContext
  ) as PaginationContextType;
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
};

export default Pagination;
