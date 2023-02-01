import React from "react";
import { motion as m } from "framer-motion";
const Contact = () => {
  return (
    <section className="h-screen  md:lg:overflow-hidden">
      <div className="flex flex-col pt-20 md:lg:pt-0">
        <h1 className="font-black inline-block pb-5 md:lg:pb-0 text-text md:lg:text-9xl text-7xl text-center">
          Contact Me
        </h1>
        <div className="md:lg:contact-large py-32 md:lg:pt-0  px-10 grid gap-24 ">
          <div className="w-full md:lg:p-20 py-20 px-10 border-2 rounded-3xl">
            <div className="overflow-hidden inline-block">
              <m.h1
                initial={{ x: "-130%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="font-semibold text-5xl text-center mb-9"
              >
                Email Me
              </m.h1>
            </div>
            <form className="flex flex-col gap-8 overflow-hidden ">
              <m.input
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-full p-4 border-2 rounded-2xl border-text focus:border-cta focus:outline-none invalid:border-pink-500 invalid:text-pink-600 resize-none text-cta  font-medium tracking-wide text-lg bg-bg"
                type="text"
                name="name"
                placeholder="Your Full Name"
                autoComplete="off"
                required
              />
              <m.input
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-full p-4 border-2 rounded-2xl border-text focus:border-cta focus:outline-none invalid:border-pink-500 invalid:text-pink-600 resize-none text-cta font-medium tracking-wide text-lg bg-bg"
                type="email"
                name="email"
                placeholder="Your Email where we can respond"
                autoComplete="off"
                required
              />
              <m.textarea
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-full p-4 border-2 rounded-2xl border-text focus:border-cta focus:outline-none invalid:border-pink-500 invalid:text-pink-600 text-cta font-medium tracking-wide text-lg bg-bg"
                name="msg"
                rows="11"
                placeholder="Your Message"
                autoComplete="off"
                required
              />
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="w-48 border-2 flex justify-center bg-cta text-bg place-content-center  hover:bg-bg hover:text-cta py-4 px-8 rounded-2xl border-cta hover:cursor-pointer"
              >
                {/* <p className="font-normal text-3xl ">Portfolio</p> */}
                <button
                  type="submit"
                  className="btn btn-primary font-normal text-xl "
                >
                  Send Message
                </button>
              </m.div>
            </form>
          </div>

          <div className="w-full md:lg:p-20 py-20 px-10 border-2 rounded-3xl ">
            <div className="overflow-hidden inline-block">
              <m.h1
                initial={{ x: "-130%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="font-semibold text-5xl text-center mb-9"
              >
                Socials
              </m.h1>
            </div>
            <div className="flex flex-col gap-9 overflow-hidden">
              <m.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-full p-10 border-2 rounded-3xl flex flex-col gap-9 items-center active:bg-text active:bg-opacity-10 hover:bg-text hover:bg-opacity-10 transition-opacity"
              >
                <h3 className="font-semibold text-3xl">Instagram</h3>
                <p className="font-medium text-xl">@Username</p>
              </m.div>
              <m.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-full p-10 border-2 rounded-3xl flex flex-col gap-9 items-center active:bg-text active:bg-opacity-10 hover:bg-text hover:bg-opacity-10 transition-opacity"
              >
                <h3 className="font-semibold text-3xl">Facebook</h3>
                <p className="font-medium text-xl">@Username</p>
              </m.div>
              <m.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{
                  x: "-120%",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-full p-10 border-2 rounded-3xl flex flex-col gap-9 items-center active:bg-text active:bg-opacity-10 hover:bg-text hover:bg-opacity-10 transition-opacity"
              >
                <h3 className="font-semibold text-3xl">Youtube</h3>
                <p className="font-medium text-xl">@Username</p>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
