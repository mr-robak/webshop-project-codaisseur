export function addToCart(id) {
  return {
    type: "ADD_TO_CART",
    payload: {
      productId: id,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      productId: id,
    },
  };
}

export function emptyCart() {
  return {
    type: "EMPTY_CART",
    payload: {},
  };
}
