import { createSlice } from "@reduxjs/toolkit";

const optionsReducer = createSlice({
    name: "options",
    initialState: {
        isOpen: false,
    },
    reducers: {
        click: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { click } = optionsReducer.actions;
export const getOptionsSelector = (state: any) => state.options;
export const optionReducer = optionsReducer.reducer;
