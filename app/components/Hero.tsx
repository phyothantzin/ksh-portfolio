"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, staggerChildren: 0.5 }}
        className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center text-white flex flex-col justify-center px-7 sm:px-14"
      >
        <motion.h2
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2.5, delay: 1 }}
          className="lg:text-8xl text-6xl font-serif mb-6"
        >
          Kyal Sin Hein
        </motion.h2>
        <motion.h4
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2.5, delay: 1.25 }}
          className="lg:text-6xl text-4xl font-sans mb-20 lg:mb-40 tracking-tight font-light"
        >
          Infra Engineer
        </motion.h4>
        <motion.button
          initial={{ y: -30, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          className="lg:text-2xl text-sm lg:font-extralight px-6 py-2 mr-auto bg-transparent border lg:border-2 border-white rounded-sm hover:bg-slate-100 hover:text-black transition-all"
        >
          Email Me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
