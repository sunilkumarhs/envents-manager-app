import { createSlice } from "@reduxjs/toolkit";

const eventsDataSlice = createSlice({
  name: "events",
  initialState: {
    detailsLink: null,
    recomendedData: null,
  },
  reducers: {
    addDetails: (state, action) => {
      state.detailsLink = action.payload;
    },
    addRecData: (state, action) => {
      state.recomendedData = action.payload;
    },
  },
});

export const { addDetails, addRecData } = eventsDataSlice.actions;

export default eventsDataSlice.reducer;
