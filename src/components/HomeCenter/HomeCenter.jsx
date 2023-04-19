import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HomeCenter({ refer }) {
  const name = useRef(null);
  const title = useRef(null);

  // ADDING THE ANIMATION
  useEffect(() => {
    // IMPLEMENTING THE ANIMATION
    const nameTyped = new Typed(name.current, {
      strings: [`Ibraheem Bin Haseeb`],
      typeSpeed: 50,
      showCursor: false,
    });
    const titleTyped = new Typed(title.current, {
      strings: [
        `^2000Full Stack Web Developer, Video Editor, <br> Motion Graphics Designer`,
      ],
      typeSpeed: 50,
      showCursor: false,
    });

    // CLEANING UP ALL THE ANIMATIONS WHEN THE COMPONENT IS DISMOUNTED
    return () => {
      nameTyped.destroy();
      titleTyped.destroy();
    };
  }, []);

  return (
    <div
      ref={refer}
      className="mt-52 flex flex-col items-center justify-center h-2/3 gap-5 z-10 select-none"
    >
      <h1 ref={name} className="text-4xl"></h1>
      <p ref={title} className="text-2xl text-center"></p>
    </div>
  );
}
