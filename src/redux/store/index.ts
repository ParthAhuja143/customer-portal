// store.ts
import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import { customersReducer, photosReducer } from "../reducer";

export const store = configureStore({
  reducer: {
    customers: customersReducer,
    photos: photosReducer,
  },
  //@ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
