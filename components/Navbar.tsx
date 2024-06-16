"use client";

import NavButton from "./NavButton";
import { click } from "@/state/slices/optionsSlice";
import { useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useRouter } from "next/navigation";
import TransitionOnButton from "./TransitionOnButton";
import { useState } from "react";
import { triggerTransitionOnButton } from "@/utils/Utils";

export default function Navbar() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [routing, setRouting] = useState({ btnId: 0, name: "" });

    return (
        <nav className="w-full grid grid-cols-nav h-24 z-20 bg-backgroundy fixed top-0 max-sm:grid-cols-sm-nav">
            <TransitionOnButton button_id={routing.btnId} name={routing.name} />
            <NavButton
                type="submit"
                name={"Resume"}
                direction={"left"}
                style={"col-start-1 col-end-2"}
                func={(e: any) => {
                    e.preventDefault();
                    const downloadLink = document.createElement("a");
                    downloadLink.href = "/api/resume";
                    downloadLink.target = "_blank";
                    downloadLink.click();
                }}
            />
            <div className="w-full flex justify-center items-center gap-6 text-pinky max-sm:hidden">
                <button
                    onClick={() => {
                        router.push("/");
                        // triggerTransitionOnButton(
                        //     setRouting,
                        //     router,
                        //     "/",
                        //     "Home"
                        // );
                    }}
                    className="hover:text-dark-pinky transition-all ease duration-100"
                >
                    <HomeIcon />
                </button>
                <button
                    onClick={
                        () => router.push("/about")
                        // triggerTransitionOnButton(
                        //       setRouting,
                        //       router,
                        //       "/about",
                        //       "About"
                        //   )
                    }
                    className="hover:text-dark-pinky transition-all ease duration-100"
                >
                    <InfoIcon />
                </button>
                <button
                    className="hover:text-dark-pinky transition-all ease duration-100"
                    onClick={
                        () => router.push("/contact")
                        // triggerTransitionOnButton(
                        //     setRouting,
                        //     router,
                        //     "/contact",
                        //     "Contact"
                        // )
                    }
                >
                    <ContactMailIcon />
                </button>
                <button
                    className="hover:text-dark-pinky transition-all ease duration-100"
                    onClick={
                        () => router.push("/projects")
                        // triggerTransitionOnButton(
                        //     setRouting,
                        //     router,
                        //     "/projects",
                        //     "Projects"
                        // )
                    }
                >
                    <WorkOutlineIcon />
                </button>
            </div>
            <NavButton
                type="button"
                name={"Options"}
                direction={"right"}
                style={"col-start-3 col-end-4"}
                func={(e: any) => {
                    e.preventDefault();
                    dispatch(click());
                }}
            />
        </nav>
    );
}
