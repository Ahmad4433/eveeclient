import { createSlice } from "@reduxjs/toolkit";

const thumbnilSlice = createSlice({
  name: "thumbnil",
  initialState: { imgIndex: 0 },
  reducers: {
    changeIndex(state, action) {
      state.imgIndex = action.payload;
    },
  },
});

export const thumbnilActions = thumbnilSlice.actions;
export default thumbnilSlice;
