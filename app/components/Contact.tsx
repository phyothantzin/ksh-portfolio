"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { textVariants } from "../variants";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="sm:py-12 py-10 px-8">
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 2, type: "easeIn" }}
        className="flex flex-row flex-wrap justify-between items-center"
      >
        <div className="flex flex-col">
          <h2 className="font-serif text-4xl mb-3 capitalize">Get in Touch</h2>
          <p className="text-[#000000e0] text-base">
            123 Anywhere St., Any City, ST 12345
          </p>
          <p className="text-[#000000e0] text-base">
            hello@reallygreatsite.com{" "}
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <button className="lg:text-2xl text-sm lg:font-light px-6 py-2 mr-auto bg-transparent border lg:border-2 border-slate-900 rounded-sm hover:bg-slate-900 hover:text-white transition-all">
            Email Me
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
