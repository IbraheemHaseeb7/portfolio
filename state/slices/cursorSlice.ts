import { createSlice } from "@reduxjs/toolkit";

const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    X: 0,
    Y: 0,
  },
  reducers: {
    setCoordinates: (state, action) => {
      state.X = action.payload.X;
      state.Y = action.payload.Y;
    },
  },
});

export const { setCoordinates } = cursorSlice.actions;
export const cursorReducer = cursorSlice.reducer;
