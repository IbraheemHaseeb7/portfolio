import { MainContext } from "port/Contexts/Main";
import NavButton from "../NavButtons/NavButton";
import OptionButton from "./OptionButton";
import { useContext, useEffect, useRef } from "react";

export default function Options({ isShowing }) {
  // BUTTONS ARRAY TO DISPLAY
  const buttons = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/aboutme" },
    { name: "Contact", link: "/contact" },
    { name: "Projects", link: "/projects" },
  ];
  // GETTING THE CONTAINER FROM DOM
  const optionsContainer = useRef(null);

  // ANIMATING THE DISPLAY
  useEffect(() => {
    optionsContainer.current.style = isShowing ? `right: 0;` : `right: 100%`;
  }, [isShowing]);

  // IMPORTING THE STATE VALUES
  const { mainDispatch, mainState } = useContext(MainContext);

  return (
    <div
      ref={optionsContainer}
      className="w-full h-screen border-solid border-2 border-pinky absolute bg-backgroundy z-30 overflow-hidden flex flex-col items-center justify-start right-full ease duration-150"
    >
      <div className="w-full h-24 grid grid-cols-nav">
        <NavButton
          type="button"
          name="Back"
          direction="right"
          style="col-start-3 col-end-4"
          func={(e) => {
            e.preventDefault();
            mainDispatch({ type: "option", payload: mainState.isOption });
          }}
        />
      </div>
      <div className="flex flex-col gap-5 h-3/6 justify-end items-center">
        {buttons.map(({ name, link }) => {
          return (
            <OptionButton
              isShowing={isShowing}
              mainDispatch={mainDispatch}
              key={name}
              name={name}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
}
