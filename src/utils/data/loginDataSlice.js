import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = LoginSlice.actions;

export default LoginSlice.reducer;
