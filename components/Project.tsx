export default function Project({
    img,
    technologies,
    title,
}: {
    img: string;
    technologies: string;
    title: string;
}) {
    return (
        <div className="h-[25rem] flex justify-center items-center flex-col gap-3">
            <div
                className="relative w-full h-[20rem] overflow-hidden cursor-pointer"
                onMouseEnter={(e) => {
                    const lastChild = e.currentTarget.lastChild as HTMLElement;
                    lastChild.style.top = "0";
                }}
                onMouseLeave={(e) => {
                    const lastChild = e.currentTarget.lastChild as HTMLElement;
                    lastChild.style.top = "100%";
                }}
            >
                <img
                    className="w-full object-cover h-full border-2 border-pinky rounded-md"
                    src={img}
                    alt="image"
                />
                <div className="w-full h-full absolute top-full left-0 flex justify-center items-center bg-pinky transition-all duration-200 rounded-md">
                    <p className="w-[90%] text-center text-creamy">
                        {technologies}
                    </p>
                </div>
            </div>
            <h3 className="text-creamy">{title}</h3>
        </div>
    );
}
