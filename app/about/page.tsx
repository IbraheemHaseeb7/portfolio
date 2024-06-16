"use client";

import Transition from "@/components/Transition";
import Spline from "@splinetool/react-spline";
import { useSelector } from "react-redux";
import Options from "@/components/Options";

export default function About() {
    const data = [
        {
            heading: "Full Stack Developer at CodeSuite",
            description:
                "Built a prototype for an ads application using AWS services (EC2, RDS). Managed an desktop healthcare application, deploying endpoints on AWS(Lambda, API Gateway)",
            icon: "https://prod.spline.design/nec1G9WRYrzv9Wb4/scene.splinecode",
        },
        {
            heading: "DevOps with AWS and Azure",
            description:
                "After covering MERN stack, I have been exploring more and more frameworks like SpringBoot. Furthermore, learning Docker, Kubernetes, Jenkins, Github Actions, and more.",
            icon: "https://prod.spline.design/jSrGfcVWoQ9Jtf-q/scene.splinecode",
        },
        {
            heading: "MLSA Beta Ambassador",
            description:
                "Delivered workshops on Azure and services, Git, and Github. Organized a hackathon with more than 50 participants.",
            icon: "https://prod.spline.design/jSrGfcVWoQ9Jtf-q/scene.splinecode",
        },
        {
            heading: "IEEE RAS Student Chapter Tech Lead",
            description:
                "Delivered workshops on Git, GitHub, Rust, Pandas, Springboot, and Azure. Deployed fully functional portal for the community using Supabase.",
            icon: "https://prod.spline.design/jSrGfcVWoQ9Jtf-q/scene.splinecode",
        },
        {
            heading: "Education",
            description:
                "Currently enrolled in Comsats University for BsCS program. Expected graduation year is 2025. Minoring in Aritificial Intelligence. Courses include Machine Learning, Data Warehousing, Image Processing, Data Mining, and more.",
            icon: "https://prod.spline.design/XSO8pWji1EwnudqI/scene.splinecode",
        },
    ];

    const stateSelector = useSelector((state: any) => {
        return {
            option: state.options,
            contact: state.contacts,
        };
    });

    return (
        <Transition name="About">
            <div className="w-full min-h-[500vh] select-none bg-backgroundy">
                <Options isShowing={stateSelector.option.isOpen} />

                <div className="w-full h-[500vh] relative top-0 left-0 z-10">
                    <div className="w-1/2 h-[500vh]">
                        {data.map(({ heading, description, icon }) => {
                            return (
                                <div
                                    key={heading}
                                    className="h-1/5 flex justify-center items-center flex-col gap-3"
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
                    <Spline scene="/objects/scene.splinecode" />
                </div>
            </div>
        </Transition>
    );
}
