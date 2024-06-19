"use client";

import NavButton from "./NavButton";
import OptionButton from "./OptionButton";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { click, getOptionsSelector } from "@/state/slices/optionsSlice";

export default function Options() {
    const options = useSelector((state: any) => getOptionsSelector(state));

    const buttons = [
        { name: "Home", link: "/" },
        { name: "About Me", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Projects", link: "/projects" },
    ];
    const optionsContainer: any = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        optionsContainer.current.style = options.isOpen
            ? `right: 0;`
            : `right: 100%`;
    }, [options.isOpen]);

    function closeFunction() {
        dispatch(click());
    }

    return (
        <div
            ref={optionsContainer}
            className="w-full h-screen border-solid border-2 border-pinky fixed bg-backgroundy z-20 overflow-hidden flex flex-col items-center justify-start right-full ease duration-150"
        >
            <div className="w-full h-24 grid grid-cols-nav">
                <NavButton
                    type="button"
                    name="Back"
                    direction="right"
                    style="col-start-3 col-end-4"
                    func={(e: any) => {
                        e.preventDefault();
                        dispatch(click());
                    }}
                />
            </div>
            <div className="flex flex-col gap-5 h-3/6 justify-end items-center">
                {buttons.map(({ name, link }) => {
                    return (
                        <OptionButton
                            key={name}
                            name={name}
                            link={link}
                            closeFunction={closeFunction}
                        />
                    );
                })}
            </div>
        </div>
    );
}
