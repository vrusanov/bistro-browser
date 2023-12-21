import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "./types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};

export const updateCartQuantity = (itemId, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: { itemId, quantity },
  };
};
