import { createSlice } from "@reduxjs/toolkit";

const old = {
  filters: [Konva.Filters.Blur, Konva.Filters.Noise, Konva.Filters.Sepia],
  blurRadius: 2,
  noise: 0.1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: {},
  },
  reducers: {
    // increment: (state) => {
    //   state.value.blur += 1;
    // },
    // decrement: (state) => {
    //   state.value.blur -= 1;
    // },
    // change: (state, action) => {
    //   state.value.blur = action.payload;
    // },
    old: (state) => {
      state.value = old;
    },
  },
});

export const { increment, decrement, change } = filterSlice.actions;

export default filterSlice.reducer;
