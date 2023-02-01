import React from "react";
import { motion as m } from "framer-motion";
import self from "../../Assets/image.png";
import { NavLink } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
const Home = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        className="align-middle bottom-0 right-0 -z-10 md:lg:hidden"
      >
        <img
          style={{ width: "w-full h-full " }}
          src={self}
          className="absolute bottom-0 right-0 opacity-50 "
          alt="Me"
        />
      </m.div>
      <div className="w-full grid px-12 h-full absolute top-0 md:px-36 lg:px-36 overflow-hidden md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
        <div className="my-auto align-middle overflow-hidden">
          <m.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            exit={{
              x: "-120%",
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            className="font-black text-center md:lg:text-left  text-text text-9xl"
          >
            Wesley Curry
          </m.h1>

          <div className="h-3"></div>
          <m.div
            initial={{ x: "-140%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{
              x: "-100%",
              transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
            }}
            className="h-1 w-48 bg-text rounded-lg hidden md:lg:block"
          ></m.div>
          <div className="h-3"></div>

          <div className=" p-1 lg:md:inline-block relative overflow-hidden">
            <m.p
              initial={{ y: "130%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              exit={{
                x: "-120%",
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="font-extralight text-center lg:md:text-left text-text text-3xl"
            >
              Street Photographer
            </m.p>
          </div>
          <div className="mt-40">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1.2 }}
              transition={{ duration: 0.75 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="border-2 lg:md:inline-block text-cta transition-all duration-200  hover:text-bg hover:bg-cta py-4 px-8 rounded-2xl border-cta hover:cursor-pointer"
            >
              <NavLink to="/portfolio">
                <p className="font-normal text-center text-3xl ">Portfolio</p>
              </NavLink>
            </m.div>
          </div>
        </div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="align-middle relative hidden md:hidden lg:inline-block"
        >
          <img
            style={{ width: "w-full " }}
            src={self}
            className=" absolute bottom-0 right-0 aspect-auto "
            alt="Me"
          />
        </m.div>
      </div>
    </>
  );
};

export default Home;
