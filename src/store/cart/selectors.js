export const selectItemsInCart = (state) => state.cart;

export const selectItemById = (id) => (state) =>
  state.cart.find((item) => parseInt(item.prodId) === id);
