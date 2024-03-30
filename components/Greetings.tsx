export default function Greetings({
  text,
  additional_tw_styling,
}: {
  text: string;
  additional_tw_styling?: string;
}) {
  return (
    <div
      className={`w-full  flex justify-center items-center py-[2rem] ${additional_tw_styling}`}
    >
      <h1 className="text-5xl font-bold">{text}</h1>
    </div>
  );
}
