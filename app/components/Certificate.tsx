"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { imageVariants, textVariants } from "../variants";

interface Props {
  reverse?: boolean;
  isInView: boolean;
}

const Certificate = ({ reverse = false, isInView }: Props) => {
  return (
    <>
      {reverse ? (
        <div className="flex-1 justify-self-end">
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 4, type: "easeIn" }}
            className="flex flex-col items-start lg:items-end"
          >
            <Image
              src="/img/sea.jpg"
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
      ) : (
        <div className="col-span-6">
          <div className="flex flex-col items-start">
            <motion.div
              style={{ alignItems: "flex-end" }}
              variants={imageVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 4, type: "easeIn" }}
              className="md:ml-16"
            >
              <Image
                src="/img/ocean.jpg"
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
      )}
    </>
  );
};

export default Certificate;
