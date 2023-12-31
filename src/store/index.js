import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui-slice";
import thumbnilSlice from "./slices/c1-thumbnil";
import offerCheckSlice from "./slices/offer-check";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    thumbnil: thumbnilSlice.reducer,
    offerChecker: offerCheckSlice.reducer,
  },
});

export default store;
