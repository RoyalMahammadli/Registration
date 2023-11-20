import { configureStore } from "@reduxjs/toolkit";
import mainInfoSlice from "./slices/mainInfoSlice";
export const store = configureStore({
  reducer: {
    mainInfo: mainInfoSlice
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
