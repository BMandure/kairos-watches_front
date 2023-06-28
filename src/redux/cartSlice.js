import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      if (!state.some((product) => product.id === action.payload.id)) {
        const product = { ...action.payload, qty: 1 };
        state.push(product);
      }
    },
    addItemQty(state, action) {
      state.map((product) => {
        if (
          product.id === action.payload.productId &&
          product.qty < product.stock
        ) {
          product.qty = product.qty + 1;
        }
      });
    },
    restItemQty(state, action) {
      state.map((product) => {
        if (product.id === action.payload.productId && product.qty > 1) {
          product.qty = product.qty - 1;
        }
      });
    },
    deleteItem(state, action) {
      const productIndex = state.findIndex(
        (p) => p._id === action.payload.productId
      );
      if (productIndex !== -1) {
        state.splice(productIndex, 1);
      }
    },
    clearCart(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, deleteItem, addItemQty, restItemQty, clearCart } =
  actions;
export default reducer;
