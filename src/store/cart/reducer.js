const initialState = [];

/*
  {prodId:  "1",
  amount: 3 },
  {prodId:  "2",
  amount: 1 },
  {prodId:  "3",
  amount: 1 },
*/

export default function cartSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const id = action.payload.productId.toString();
      const itemIndex = state.indexOf(
        state.find((item) => {
          return item.prodId === id;
        })
      );

      if (itemIndex >= 0) {
        const updatedCart = [...state];
        updatedCart.splice(itemIndex, 1, {
          prodId: id,
          amount: [...state][itemIndex].amount + 1,
        });
        return [...updatedCart];
      } else {
        return [...state, { prodId: id, amount: 1 }];
      }
    }
    case "REMOVE_FROM_CART": {
      //product id for removing one item of that product
      const id = action.payload.productId.toString();
      //new state to return
      const newState = [
        ...state.reduce((cart, item) => {
          if (item.prodId === id && item.amount > 1) {
            cart.push({ ...item, amount: --item.amount });
          } else if (item.prodId !== id) {
            cart.push(item);
          }
          return cart;
        }, []),
      ];
      return newState;
    }
    case "EMPTY_CART": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
