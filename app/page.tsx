import HomeCenter from "../components/HomeCenter";
import Transition from "@/components/Transition";
import BackgroundIcons from "@/components/BackgroundIcons";

export default function Home() {
    return (
        <Transition name="Home">
            <div className="bg-backgroundy text-creamy m-0 p-0 w-full h-screen overflow-hidden flex justify-center items-center">
                <HomeCenter />
                <BackgroundIcons />
            </div>
        </Transition>
    );
}
