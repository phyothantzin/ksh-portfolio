"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

const Quote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <section className="mt-6">
      <div
        ref={ref}
        className="lg:min-h-screen min-h-[400px] bg-quote bg-cover bg-no-repeat text-white flex flex-col justify-center px-7 sm:px-14"
      >
        <motion.h2
          initial={{ translateX: -800 }}
          animate={
            isInView && animationComplete
              ? { translateX: 0, transition: { duration: 4 } }
              : { translateX: 90, transition: { duration: 4 } }
          }
          onAnimationComplete={handleAnimationComplete}
          className="lg:text-5xl text-2xl font-serif w-[300px] lg:w-[550px]"
          style={{ lineHeight: 1.35 }}
        >
          &quot;Kian&apos;s work is simply exceptional.
          <br />
          They have an amazing eye for detail, as well as the big picture.&quot;
        </motion.h2>

        <motion.p
          initial={{ translateX: -800 }}
          animate={
            isInView && animationComplete
              ? { translateX: 0, transition: { duration: 4 } }
              : { translateX: 280, transition: { duration: 4, delay: 0.6 } }
          }
          onAnimationComplete={handleAnimationComplete}
          className="lg:text-2xl text-sm lg:font-thin mt-8"
        >
          - Carson Ellis, Client
        </motion.p>
      </div>
    </section>
  );
};

export default Quote;
