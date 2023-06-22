import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      const productIndex = state.findIndex(
        (p) => p._id === action.payload.productId
      );

      if (!productIndex) {
        state.splice(productIndex, 1);
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, deleteItem } = actions;
export default reducer;
