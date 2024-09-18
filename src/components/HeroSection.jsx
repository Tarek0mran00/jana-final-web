import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  const backgroundVariants = {
    initial: { backgroundColor: "#000000" }, // Black as the initial color
    animate: {
      backgroundColor: ["#000000", "#ff69b4", "#800080", "#000000"], // Black, Pink, Purple, Black
    },
  };

  const memoji = {
    image: ["/images/hero-image.png"],
  };

  return (
    <section className="lg:py-18 pt-24 z-10 px-4 md:px-8 lg:px-16">
      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-12 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Jana", 1000, "Pharmacist", 1000, "", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate pharmacy student dedicated to providing expert care,
            advancing medical knowledge, and improving patient health.
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </a>
            <a
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <motion.div
            className="rounded-full w-[400px] h-[400px] relative overflow-hidden"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          >
            <ImageSlider images={memoji.image} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
