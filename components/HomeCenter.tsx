import { useEffect, useRef } from "react";
import { MutableRefObject } from "react";
import Typed from "typed.js";

export default function HomeCenter({
    refer,
}: {
    refer: MutableRefObject<any>;
}) {
    const name = useRef(null);
    const title = useRef(null);

    // ADDING THE ANIMATION
    useEffect(() => {
        // IMPLEMENTING THE ANIMATION
        const nameTyped = new Typed(name.current, {
            strings: [`Ibraheem Bin Haseeb`],
            typeSpeed: 50,
            showCursor: false,
        });
        const titleTyped = new Typed(title.current, {
            strings: [
                `^2000Full Stack Web Developer, DevOps Enthusiast <br> Data Scientist to be`,
            ],
            typeSpeed: 50,
            showCursor: false,
        });

        // CLEANING UP ALL THE ANIMATIONS WHEN THE COMPONENT IS DISMOUNTED
        return () => {
            nameTyped.destroy();
            titleTyped.destroy();
        };
    }, []);

    return (
        <div
            ref={refer}
            className="flex flex-col items-center justify-center w-2/3 h-1/3 m-0 p-0 gap-5 z-10"
        >
            <h1 ref={name} className="text-4xl m-0 p-0"></h1>
            <p ref={title} className="text-2xl text-center m-0 p-0"></p>
        </div>
    );
}
