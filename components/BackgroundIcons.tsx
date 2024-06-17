"use client";

import { getIconSelector } from "@/state/slices/footerSlice";
import { useSelector } from "react-redux";

export default function BackgroundIcons() {
    const icons = useSelector((state: any) => getIconSelector(state));

    return (
        <div
            className="fixed w-full h-screen flex justify-center items-center blur z-1 select-none text-pinky opacity-40 ease duration-100 bg-icons"
            dangerouslySetInnerHTML={{
                __html: icons.icon,
            }}
        ></div>
    );
}
