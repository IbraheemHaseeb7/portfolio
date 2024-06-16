export default function NavButton({
    type,
    name,
    direction,
    style,
    func,
}: {
    type: "button" | "submit" | "reset";
    name: string;
    direction: "left" | "right";
    style: string;
    func: any;
}) {
    return (
        <div
            className={
                direction === "left"
                    ? `flex-row flex items-center gap-4 w-full ${style} -translate-x-10 cursor-pointer
        hover:-translate-x-5 ease duration-100 max-md:-translate-x-[10px]`
                    : `flex-row-reverse flex items-center gap-4 w-full ${style} translate-x-10 cursor-pointer hover:translate-x-5 ease duration-100 max-md:translate-x-[0px]`
            }
        >
            <div className="w-[80px] h-2 bg-creamy max-md:h-[5px]"></div>
            <button
                type={type}
                className="text-pinky text-2xl max-md:text-[1.25rem]"
                onClick={func}
            >
                {name}
            </button>
        </div>
    );
}
