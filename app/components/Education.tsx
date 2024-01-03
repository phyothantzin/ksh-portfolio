"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { imageVariants, textVariants } from "../variants";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sm:py-12 py-10 px-12">
      <div ref={ref} className="">
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 4, type: "easeIn" }}
          className="flex flex-col md:flex-row gap-6 items-center justify-evenly mb-8"
        >
          <Image
            src="/img/tree.jpg"
            alt="feature-work"
            width={400}
            height={150}
            style={{ height: "250px" }}
          />

          <motion.div
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 4 }}
            className="my-4"
          >
            <h2 className="font-serif text-3xl mb-3">Education </h2>
            <motion.div
              variants={textVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 1, delay: 5 }}
              className="mb-4"
            >
              <p className="text-[#000000e0] text-base">
                MA in Professional Photography
              </p>
              <p className="text-[#000000e0] text-base">
                Venston Bay Arts Institute, 2025
              </p>
            </motion.div>
            <motion.div
              variants={textVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 1, delay: 5 }}
            >
              <p className="text-[#000000e0] text-base">BA in Photography</p>
              <p className="text-[#000000e0] text-base">
                University of Falworth, 2017{" "}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="">
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 4, type: "easeIn" }}
          className="flex flex-col md:flex-row-reverse gap-6 items-center justify-evenly"
        >
          <Image
            src="/img/wolf.jpg"
            alt="feature-work"
            width={400}
            height={150}
            style={{ height: "250px" }}
          />

          <motion.div
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 4 }}
            className="my-4"
          >
            <h2 className="font-serif text-3xl mb-3">Skills</h2>
            <motion.ul
              variants={textVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 1, delay: 5 }}
            >
              <li>• Landscape Photography</li>
              <li>• Portrait Photography</li>
              <li>• Digital Imaging</li>
              <li>• Commercial Photography</li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
