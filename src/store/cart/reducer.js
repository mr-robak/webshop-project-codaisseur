const initialState = [
  { prodId: "1", amount: 3 },
  { prodId: "2", amount: 1 },
];

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
    case "XXXXXX":
      return state;

    default: {
      return state;
    }
  }
}
