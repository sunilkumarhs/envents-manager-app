import { createSlice } from "@reduxjs/toolkit";

const UpcomingEventsSlice = createSlice({
  name: "upcomingEvents",
  initialState: {
    upCommingEvents: null,
  },
  reducers: {
    addUpEvents: (state, action) => {
      state.upCommingEvents = action.payload;
    },
  },
});

export const { addUpEvents } = UpcomingEventsSlice.actions;

export default UpcomingEventsSlice.reducer;
