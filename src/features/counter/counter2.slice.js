import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 2;
    },
    decrement: (state) => {
      state.count = state.count - 2;
    }
  }
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
