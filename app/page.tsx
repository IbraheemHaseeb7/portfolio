"use client";

import { useEffect, useRef } from "react";
import HomeCenter from "../components/HomeCenter";
import Options from "../components/Options";
import { useSelector } from "react-redux";
import Transition from "@/components/Transition";
import { getIconSelector } from "@/state/slices/footerSlice";
import { getOptionsSelector } from "@/state/slices/optionsSlice";

export default function Home() {
    const page: any = useRef();
    const homeCenter: any = useRef();

    // GETTING THE STATE VALUES
    const icons = useSelector((state: any) => getIconSelector(state));
    const options = useSelector((state: any) => getOptionsSelector(state));

    // REGISTERING AND REMOVING EVENT FOR MOUSE MOVEMENT DETECTION
    useEffect(() => {
        // ADDING THE EVENT
        const cursorListener = page.current.addEventListener(
            "mousemove",
            mouseMovement
        );

        return () => {
            // REMOVING THE EVENT
            page.current?.removeEventListener("mousemove", cursorListener);
        };
    }, []);

    // GETTING MOUSE COORDINATES AND UPDATING CURSOR
    function mouseMovement(e: any) {
        e.preventDefault();

        // CALCULATING CENTER OF SCREEN
        let center = { X: window.innerWidth / 2, Y: window.innerHeight / 2 };

        // ANIMATING THE HOME CENTER
        homeCenter.current.style = `transform: translate(${
            (center.X - e.pageX) / (center.X / 5)
        }px, ${(center.Y - e.pageY) / (center.Y / 5)}px)`;
    }

    return (
        <Transition name="Home">
            <div
                ref={page}
                className="bg-backgroundy text-creamy m-0 p-0 w-full h-screen overflow-hidden flex justify-center items-center"
            >
                <Options isShowing={options.isOpen} />
                <HomeCenter refer={homeCenter} />

                {/*BACKGROUND ICONS ATTEMPT*/}
                <div
                    className="fixed w-full h-screen flex justify-center items-center blur z-1 select-none text-pinky opacity-40 ease duration-100 bg-icons"
                    dangerouslySetInnerHTML={{
                        __html: icons.icon,
                    }}
                ></div>
            </div>
        </Transition>
    );
}
