"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

export default function HomeCenter() {
    const homeCenter: any = useRef();

    useEffect(() => {
        window.addEventListener("mousemove", mouseMovement);

        return () => {
            window.removeEventListener("mousemove", mouseMovement);
        };
    }, []);

    function mouseMovement(e: any) {
        e.preventDefault();

        let center = { X: window.innerWidth / 2, Y: window.innerHeight / 2 };

        if (homeCenter.current.style) {
            homeCenter.current.style = `transform: translate(${
                (center.X - e.pageX) / (center.X / 5)
            }px, ${(center.Y - e.pageY) / (center.Y / 5)}px)`;
        }
    }

    return (
        <div
            ref={homeCenter}
            className="flex flex-col items-center justify-center w-2/3 h-1/3 m-0 p-0 gap-5 z-10"
        >
            <TypeAnimation
                sequence={["Ibraheem Bin Haseeb"]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2rem", display: "inline-block" }}
                cursor={false}
                repeat={1}
            />
            <TypeAnimation
                sequence={[
                    1000,
                    "Full Stack Developer, DevOps and MLOps Enthusiast",
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1rem", display: "inline-block" }}
                className=""
                repeat={1}
                cursor={false}
            />
        </div>
    );
}
