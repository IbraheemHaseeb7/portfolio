"use client";

import { useEffect, useRef } from "react";
import HomeCenter from "../components/HomeCenter";
import Options from "../components/Options";
import { useSelector } from "react-redux";
import Transition from "@/components/Transition";

export default function Home() {
    const cursor: any = useRef();
    const page: any = useRef();
    const homeCenter: any = useRef();

    // GETTING THE STATE VALUES
    const stateSelector = useSelector((state: any) => {
        return {
            icons: state.icons,
            cursor: state.cursor,
            options: state.options,
            contacts: state.contacts,
        };
    });

    // REGISTERING AND REMOVING EVENT FOR MOUSE MOVEMENT DETECTION
    useEffect(() => {
        // ADDING THE EVENT
        page.current.addEventListener("mousemove", mouseMovement);
    }, []);

    // GETTING MOUSE COORDINATES AND UPDATING CURSOR
    function mouseMovement(e: any) {
        e.preventDefault();

        // CHANGING THE POSITION OF THE CUSTOM CURSOR DEPENDING UPON LOCATION OF MOUSE
        cursor.current.style = `top: ${e.pageY - 20}px; left: ${
            e.pageX - 20
        }px`;

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
                <Options isShowing={stateSelector.options.isOpen} />
                <HomeCenter refer={homeCenter} />

                {/*CURSOR ATTEMPT*/}
                <div
                    ref={cursor}
                    className="w-12 h-12 bg-white rounded-full fixed top-1/2 mix-blend-difference pointer-events-none ease duration-100 z-30"
                ></div>

                {/*BACKGROUND ICONS ATTEMPT*/}
                <div
                    className="fixed w-full h-screen flex justify-center items-center blur z-1 select-none text-pinky opacity-40 ease duration-100 bg-icons"
                    dangerouslySetInnerHTML={{
                        __html: stateSelector.icons.icon,
                    }}
                ></div>
            </div>
        </Transition>
    );
}
