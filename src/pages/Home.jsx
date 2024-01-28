import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import { CategoryContext } from "../App";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loading, isLoading] = React.useState(true);
  const { activeCategory } = React.useContext(CategoryContext);

  React.useEffect(() => {
    fetch(
      `https://e68369cd08c98611.mokky.dev/items${
        activeCategory !== 0 ? "?category=" + activeCategory : ""
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        isLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory]);

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
