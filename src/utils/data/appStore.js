import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginDataSlice";
import loginImgReducer from "./loginImgSlice";
import eventsDataReducer from "./eventsDataSlice";
import upcomingEventsreducer from "./UpcomingEventsSlice";

const appStore = configureStore({
  reducer: {
    user: loginReducer,
    imgLink: loginImgReducer,
    events: eventsDataReducer,
    upEvents: upcomingEventsreducer,
  },
});

export default appStore;
