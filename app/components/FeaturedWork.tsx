"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { imageVariants, textVariants } from "../variants";

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sm:py-12 py-10 px-8">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-12 md:gap-x-8 items-center"
      >
        <div className="col-span-3 md:-mt-40">
          <motion.h2
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 3 }}
            className="font-serif text-4xl lg:text-6xl mb-6"
          >
            Featured <br />
            Work
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 3 }}
            className="text-[#000000e0] text-base mb-6 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur architecto, iste quae similique ullam ducimus saepe
            magnam quod error.
          </motion.p>
        </div>

        <div className="col-span-9 md:justify-self-end">
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 4, type: "easeIn" }}
            className="flex flex-col md:flex-row mb-12 md:items-end items-start"
          >
            <Image
              src="/img/lone-tree.jpg"
              alt="feature-work"
              width={500}
              height={150}
              style={{ height: "250px" }}
            />

            <div className="md:w-[200px] md:ml-6 mt-6">
              <motion.h2
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 4 }}
                className="font-serif text-3xl mb-3"
              >
                Featured <br />
                Work
              </motion.h2>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 4 }}
                className="text-[#000000e0] text-base"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aspernatur architecto, iste
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            style={{ alignItems: "flex-end" }}
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 4, type: "easeIn" }}
            className="flex flex-col md:flex-row"
          >
            <Image
              src="/img/cat-1.jpg"
              alt="feature-work"
              width={500}
              height={150}
            />

            <div className="md:w-[200px] md:ml-6 mt-6">
              <motion.h2
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 4 }}
                className="font-serif text-3xl mb-3"
              >
                Featured <br />
                Work
              </motion.h2>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 4 }}
                className="text-[#000000e0] text-base"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aspernatur architecto, iste
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
