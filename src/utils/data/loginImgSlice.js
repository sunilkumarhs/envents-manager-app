import { createSlice } from "@reduxjs/toolkit";

const LoginImageSlice = createSlice({
  name: "loginImage",
  initialState: null,
  reducers: {
    addImg: (state, action) => {
      return action.payload;
    },
  },
});

export const { addImg } = LoginImageSlice.actions;

export default LoginImageSlice.reducer;
