"use client";

import { Suspense } from "react";
import { MySpline } from "./MySpline";

export default function AboutMeModel() {
    return (
        <div className="fixed top-0 right-0 w-1/3 h-[calc(100vh-2rem)] mt-[5rem] mr-[2rem] -z-1 opacity-100 select-none max-lg:mr-5">
            <Suspense fallback={<div>Loading...</div>}>
                <MySpline scene="/objects/my_avatar.spline" />
            </Suspense>
        </div>
    );
}
