import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginDataSlice";
import loginImgReducer from "./loginImgSlice";

const appStore = configureStore({
  reducer: {
    user: loginReducer,
    imgLink: loginImgReducer,
  },
});

export default appStore;
