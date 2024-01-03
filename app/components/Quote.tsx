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
    <section className="">
      <motion.div
        ref={ref}
        className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center text-white flex flex-col justify-center px-7 sm:px-14"
      >
        <motion.h2
          initial={{ translateX: -800 }}
          animate={
            isInView && animationComplete
              ? { translateX: 0, transition: { duration: 4 } }
              : { translateX: 400, transition: { duration: 4 } }
          }
          onAnimationComplete={handleAnimationComplete}
          className="lg:text-5xl text-2xl font-serif w-[550px]"
          style={{ lineHeight: 1.35 }}
        >
          &quot;Kian&apos;s work is simply exceptional.
          <br />
          They have an amazing eye fordetail, as well as thebig picture.&quot;
        </motion.h2>

        <motion.p
          initial={{ translateX: -800 }}
          animate={
            isInView && animationComplete
              ? { translateX: 0, transition: { duration: 4 } }
              : { translateX: 600, transition: { duration: 4, delay: 0.6 } }
          }
          onAnimationComplete={handleAnimationComplete}
          className="lg:text-2xl text-sm lg:font-thin mt-8"
        >
          - Carson Ellis, Client
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Quote;
