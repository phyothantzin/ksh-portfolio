"use client";
import Certificate from "@/app/components/Certificate";
import Navbar from "@/app/components/nav/Navbar";
import { textVariants } from "@/app/variants";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />
      <section ref={ref} className="sm:py-12 py-10 px-8">
        <div>
          <motion.h2
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 4 }}
            className="font-serif text-3xl lg:text-6xl lg:mb-6 mb-2"
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
        </div>

        <div className="flex flex-col mb-12 lg:-mb-6 sm:flex-row gap-x-8">
          <Certificate isInView={isInView} />
        </div>
        <div className="flex flex-col mb-12 lg:-mb-6 sm:flex-row gap-x-8">
          <Certificate reverse isInView={isInView} />
        </div>
        <div className="flex flex-col mb-12 lg:-mb-6 sm:flex-row gap-x-8">
          <Certificate isInView={isInView} />
        </div>
        <div className="flex flex-col mb-12 lg:-mb-6 sm:flex-row gap-x-8">
          <Certificate reverse isInView={isInView} />
        </div>
      </section>
    </>
  );
};

export default Page;
