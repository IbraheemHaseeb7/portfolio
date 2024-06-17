"use client";

import { Suspense } from "react";
import { MySpline } from "./MySpline";

export default function AboutMeModel() {
    return (
        <div className="fixed top-0 right-0 w-1/2 h-screen -z-1 opacity-100 select-none">
            <Suspense fallback={<div>Loading...</div>}>
                <MySpline scene="/objects/aboutme.splinecode" />
            </Suspense>
        </div>
    );
}
