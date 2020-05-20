export const selectAllProducts = (state) => state.products;

export const selectProductById = (id) => (state) =>
  state.products.find((product) => product.id === id);

export const selectAllTags = (state) => {
  // flattens an array of arrays
  const selection = [...state.products].map((prod) => prod.tags).flat();
  // removes duplicates
  return selection.reduce((accumulator, item) => {
    return accumulator.includes(item) ? accumulator : [...accumulator, item];
  }, []);
};
