"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center text-white flex flex-col justify-center px-7 sm:px-14"
      >
        <motion.h2
          initial={{ translateX: -800 }}
          animate={
            animationComplete
              ? { translateX: 0, transition: { duration: 4 } }
              : { translateX: 400, transition: { duration: 4, delay: 2 } }
          }
          onAnimationComplete={handleAnimationComplete}
          className="lg:text-8xl text-6xl font-serif mb-6"
        >
          Kyal Sin Hein
        </motion.h2>
        <motion.h4
          initial={{ translateX: -800 }}
          animate={
            animationComplete
              ? { translateX: 0, transition: { duration: 4 } }
              : { translateX: 650, transition: { duration: 4, delay: 2.5 } }
          }
          onAnimationComplete={handleAnimationComplete}
          className="lg:text-6xl text-4xl font-sans mb-20 lg:mb-40 tracking-tight font-light"
        >
          Infra Engineer
        </motion.h4>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 5, ease: "easeInOut" }}
          className="lg:text-2xl text-sm lg:font-extralight px-6 py-2 mr-auto bg-transparent border lg:border-2 border-white rounded-sm hover:bg-slate-100 hover:text-black transition-all"
        >
          Email Me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default App;
