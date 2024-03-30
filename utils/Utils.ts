/**
 * ### setRouting
 * should be declared like so...any changes will cause problems
 * ```
 * const [routing, setRouting] = useState({ btnId: 0, name: "" });
 * ```
 *
 * ### router
 * create a `next js router` and pass it. Declare it like so...
 * ```
 * "use client"
 * import { useRouter } from "next/navigation"
 * const router = useRouter();
 * ```
 *
 * ### Example
 * ```
 * "use client"
 * import { useRouter } from "next/navigation"
 * import Transition from "@/components/transition/Transition";
 * import TransitionButton from "@/components/transition/TransitionOnButton";
 * import { triggerTransitionOnButton } from "@/utils/Utils";
 * import { useState } from "react";
 *
 * export default function MyComp() {
 *    const router = useRouter();
 *    const [routing, setRouting] = useState({ btnId: 0, name: "" });
 *
 *    return (
 *      <Transition name="XYZ">
 *        <TransitionButton button_id={routing.btnId} name={routing.name} />
 *        <button onClick={() => triggerTransitionOnButton(setRouting, router, "/xyz", "XYZ")}>
 *          go to xyz
 *        </button>
 *      <Transition />
 *    );
 * }
 *
 * triggerTransitionOnButton();
 * ```
 * */
export function triggerTransitionOnButton(
    setRouting: Function,
    router: any,
    page_link: string,
    page_name: string
) {
    setRouting({ btnId: 1, name: page_name });
    setTimeout(() => {
        router.push(page_link);
    }, 500);
}
