export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((el) => el.id === cartItemToAdd.id);
  if (existingCartItem) {
    console.log("inside if");
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
