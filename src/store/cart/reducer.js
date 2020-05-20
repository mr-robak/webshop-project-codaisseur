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
      // console.log("id", id);
      // console.log("state", state);

      const itemIndex = state.indexOf(
        state.find((item) => {
          return item.prodId === id;
        })
      );

      if (itemIndex >= 0) {
        // console.log("itemIndex", itemIndex);
        // console.log("[...state][itemIndex].amount", [...state][itemIndex].amount);
        const updatedCart = [...state];
        updatedCart.splice(itemIndex, 1, {
          prodId: id,
          amount: [...state][itemIndex].amount + 1,
        });
        // console.log("updatedCart", updatedCart);
        return [...updatedCart];
      } else {
        return [...state, { prodId: id, amount: 1 }];
      }
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload.productId.toString();
      //store value of item in cart
      const item = state.find((item) => item.prodId === id);
      //reduce amount by 1
      item.amount--;
      return [...state, item];
    }
    default: {
      return state;
    }
  }
}
