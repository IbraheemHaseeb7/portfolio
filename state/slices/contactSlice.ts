import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    name: "",
    email: "",
    description: "",
  },
  reducers: {
    typing: (
      state: { name: string; email: string; description: string },
      {
        payload,
      }: { payload: { name: "name" | "email" | "description"; value: string } }
    ) => {
      state[payload.name] = payload.value;
    },
  },
});

export const { typing } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
