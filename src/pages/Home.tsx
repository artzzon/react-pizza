import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import Pagination from "../components/Pagination";
import { PaginationContext, PaginationContextType } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../redux/slices/fetchSlice";
import { RootState } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { pizzas, paginationMeta, status } = useSelector(
    (state: RootState) => state.fetchSlice
  );
  const activeCategory = useSelector(
    (state: RootState) => state.filterSlice.activeCategory
  );
  const selectedSort = useSelector(
    (state: RootState) => state.sortSlice.selectedSort.sortProperty
  );
  const searchValue = useSelector(
    (state: RootState) => state.searchSlice.searchValue
  );
  const { currentPage } = React.useContext(
    PaginationContext
  ) as PaginationContextType;
  const getPizzas = () => {
    dispatch(
      fetchPizzas({ selectedSort, currentPage, activeCategory, searchValue })
    );
  };
  React.useEffect(() => {
    getPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, currentPage, searchValue, selectedSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading"
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map(
              (pizza: {
                id: number;
                imageUrl: string;
                price: number;
                sizes: number[];
                title: string;
                types: number[];
              }) => <PizzaBlock key={pizza.id} {...pizza} />
            )}
      </div>
      <Pagination pageCount={paginationMeta?.["total_pages"]} />
    </div>
  );
};

export default Home;
