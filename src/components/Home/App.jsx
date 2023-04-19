// import HomeCenter from "../HomeCenter/HomeCenter.jsx";
// import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import Loader from "../ringLoader/Loader";

export default function App() {
  // const homeCenter = useRef(null);
  let [isLoaded, setIsLoaded] = useState(0);

  // // REGISTERING AND REMOVING EVENT FOR MOUSE MOVEMENT DETECTION
  // useEffect(() => {
  //   // ADDING THE EVENT
  //   document.body.addEventListener("mousemove", mouseMovement);
  //   // CLEANING UP THE EVENT
  //   return () => {
  //     document.body.removeEventListener("mousemove", mouseMovement);
  //   };
  // }, []);

  // function mouseMovement(e) {
  //   e.preventDefault();

  //   // CALCULATING CENTER
  //   let center = { X: window.innerWidth / 2, Y: window.innerHeight / 2 };

  //   // ANIMATING THE HOME CENTER
  //   homeCenter.current.style = `transform: translate(${
  //     (center.X - e.pageX) / (center.X / 5)
  //   }px, ${(center.Y - e.pageY) / (center.Y / 5)}px)`;
  // }

  function loading(e) {
    setIsLoaded(isLoaded + 1);
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      {isLoaded !== 2 && (
        <div className="absolute w-full h-screen top-0 left-0 flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="absolute top-0 w-full h-screen z-0 opacity-100">
        <Spline
          onLoad={loading}
          scene="https://prod.spline.design/A0eKa3kloNNtsYGj/scene.splinecode"
        />
      </div>
      {/* <HomeCenter refer={homeCenter} /> */}
    </div>
  );
}
