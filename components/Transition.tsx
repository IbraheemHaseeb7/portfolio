"use client";

import { motion } from "framer-motion";
import Greetings from "@/components/Greetings";

/**
 * @function Transition
 *
 * ### name
 * Pass the name of the page where you are using this component
 *
 * ### bg_color
 * Pass the color of the background of transition animation in hex code
 *
 * ### text_color
 * Pass the color of the text on transition animation page in tailwind css
 * */
export default function Transition({
    children,
    name,
    bg_color,
    text_color,
}: {
    children?: any;
    name: string;
    bg_color?: string;
    text_color?: string;
}) {
    return (
        <>
            <motion.div
                className="w-screen h-full flex justify-center items-center absolute z-20 bg-slate-50"
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 1, ease: [0.24, 1, 0.36, 1] }}
                style={{ backgroundColor: bg_color }}
            >
                <Greetings text={name} additional_tw_styling="text-slate-800" />
            </motion.div>
            {children}
        </>
    );
}
