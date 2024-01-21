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
  const [activeCategory, setActiveCategory] = React.useState(0);

  const onClickActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={category}
            className={i === activeCategory ? "active" : ""}
            onClick={() => onClickActiveCategory(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
