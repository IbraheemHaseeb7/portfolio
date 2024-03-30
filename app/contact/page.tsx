"use client";

import ContactForm from "@/components/ContactForm";
import Options from "@/components/Options";
import Transition from "@/components/Transition";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Contact() {
    let [isLoaded, setIsLoaded] = useState(0);
    const stateSelector = useSelector((state: any) => {
        return {
            option: state.options,
            contact: state.contacts,
        };
    });

    function loading(e: any) {
        setIsLoaded(++isLoaded);
    }

    return (
        <Transition name="Contact">
            <div className="min-h-screen w-full bg-backgroundy">
                {isLoaded !== 2 && (
                    <div className="flex justify-center bg-backgroundy items-center w-full h-screen fixed top-0 left-0 z-10">
                        <div className="fixed z-20">
                            <h1 className="text-creamy">Loading...</h1>
                        </div>
                    </div>
                )}
                <Options isShowing={stateSelector.option.isOpen} />
                <div className="absolute w-full h-screen top-0 right-0 flex justify-center items-center">
                    <ContactForm stateSelector={stateSelector} />
                    <div className="w-1/2 h-screen">
                        <Spline
                            onLoad={loading}
                            scene="https://prod.spline.design/aCIiu4ddwLxpCmpT/scene.splinecode"
                        />
                    </div>
                </div>
            </div>
        </Transition>
    );
}
