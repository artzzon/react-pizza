import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/pizzas.json";
import "./scss/app.scss";

function App() {
  // fetch(
  //   "https://file.notion.so/f/f/b3238354-86d5-4ba6-9ad7-eb01112a9acd/36ad4e93-800e-451b-9831-ae6abe1b28ef/pizzas.json?id=e934efcc-4042-481d-9d73-76f227f1696e&table=block&spaceId=b3238354-86d5-4ba6-9ad7-eb01112a9acd&expirationTimestamp=1706032800000&signature=rUHK_uizY3L13j9RXUJuKiU_OBXz7Ld8Dm9eBsRp7MY&downloadName=pizzas.json"
  // )
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
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
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
