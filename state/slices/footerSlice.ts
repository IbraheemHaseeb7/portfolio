import { createSlice } from "@reduxjs/toolkit";

export const iconsSlicer = createSlice({
    name: "icons",
    initialState: {
        icon: "",
    },
    reducers: {
        setIcon: (state, action) => {
            state.icon = action.payload;
        },
    },
});

export const { setIcon } = iconsSlicer.actions;
export const getIconSelector = (state: any) => state.icons;
export const iconReducer = iconsSlicer.reducer;
