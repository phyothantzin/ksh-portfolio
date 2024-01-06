import { motion } from "framer-motion";
import React from "react";
import { textVariants } from "../variants";

interface Props {
  title: string;
}

const Info = ({ title }: Props) => {
  return (
    <>
      <motion.div>
        <motion.h2
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className="font-serif text-4xl mb-6"
        >
          {title}
        </motion.h2>
        <motion.ul
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 5 }}
          className="list-disc ml-4"
        >
          <li className="text-[#000000e0] text-[1rem] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            blanditiis dolorum accusantium, unde corporis odit reprehenderit
            quisquam quo possimus? Culpa?
          </li>
          <li className="text-[#000000e0] text-[1rem] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            blanditiis dolorum accusantium, unde corporis odit reprehenderit
            quisquam quo possimus? Culpa?
          </li>
          <li className="text-[#000000e0] text-[1rem] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            blanditiis dolorum accusantium, unde corporis odit reprehenderit
            quisquam quo possimus? Culpa?
          </li>
          <li className="text-[#000000e0] text-[1rem] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            blanditiis dolorum accusantium, unde corporis odit reprehenderit
            quisquam quo possimus? Culpa?
          </li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Info;
