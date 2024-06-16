import { configureStore } from "@reduxjs/toolkit";
import { iconReducer } from "@/state/slices/footerSlice";
import { optionReducer } from "@/state/slices/optionsSlice";
import { contactReducer } from "../slices/contactSlice";

export const store = configureStore({
    reducer: {
        icons: iconReducer,
        options: optionReducer,
        contacts: contactReducer,
    },
});
