import Spline from "@splinetool/react-spline";
import Loader from "port/components/ringLoader/Loader";
import { useState } from "react";

export default function Contact() {
  let [isLoaded, setIsLoaded] = useState(0);

  function loading(e) {
    setIsLoaded(++isLoaded);
  }

  return (
    <div className="min-h-screen w-full">
      {isLoaded !== 2 && (
        <div className="flex justify-center bg-backgroundy items-center w-full h-screen fixed top-0 left-0 z-10">
          <div className="fixed z-20">
            <Loader />
          </div>
        </div>
      )}
      <div className="absolute w-full h-screen top-0 right-0 flex justify-equally items-center">
        <form className="w-1/2">
          <input type="name" placeholder="Enter your name..." />
        </form>

        <div className="w-1/2 h-screen">
          <Spline
            onLoad={loading}
            scene="https://prod.spline.design/aCIiu4ddwLxpCmpT/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
}
