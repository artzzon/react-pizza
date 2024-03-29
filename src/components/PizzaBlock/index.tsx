/* eslint-disable react/prop-types */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

type PizzaBlockProps = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
};

const pizzaTypes: string[] = ["тонкое", "традиционное"];
const pizzaSize: number[] = [26, 30, 40];

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  imageUrl,
  price,
  types,
  sizes,
}) => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const cartItem = useSelector((state: RootState) =>
    state.cartSlice.items.find(
      (item) =>
        item.id === id &&
        item.type === pizzaTypes[activeType] &&
        item.size === pizzaSize[activeSize]
    )
  );

  const countItems = cartItem ? cartItem.count : 0;

  const onClickActiveSize = (sizeId: number) => {
    setActiveSize(sizeId);
  };

  const onClickActiveType = (typeId: number) => {
    setActiveType(typeId);
  };

  const onClickAddItem = () => {
    const item = {
      id,
      title,
      imageUrl,
      price,
      type: pizzaTypes[activeType],
      size: pizzaSize[activeSize],
      count: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, i) => (
            <li
              className={i === activeType ? "active" : ""}
              onClick={() => {
                onClickActiveType(type);
              }}
              key={type}
            >
              {pizzaTypes[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              className={i === activeSize ? "active" : ""}
              onClick={() => onClickActiveSize(i)}
              key={size}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          className="button button--outline button--add"
          onClick={onClickAddItem}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{countItems}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
