import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import Pagination from "../components/Pagination";
import { PaginationContext } from "../App";
import { useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [paginationMeta, setPaginationMeta] = React.useState({});
  const [loading, isLoading] = React.useState(true);
  const activeCategory = useSelector(
    (state) => state.filterSlice.activeCategory
  );
  const selectedSort = useSelector(
    (state) => state.sortSlice.selectedSort.sortProperty
  );
  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const { currentPage } = React.useContext(PaginationContext);

  React.useEffect(() => {
    isLoading(true);
    axios
      .get(
        `https://e68369cd08c98611.mokky.dev/items?sortBy=${selectedSort}&page=${currentPage}&limit=4
      ${activeCategory !== 0 ? "&category=" + activeCategory : ""}
      ${searchValue.length !== 0 ? `&title=*${searchValue}` : ""}`
      )
      .then((res) => {
        setPizzas(res.data.items);
        setPaginationMeta(res.data.meta);
        isLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, selectedSort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination pageCount={paginationMeta?.["total_pages"]} />
    </div>
  );
};

export default Home;
