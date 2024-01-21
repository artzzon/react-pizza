import React from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeCategory, setActiveCategory] = React.useState("Все");

  const onClickActiveCategory = (e) => {
    const category = e.target.innerText;
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={(e) => onClickActiveCategory(e)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
