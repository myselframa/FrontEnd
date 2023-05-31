import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const exisitngCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existinCartItem = state.items[exisitngCartItemIndex];
    let updatedItems;
    if (existinCartItem) {
      const updatedItem = {
        ...existinCartItem,
        amount: existinCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exisitngCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const exisitngCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existinItem = state.items[exisitngCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existinItem.price;
    let updatedItems;
    if (existinItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existinItem, amount: existinItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exisitngCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, disatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    disatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    disatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
