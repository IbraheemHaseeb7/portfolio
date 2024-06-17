import { Variants, motion } from "framer-motion";
import { off } from "process";

export default function Skill({
    title,
    description,
    skills,
}: {
    title: string;
    description: string;
    skills: Array<{ img: string; name: string }>;
}) {
    const skillVariants: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                delay: 0.25,
                ease: "easeInOut",
                duration: 0.8,
            },
        },
    };

    const titleVariants: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                delay: 0.25,
                ease: "easeInOut",
                duration: 0.8,
            },
        },
    };

    const childrenStagger: Variants = {
        onscreen: {
            transition: {
                delayChildren: 0.25,
                staggerChildren: 0.1,
            },
        },
    };

    const child: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
        },
    };

    return (
        <div className="w-full h-screen flex justify-between items-center max-sm:flex-col max-sm:justify-center">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="w-1/3 h-full flex justify-center items-start flex-col ml-[10rem] gap-5 max-sm:ml-0 max-sm:w-2/3 max-sm:h-1/3"
            >
                <h1 className="font-bold text-3xl max-lg:text-2xl ">{title}</h1>
                <p>{description}</p>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={skillVariants}
                className="w-2/3 h-full flex justify-center items-center max-sm:h-2/3 max-sm:items-start"
            >
                <motion.div
                    initial="onscreen"
                    variants={childrenStagger}
                    className="grid grid-cols-5 justify-items-center items-center gap-8 border-creamy border-2 p-5 rounded-lg max-lg:grid-cols-4 max-md:grid-cols-3"
                >
                    {skills.map((skill: { img: string; name: string }) => {
                        return (
                            <motion.div
                                variants={child}
                                key={skill.name}
                                className="w-[5rem] h-[5rem] flex justify-start items-center flex-col max-sm:w-[3.5rem] max-sm:h-[3.5rem]"
                            >
                                <img
                                    className="w-4/5 h-4/5 object-contain"
                                    src={skill.img}
                                    alt={skill.name}
                                />
                                <p className="h-1/5 m-0 max-sm:text-xs">
                                    {skill.name}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}
