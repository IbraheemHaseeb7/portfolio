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
        hover:-translate-x-5 ease duration-100`
          : `flex-row-reverse flex items-center gap-4 w-full ${style} translate-x-10 cursor-pointer hover:translate-x-5 ease duration-100`
      }
    >
      <div className="w-24 h-2 bg-creamy"></div>
      <button type={type} className="text-pinky text-2xl" onClick={func}>
        {name}
      </button>
    </div>
  );
}
