import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../action/index";

const initialState = {
  isLoading: false,
  error: null,
  flights: [],
  path: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setPath(state, { payload }) {
      state.path = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlight.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlight.rejected, (state, { error }) => {
      (state.isLoading = false), (state.error = error.message);
    });
    builder.addCase(getFlight.fulfilled, (state, { payload }) => {
      (state.isLoading = false),
        (state.error = null),
        (state.flights = payload);
    });
  },
});

export default flightSlice.reducer;

export const { setPath } = flightSlice.actions;
