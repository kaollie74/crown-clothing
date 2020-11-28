import { createSelector } from "reselect";

// input selector , output selector

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], // <== cart  coming from state reducer
  (cart) => cart.cartItems
);

export const selectcartItemsCount = createSelector(
  [selectCartItems], // <== cart items coming from selected cart Items.
  (cartItems) =>
    cartItems.reduce(
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
      0
    )
);
