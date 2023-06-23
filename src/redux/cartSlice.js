import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      if (state.some((product) => product.id === action.payload.id)) {
        console.log("already in cart");
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      const productIndex = state.findIndex(
        (p) => p._id === action.payload.productId
      );
      console.log(productIndex);
      if (productIndex !== -1) {
        state.splice(productIndex, 1);
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, deleteItem } = actions;
export default reducer;
