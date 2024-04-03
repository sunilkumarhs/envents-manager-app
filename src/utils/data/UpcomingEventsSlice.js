import { createSlice } from "@reduxjs/toolkit";

const UpcomingEventsSlice = createSlice({
  name: "upcomingEvents",
  initialState: {
    upCommingEvents: [],
  },
  reducers: {
    addUpEvents: (state, action) => {
      state.upCommingEvents.push(action.payload);
    },
  },
});

export const { addUpEvents } = UpcomingEventsSlice.actions;

export default UpcomingEventsSlice.reducer;
