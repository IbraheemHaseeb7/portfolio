"use client";

import { Suspense } from "react";
import { MySpline } from "./MySpline";

export default function ContactModel() {
    return (
        <div className="w-1/2 h-2/3 max-sm:w-full max-sm:h-1/4">
            {/* <Suspense fallback={<div>Loading...</div>}>
                <MySpline scene="/objects/contact.splinecode" />
            </Suspense> */}

            <img
                className="w-full h-full object-contain"
                src="/objects/contactPage.webp"
                alt="contact-page-man"
            />
        </div>
    );
}
