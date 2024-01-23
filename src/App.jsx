import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";
import React from "react";
import Skeleton from "./components/PizzaBlock/PizzaBlockSkeleton";

function App() {
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
    <div className="wrapper">
      <Header />
      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
