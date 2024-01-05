"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { imageVariants, textVariants } from "../variants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  aboutPage?: boolean;
}

const Bio = ({ aboutPage = false }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sm:py-12 py-10 lg:px-20">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-12 sm:justify-evenly justify-center items-center justify-items-center lg:gap-x-6"
      >
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 4, type: "easeIn" }}
          className="col-span-5"
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
          className="col-span-7 justify-self-start lg:px-8 px-0 mt-8 lg:mt-0"
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
            className={`text-[#000000e0] text-[1rem] mb-6 ${
              aboutPage && "lg:w-[600px] w-[460px]"
            }`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsam
            quidem odio quos cumque veritatis exercitationem assumenda
            voluptatum saepe maiores repudiandae totam, explicabo aut impedit
            laudantium fuga nesciunt expedita odit? Eveniet dolorum consequuntur
            impedit nemo ipsa ratione, earum, amet quas error laudantium, modi
            odit? Recusandae corrupti soluta consequatur velit harum?
          </motion.p>

          {aboutPage && (
            <>
              <motion.div
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 5 }}
              >
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 1 }}
                  className="text-[#000000e0] text-[1rem] mb-6 w-[600px] flex gap-2 items-center"
                >
                  <FaPhoneAlt />
                  +95 9111222333
                </motion.p>
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 1 }}
                  className="text-[#000000e0] text-[1rem] mb-6 w-[600px] flex gap-2 items-center"
                >
                  <FaEnvelope />
                  example@mail.com
                </motion.p>
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 1 }}
                  className="text-[#000000e0] text-[1rem] mb-6 w-[600px] flex gap-2 items-center"
                >
                  <FaMapMarkerAlt />
                  123 Anywhere St., Any City, ST 12345
                </motion.p>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>

      {aboutPage && (
        <>
          <div className="flex pt-12 pb-6 justify-start">
            <motion.div>
              <motion.h2
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1 }}
                className="font-serif text-4xl mb-6"
              >
                Experiences
              </motion.h2>
              <motion.ul
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 5 }}
                className="list-disc ml-4"
              >
                <li className="text-[#000000e0] text-[1rem] mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem blanditiis dolorum accusantium, unde corporis odit
                  reprehenderit quisquam quo possimus? Culpa?
                </li>
                <li className="text-[#000000e0] text-[1rem] mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem blanditiis dolorum accusantium, unde corporis odit
                  reprehenderit quisquam quo possimus? Culpa?
                </li>
                <li className="text-[#000000e0] text-[1rem] mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem blanditiis dolorum accusantium, unde corporis odit
                  reprehenderit quisquam quo possimus? Culpa?
                </li>
                <li className="text-[#000000e0] text-[1rem] mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem blanditiis dolorum accusantium, unde corporis odit
                  reprehenderit quisquam quo possimus? Culpa?
                </li>
              </motion.ul>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default Bio;
