import { Dispatch } from "react";
import { OrderActions } from "../reducer/order-reducer";
import type { MenuItem } from "../types";
type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  const { name, price } = item;
  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{name}</p>
      <p className="font-black">${price}</p>
    </button>
  );
};

export default MenuItem;
