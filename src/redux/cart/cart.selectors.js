import { createSelector } from "reselect";

// input selector , output selector

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], // <== cart  coming from state reducer
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectcartItemsCount = createSelector(
  [selectCartItems], // <== cart items coming from selected cart Items.
  (cartItems) =>
    cartItems.reduce(
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumlatedTotal, cartItem) =>
      accumlatedTotal + cartItem.quantity * cartItem.price,
    0
  )
);
