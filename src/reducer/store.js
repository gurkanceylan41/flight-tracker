import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slice/flight";

export default configureStore({
  reducer: {
    flightReducer,
  },
});
