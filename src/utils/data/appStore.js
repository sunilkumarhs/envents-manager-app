import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginDataSlice";
import loginImgReducer from "./loginImgSlice";
import eventsDataReducer from "./eventsDataSlice";

const appStore = configureStore({
  reducer: {
    user: loginReducer,
    imgLink: loginImgReducer,
    events: eventsDataReducer,
  },
});

export default appStore;
