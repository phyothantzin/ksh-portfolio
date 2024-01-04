"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { imageVariants, textVariants } from "../variants";

const Bio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sm:py-12 py-10">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-12 sm:justify-evenly justify-center items-center justify-items-center gap-6"
      >
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 4, type: "easeIn" }}
          className="col-span-6"
        >
          <Image
            src="/img/portrait_640.jpg"
            alt="protrait"
            width={300}
            height={250}
          />
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 4, type: "easeIn" }}
          className="col-span-6 justify-self-start px-8 lg:px-0"
        >
          <motion.h2
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 4 }}
            className="font-serif text-4xl mb-6"
          >
            Bio
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 4 }}
            className="text-[#000000e0] text-[1rem] mb-6"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsam
            quidem odio quos cumque veritatis exercitationem assumenda
            voluptatum saepe maiores repudiandae totam, explicabo aut impedit
            laudantium fuga nesciunt expedita odit? Eveniet dolorum consequuntur
            impedit nemo ipsa ratione, earum, amet quas error laudantium, modi
            odit? Recusandae corrupti soluta consequatur velit harum?
          </motion.p>

          {/* <Image
            src="/img/scenery.jpg"
            alt="scenery"
            width={600}
            height={300}
            className="md:pl-20 md:pt-20"
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
