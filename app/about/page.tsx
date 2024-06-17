import AboutMeDescription from "@/components/AboutMeDescription";
import AboutMeModel from "@/components/AboutMeModel";
import Transition from "@/components/Transition";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
};

export default function About() {
    const data: { heading: string; description: string; icon: string }[] = [
        {
            heading: "Full Stack Developer at CodeSuite",
            description:
                "Built a prototype for an ads application using AWS services (EC2, RDS). Managed an desktop healthcare application, deploying endpoints on AWS(Lambda, API Gateway)",
            icon: "/objects/world.splinecode",
        },
        {
            heading: "DevOps with AWS and Azure",
            description:
                "After covering MERN stack, I have been exploring more and more frameworks like SpringBoot. Furthermore, learning Docker, Kubernetes, Jenkins, Github Actions, and more.",
            icon: "/objects/laptop.splinecode",
        },
        {
            heading: "MLSA Beta Ambassador",
            description:
                "Delivered workshops on Azure and services, Git, and Github. Organized a hackathon with more than 50 participants.",
            icon: "/objects/laptop.splinecode",
        },
        {
            heading: "IEEE RAS Student Chapter Tech Lead",
            description:
                "Delivered workshops on Git, GitHub, Rust, Pandas, Springboot, and Azure. Deployed fully functional portal for the community using Supabase.",
            icon: "/objects/laptop.splinecode",
        },
        {
            heading: "Education",
            description:
                "Currently enrolled in Comsats University for BsCS program. Expected graduation year is 2025. Minoring in Aritificial Intelligence. Courses include Machine Learning, Data Warehousing, Image Processing, Data Mining, and more.",
            icon: "/objects/education.splinecode",
        },
    ];

    return (
        <Transition name="About">
            <div className="w-full min-h-[500vh] select-none bg-backgroundy">
                <div className="w-full h-[500vh] relative top-0 left-0 z-10">
                    <AboutMeDescription data={data} />
                </div>
                <AboutMeModel />
            </div>
        </Transition>
    );
}
