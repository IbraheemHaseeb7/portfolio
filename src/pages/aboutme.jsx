import Spline from "@splinetool/react-spline";
import Loader from "port/components/ringLoader/Loader";
import { useState } from "react";

export default function AboutMe() {
  let [loadingCount, setLoadingCount] = useState(0);
  function load(e) {
    // e.preventDefault();

    setLoadingCount(++loadingCount);
  }

  const data = [
    {
      heading: "Education",
      description:
        "Currently enrolled in Comsats University for BsCS program with CGPA 3.14. Expected graduation year is 2025. What I love about my degree is the harder it gets the more I enjoy it. Okay umm.....",
      icon: "https://prod.spline.design/XSO8pWji1EwnudqI/scene.splinecode",
    },
    {
      heading: "MERN Stack",
      description:
        "Started working on web development in 2020 and since then grew my skills from HTML, CSS, JS to React and soon learnt the basics of Node JS and Express JS. With that being covered I explored Next JS with whom I fell in love ♥",
      icon: "https://prod.spline.design/nec1G9WRYrzv9Wb4/scene.splinecode",
    },
    {
      heading: "Software Development",
      description:
        "After covering MERN I discovered Electron JS with which I created a full fledeged software that can be used by retailers for inventory management and sales. After working on Electron and finding its cons Tauri seemed like the obvious alternative.",
      icon: "https://prod.spline.design/jSrGfcVWoQ9Jtf-q/scene.splinecode",
    },
    {
      heading: "Video Editing & Motion Graphics",
      description:
        "My First step into the freelancing was video editing and motion graphics where I worked with many clients throughout the world. From Cordoba to Adobe, it was a wonderful journey and still to this date if I can, I really enjoy working on After Effects.",
      icon: "https://prod.spline.design/O86sUvHaqnkr80rz/scene.splinecode",
    },
  ];

  return (
    <div className="w-full min-h-[400vh] select-none bg-backgroundy">
      {loadingCount !== 2 && (
        <div className="flex justify-center bg-backgroundy items-center w-full h-screen fixed top-0 left-0 z-10">
          <div className="fixed z-20">
            <Loader />
          </div>
        </div>
      )}
      <div className="w-full h-[400vh] relative top-0 left-0 z-10">
        <div className="w-1/2 h-[400vh]">
          {data.map(({ heading, description, icon }) => {
            return (
              <div
                key={heading}
                className="h-1/4 flex justify-center items-center flex-col gap-3"
              >
                <div className="w-2/3 flex gap-5 justify-between items-center">
                  <h1 className="text-3xl">{heading}</h1>
                  <Spline
                    style={{ width: "4rem", height: "5rem" }}
                    scene={icon}
                  />
                </div>
                <p className="w-2/3">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fixed top-0 right-0 w-1/2 h-screen -z-1 opacity-100 select-none">
        <Spline
          scene="https://prod.spline.design/43NwbyF6cOQQjhSO/scene.splinecode"
          onLoad={load}
        />
      </div>
    </div>
  );
}
