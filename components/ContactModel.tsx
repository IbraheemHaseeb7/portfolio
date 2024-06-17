"use client";

import { Suspense } from "react";
import { MySpline } from "./MySpline";

export default function ContactModel() {
    return (
        <div className="w-1/2 h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <MySpline scene="/objects/contact.splinecode" />
            </Suspense>
        </div>
    );
}
