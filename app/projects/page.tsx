"use client";

import Projects from "@/components/Projects";
import Transition from "@/components/Transition";

export default function Work() {
    const projects: {
        title: string;
        description: string;
        image: string;
        id: string;
    }[] = [
        {
            title: "POS System",
            description: "A point of sale system for a local business.",
            image: "/projects/bg.jpg",
            id: "pos-system",
        },
    ];

    return (
        <Transition name="Projects">
            <main className="min-h-[100vh] bg-backgroundy">
                <Projects projects={projects} />
            </main>
        </Transition>
    );
}
