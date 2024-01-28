import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import { CategoryContext, SearchContext, SortContext } from "../App";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loading, isLoading] = React.useState(true);
  const { activeCategory } = React.useContext(CategoryContext);
  const { selectedSort, sortObjNames } = React.useContext(SortContext);
  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    isLoading(true);
    fetch(
      `https://e68369cd08c98611.mokky.dev/items?sortBy=${
        Object.values(sortObjNames)[selectedSort]
      }
      ${activeCategory !== 0 ? "&category=" + activeCategory : ""}
      ${searchValue.length !== 0 ? `&title=*${searchValue}` : ""}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        isLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, selectedSort, sortObjNames, searchValue]);

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
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
