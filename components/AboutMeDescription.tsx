"use client";

import { MySpline } from "./MySpline";

export default function AboutMeDescription({
    data,
}: {
    data: { heading: string; description: string; icon: string }[];
}) {
    return (
        <div className="w-1/2 h-[500vh] max-lg:w-2/3">
            {data.map(({ heading, description, icon }) => {
                return (
                    <div
                        key={heading}
                        className="w-2/3 h-1/5 flex justify-center items-center flex-col ml-[5rem] max-lg:ml-5 max-lg:w-full"
                    >
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-3xl w-[calc(100%-5rem)] text-creamy">
                                {heading}
                            </h1>

                            <MySpline
                                style={{
                                    width: "5rem",
                                    height: "5rem",
                                }}
                                scene={icon}
                            />
                        </div>
                        <p className="w-full text-creamy">{description}</p>
                    </div>
                );
            })}
        </div>
    );
}
