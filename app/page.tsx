import HomeCenter from "../components/HomeCenter";
import Transition from "@/components/Transition";
import BackgroundIcons from "@/components/BackgroundIcons";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <Transition name="Home">
            <div className="bg-backgroundy text-creamy m-0 p-0 w-full overflow-x-hidden flex justify-center items-center flex-col">
                <HomeCenter />
                <BackgroundIcons />
                <Skills />
            </div>
        </Transition>
    );
}
