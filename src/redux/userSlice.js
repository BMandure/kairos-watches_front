import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    removeToken(state, action) {
      console.log("borrando token");
      return null;
    },
  },
});

export const { setToken, removeToken } = userSlice.actions;
export default userSlice.reducer;
