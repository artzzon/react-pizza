import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../redux/slices/filterSlice";
import React from "react";
const categories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state) => state.filterSlice.activeCategory
  );

  const onClickActiveCategory = (category: number) => {
    dispatch(setActiveCategory(category));
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
};

export default Categories;
