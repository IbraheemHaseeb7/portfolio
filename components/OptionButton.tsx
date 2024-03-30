import { useRouter } from "next/navigation";

export default function OptionButton({
    name,
    link,
    closeFunction,
}: {
    name: string;
    link: string;
    closeFunction: Function;
}) {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                router.push(link);
                closeFunction();
            }}
            className="text-5xl font-bold uppercase hover:-translate-y-1 ease duration-150 text-creamy"
        >
            {name}
        </button>
    );
}
