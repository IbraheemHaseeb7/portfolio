import { MutableRefObject } from "react";
import { TypeAnimation } from "react-type-animation";

export default function HomeCenter({
    refer,
}: {
    refer: MutableRefObject<any>;
}) {
    return (
        <div
            ref={refer}
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
