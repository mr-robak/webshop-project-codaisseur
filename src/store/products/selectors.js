export const selectAllProducts = (state) => state.products;

export const selectProductById = (id) => (state) =>
  state.products.find((product) => product.id === id);
