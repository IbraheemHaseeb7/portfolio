import { useRouter } from "next/router";

export default function OptionButton({ name, link, mainDispatch, isShowing }) {
  const router = useRouter();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        mainDispatch({ type: "option", payload: isShowing });
        router.push(link);
      }}
      className="text-5xl font-bold uppercase hover:-translate-y-1 ease duration-150"
    >
      {name}
    </button>
  );
}
