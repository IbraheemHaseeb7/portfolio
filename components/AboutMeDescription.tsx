"use client";

import { MySpline } from "./MySpline";

export default function AboutMeDescription({
    data,
}: {
    data: { heading: string; description: string; icon: string }[];
}) {
    return (
        <div className="w-1/2 h-[500vh]">
            {data.map(({ heading, description, icon }) => {
                return (
                    <div
                        key={heading}
                        className="h-1/5 flex justify-center items-center flex-col gap-3"
                    >
                        <div className="w-2/3 flex gap-5 justify-between items-center">
                            <h1 className="text-3xl">{heading}</h1>

                            <MySpline
                                style={{
                                    width: "5rem",
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
    );
}
