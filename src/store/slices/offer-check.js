import { createSlice } from "@reduxjs/toolkit";

const offerCheckSlice = createSlice({
  name: "offerChecker",
  initialState: {
    isValid: true,
  },
  reducers: {
    changeStatus(state, action) {
      state.isValid = action.payload;
    },
  },
});

export const offerAction = offerCheckSlice.actions;
export default offerCheckSlice;
