"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

export default function HomeCenter() {
    const homeCenter: any = useRef();

    const homeCenterVariants: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.8,
            },
        },
    };

    const scrollDownVariants: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: [1, 0, 1],
            transition: {
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
                duration: 2,
            },
        },
    };

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
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={homeCenterVariants}
            ref={homeCenter}
            className="flex flex-col items-center justify-center w-full h-screen m-0 p-0 gap-5 z-10"
        >
            <TypeAnimation
                sequence={["Ibraheem Bin Haseeb"]}
                wrapper="span"
                speed={50}
                className="text-[2rem] max-sm:text-[1.25rem]"
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
                className="text-[1rem] w-4/5 text-center"
                repeat={1}
                cursor={false}
            />
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={scrollDownVariants}
                className="fixed bottom-20"
            >
                <p>Scroll Down</p>
            </motion.div>
        </motion.div>
    );
}
