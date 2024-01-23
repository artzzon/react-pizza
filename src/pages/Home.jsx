import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/PizzaBlockSkeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [loading, isLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://e68369cd08c98611.mokky.dev/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        isLoading(false);
      });
  }, []);

  return (
    <>
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
    </>
  );
};

export default Home;
