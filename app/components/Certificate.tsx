"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { imageVariants, textVariants } from "../variants";

const Certificate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sm:py-12 py-10 px-8">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-12 gap-x-8">
        <div className="col-span-6">
          <div
            style={{ alignItems: "flex-start" }}
            className="flex flex-col mb-12"
          >
            <motion.h2
              variants={textVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 1, delay: 4 }}
              className="font-serif text-3xl lg:text-6xl mb-6"
            >
              My <br />
              Certificates
            </motion.h2>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 1, delay: 4 }}
              className="text-[#000000e0] text-base md:ml-16 my-8"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              aspernatur architecto, iste quae similique ullam ducimus saepe
              magnam quod error.
            </motion.p>

            <motion.div
              style={{ alignItems: "flex-end" }}
              variants={imageVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 4, type: "easeIn" }}
              className="md:ml-16"
            >
              <Image
                src="/img/scenery.jpg"
                alt="feature-work"
                width={500}
                height={150}
                style={{ height: "250px" }}
              />

              <div className="mt-8">
                <motion.h2
                  variants={textVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 1, delay: 4 }}
                  className="font-serif text-3xl mb-3"
                >
                  Placeholder Certificate
                </motion.h2>
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 1, delay: 4 }}
                  className="text-[#000000e0] text-base"
                >
                  2014
                </motion.p>
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 1, delay: 4 }}
                  className="text-[#000000e0] text-base"
                >
                  Lorem ipsum dolor sit amet consectetur
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="col-span-6 justify-self-end">
          <motion.div
            style={{ alignItems: "flex-end" }}
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 4, type: "easeIn" }}
            className="flex flex-col"
          >
            <Image
              src="/img/scenery.jpg"
              alt="feature-work"
              width={500}
              height={150}
              style={{ height: "300px" }}
            />

            <div className="mt-8">
              <motion.h2
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 4 }}
                className="font-serif text-3xl mb-3"
              >
                Placeholder Certificate
              </motion.h2>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 4 }}
                className="text-[#000000e0] text-base"
              >
                2014
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 4 }}
                className="text-[#000000e0] text-base"
              >
                Lorem ipsum dolor sit amet consectetur
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
