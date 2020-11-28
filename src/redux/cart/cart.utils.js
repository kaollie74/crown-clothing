export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((el) => el.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}; // end addItemToCart

export const removeItemFromCart = (cartItems, carItemToRemove) => {
  const existingCartItem = cartItems.find((el) => el.id === carItemToRemove.id);
// if the quantity is 1 we will remove the entire item from the cartItems array.
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== carItemToRemove.id);
  }
// if the quantity > 1 than we will just subtract 1 from the quantity value.
  return cartItems.map((cartItem) =>
    cartItem.id === carItemToRemove.id // target the item that we want to subtract from. 
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}; // end removeItemFromCart()
