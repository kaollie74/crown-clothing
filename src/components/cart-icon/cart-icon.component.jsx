import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectcartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
//     0
//   ),
// });
// const mapStateToProps = (state) => ({
//   itemCount: selectcartItemsCount(state)
// });
const mapStateToProps = createStructuredSelector({
  itemCount: selectcartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
