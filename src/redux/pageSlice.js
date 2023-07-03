import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "modalReset",
  initialState: [],
  reducers: {
    resetDB(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = resetSlice;
export const { resetDB } = actions;
export default reducer;
