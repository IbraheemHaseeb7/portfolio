import { motion } from "framer-motion";
import Greetings from "@/components/Greetings";

/**
 * ### button_id (paramter)
 * button_id must be a `state variable`.
 * Create a state and set its default values to 0
 * and to make the animation work on changing page, set
 * its value to 1 to make it work.
 *
 * ### add wait for perfection
 * Make sure to also add `setTimeout` function
 * for adding wait. This will work perfectly if
 * you set setTimeout to 500 in your code like shown
 * below
 *
 * ### name (parameter)
 * enter the name of the page your are going to
 * be shifting on
 *
 * ### Example
 * ```
 * export default function MyComp() {
 *  const [routing, setRouting] = useState({ btnId: 0, name: "" });
 *  const router = useRouter();
 *
 *  return (
 *  <>
 *    <TransitionButton button_id={routing.btnId} name={routing.name} />
 *    <button onClick={() => {
 *        setRouting({ btnId: 1, name: "Login" });
 *        setTimeout(() => {
 *          router.push("/xyz");
 *        }, 500)
 *    }}>
 *    go to xyz page
 *    </button>
 *  </>
 *  )
 * }
 * ```
 * */
export default function TransitionOnButton({
  button_id,
  name,
}: {
  button_id: number;
  name: string;
}) {
  return (
    <>
      {button_id === 1 && (
        <motion.div
          key={button_id}
          className="w-screen h-full fixed z-20 bg-slate-50 flex justify-center items-center"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.24, 1, 0.36, 1] }}
        >
          <Greetings text={name} additional_tw_styling="text-slate-800" />
        </motion.div>
      )}
    </>
  );
}
