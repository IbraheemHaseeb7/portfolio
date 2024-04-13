"use client";

import Projects from "@/components/Projects";
import Transition from "@/components/Transition";

export default function Work() {
    const projects: {
        title: string;
        technologies: string;
        image: string;
        id: string;
    }[] = [
        {
            title: "POS System",
            technologies:
                "Electron JS, Node JS, Supabase (SQL Database), Plot JS",
            image: "/projects/bg.jpg",
            id: "pos-system",
        },
        {
            title: "POS System",
            technologies: "A point of sale system for a local business.",
            image: "/projects/bg.jpg",
            id: "business-site",
        },
        {
            title: "POS System",
            technologies: "A point of sale system for a local business.",
            image: "/projects/bg.jpg",
            id: "ieee-portal",
        },
        {
            title: "POS System",
            technologies: "A point of sale system for a local business.",
            image: "/projects/bg.jpg",
            id: "trip-planner",
        },
        {
            title: "POS System",
            technologies: "A point of sale system for a local business.",
            image: "/projects/bg.jpg",
            id: "trip-planneqwer",
        },
    ];

    return (
        <Transition name="Projects">
            <main className="min-h-[100vh] bg-backgroundy w-full flex justify-center items-start">
                <Projects projects={projects} />
            </main>
        </Transition>
    );
}
