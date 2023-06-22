import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem } = actions;
export default reducer;
