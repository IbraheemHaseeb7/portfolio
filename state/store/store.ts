import { configureStore } from "@reduxjs/toolkit";
import { iconReducer } from "@/state/slices/footerSlice";
import { cursorReducer } from "@/state/slices/cursorSlice";
import { optionReducer } from "@/state/slices/optionsSlice";
import { contactReducer } from "../slices/contactSlice";

export const store = configureStore({
  reducer: {
    icons: iconReducer,
    cursor: cursorReducer,
    options: optionReducer,
    contacts: contactReducer,
  },
});
