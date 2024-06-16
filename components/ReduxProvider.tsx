"use client";

import { Provider } from "react-redux";
import { store } from "../state/store/store";

export default function ReduxProvider({ children }: { children: any }) {
    return <Provider store={store}>{children}</Provider>;
}
