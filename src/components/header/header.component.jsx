import React from "react";
import { connect } from "react-redux"; // gives us access to the store state;

import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  // OptionDiv,
} from "./header.styles";

// import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
      ) : (
        <OptionLink  to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden ? <CartDropdown /> : null}
  </HeaderContainer>
);

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Header);
