"use client";

import Transition from "@/components/Transition";
import Spline from "@splinetool/react-spline";

export default function About() {
    const data = [
        {
            heading: "Full Stack Developer at CodeSuite",
            description: "",
            icon: "https://prod.spline.design/nec1G9WRYrzv9Wb4/scene.splinecode",
        },
        {
            heading: "Data Science Intern at OneCrew Technologies",
            description: "",
            icon: "https://prod.spline.design/nec1G9WRYrzv9Wb4/scene.splinecode",
        },
        {
            heading: "DevOps with AWS and Azure",
            description:
                "After covering MERN stack, I have been exploring more and more frameworks like SpringBoot. Furthermore, I really love the idea of DevOps. I ",
            icon: "https://prod.spline.design/jSrGfcVWoQ9Jtf-q/scene.splinecode",
        },
        {
            heading: "MLSA Beta Ambassador",
            description:
                "After covering MERN stack, I have been exploring more and more frameworks like SpringBoot. Furthermore, I really love the idea of DevOps. I ",
            icon: "https://prod.spline.design/jSrGfcVWoQ9Jtf-q/scene.splinecode",
        },
        {
            heading: "IEEE RAS Student Chapter Tech Lead",
            description:
                "After covering MERN stack, I have been exploring more and more frameworks like SpringBoot. Furthermore, I really love the idea of DevOps. I ",
            icon: "https://prod.spline.design/jSrGfcVWoQ9Jtf-q/scene.splinecode",
        },
        {
            heading: "Education",
            description:
                "Currently enrolled in Comsats University for BsCS program. Expected graduation year is 2025. What I love about my degree is it has given me the opportunity to learn and explore different fields of computer science and software engineering.",
            icon: "https://prod.spline.design/XSO8pWji1EwnudqI/scene.splinecode",
        },
    ];

    return (
        <Transition name="About">
            <div className="w-full min-h-[600vh] select-none bg-backgroundy">
                <div className="w-full h-[600vh] relative top-0 left-0 z-10">
                    <div className="w-1/2 h-[600vh]">
                        {data.map(({ heading, description, icon }) => {
                            return (
                                <div
                                    key={heading}
                                    className="h-1/6 flex justify-center items-center flex-col gap-3"
                                >
                                    <div className="w-2/3 flex gap-5 justify-between items-center">
                                        <h1 className="text-3xl">{heading}</h1>
                                        <Spline
                                            style={{
                                                width: "4rem",
                                                height: "5rem",
                                            }}
                                            scene={icon}
                                        />
                                    </div>
                                    <p className="w-2/3">{description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="fixed top-0 right-0 w-1/2 h-screen -z-1 opacity-100 select-none">
                    <Spline scene="https://prod.spline.design/43NwbyF6cOQQjhSO/scene.splinecode" />
                </div>
            </div>
        </Transition>
    );
}
