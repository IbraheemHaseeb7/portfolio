"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorTracker() {
    const [cursor, setCursor] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursor({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: cursor.x - 20,
            y: cursor.y - 20,
            transition: {
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            animate="default"
            className="w-12 h-12 bg-white rounded-full fixed top-0 left-0 mix-blend-difference pointer-events-none z-30"
        ></motion.div>
    );
}
