import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: {
      blur: 10,
    },
  },
  reducers: {
    increment: (state) => {
      state.value.blur += 1;
    },
    decrement: (state) => {
      state.value.blur -= 1;
    },
    change: (state, action) => {
      state.value.blur = action.payload;
    },
  },
});

export const { increment, decrement, change } = filterSlice.actions;

export default filterSlice.reducer;
