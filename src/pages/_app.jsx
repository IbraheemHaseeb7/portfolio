import "port/styles/globals.css";
import React, { useEffect, useReducer, useRef } from "react";
import Navbar from "port/components/navbar/Navbar";
import Footer from "port/components/footer/Footer";
import Options from "port/components/options/Options";
import { MainContext } from "port/Contexts/Main";
import { reducer } from "port/reducers/Main";

export default function App({ Component, pageProps }) {
  const page = useRef(null);
  const cursor = useRef(null);

  // MAIN STATE SETUP
  const [state, dispatch] = useReducer(reducer, { isOption: false });

  // REGISTERING AND REMOVING EVENT FOR MOUSE MOVEMENT DETECTION
  //   useEffect(() => {
  //     // ADDING THE EVENT
  //     page.current.addEventListener("mousemove", mouseMovement);
  //     // CLEANING UP THE EVENT
  //     return () => {
  //       page.current.removeEventListener("mousemove", mouseMovement);
  //     };
  //   }, []);

  //   // GETTING MOUSE COORDINATES AND UPDATING CURSOR
  //   function mouseMovement(e) {
  //     e.preventDefault();

  //     // CHANGING THE POSITION OF THE CUSTOM CURSOR DEPENDING UPON LOCATION OF MOUSE
  //     cursor.current.style = `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px`;
  //   }
  return (
    <MainContext.Provider value={{ mainState: state, mainDispatch: dispatch }}>
      <div
        ref={page}
        className="bg-backgroundy text-creamy m-0 p-0 w-full h-screen flex flex-col items-center justify-items-center"
      >
        <Options isShowing={state.isOption} />
        <Navbar />

        {/*CURSOR ATTEMPT*/}
        {/* <div
          ref={cursor}
          className="w-12 h-12 bg-white rounded-full fixed top-1/2 mix-blend-difference pointer-events-none ease duration-100 z-30"
        ></div> */}
        <Component {...pageProps} />
        <Footer />
      </div>
    </MainContext.Provider>
  );
}
