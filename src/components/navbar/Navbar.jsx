import NavButton from "../NavButtons/NavButton";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useContext } from "react";
import { MainContext } from "port/Contexts/Main";
import { useRouter } from "next/router";

export default function Navbar() {
  // GETTING THE CONTEXT VALUES FOR DISPATCH FUNCTION
  const { mainDispatch, mainState } = useContext(MainContext);

  const router = useRouter();
  function navigate(e, route) {
    e.preventDefault();

    router.push(`/${route}`);
  }

  return (
    <nav className="fixed top-0 left-0 grid grid-cols-nav h-24 w-full z-20">
      <NavButton
        type="submit"
        name={"Resume"}
        direction={"left"}
        style={"col-start-1 col-end-2"}
        func={(e) => {
          e.preventDefault();
        }}
      />
      <div className="w-full flex justify-center items-center gap-6 text-pinky">
        <button
          onClick={(e) => {
            navigate(e, "/");
          }}
        >
          <HomeIcon />
        </button>
        <button
          onClick={(e) => {
            navigate(e, "/aboutme");
          }}
        >
          <InfoIcon />
        </button>
        <button
          onClick={(e) => {
            navigate(e, "/contact");
          }}
        >
          <ContactMailIcon />
        </button>
        <button>
          <WorkOutlineIcon />
        </button>
      </div>
      <NavButton
        type="button"
        name={"Options"}
        direction={"right"}
        style={"col-start-3 col-end-4"}
        func={(e) => {
          e.preventDefault();
          mainDispatch({ type: "option", payload: mainState.isOption });
        }}
      />
    </nav>
  );
}
