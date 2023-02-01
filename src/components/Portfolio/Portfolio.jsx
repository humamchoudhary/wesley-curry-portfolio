import React from "react";
import { images } from "../../image";
import { motion as m } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function Portfolio() {
  // const images_src = require.context("../../Assets/", true);
  return (
    <div className="pt-48 flex flex-col gap-52 md:lg:px-36 px-10 pb-16 overflow-hidden">
      <div className="mx-auto align-middle overflow-hidden">
        <m.h1
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          exit={{
            x: "-120%",
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="font-black inline-block pb-5 text-text md:lg:text-9xl text-8xl text-center"
        >
          Gallary
        </m.h1>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 4, 1200: 8 }}>
        <Masonry gutter="12px">
          {images.map((image, i) => {
            return (
              <m.div
                initial={{ y: "130%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative overflow-hidden gallary_img"
              >
                <m.img
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className="aspect-auto transition-all duration-300 w-full block object-cover hover:scale-125"
                  key={i}
                  src={image.url}
                  // style={{ width: "100%", display: "block" }}
                  alt=""
                />
                <div className="absolute transition-all duration-300 top-0 left-0 w-full h-full bg-cta opacity-0 hover:opacity-40 "></div>
              </m.div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Portfolio;
