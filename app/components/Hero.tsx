"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";

SwiperCore.use([Pagination, Autoplay]);

const images = [
  "/img/sunset.jpg",
  "/img/mountains.jpg",
  "/img/mountaineer.jpg",
];

const App = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setAnimationComplete(false);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={false}
        pagination={{ clickable: true }}
        speed={1200}
        effect="fade"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              onAnimationComplete={handleAnimationComplete}
              className="lg:min-h-screen min-h-[400px] bg-cover bg-no-repeat bg-center text-white flex flex-col justify-center px-7 sm:px-14"
            >
              <motion.h2
                initial={{ opacity: 0, translateX: 400 }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  transition: { duration: 5, delay: 2 },
                }}
                onAnimationComplete={handleAnimationComplete}
                transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
                className="lg:text-8xl text-6xl font-serif mb-6"
              >
                Kyal Sin Hein
              </motion.h2>
              <motion.h4
                initial={{ opacity: 0, translateX: 600 }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  transition: { duration: 5, delay: 2.5 },
                }}
                onAnimationComplete={handleAnimationComplete}
                transition={{ duration: 4, delay: 2.5, ease: "easeInOut" }}
                className="lg:text-6xl text-4xl font-sans mb-20 lg:mb-40 tracking-tight font-light"
              >
                Infra Engineer
              </motion.h4>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, delay: 5, ease: "easeInOut" }}
                className="lg:text-2xl text-sm lg:font-extralight px-6 py-2 mr-auto bg-transparent border lg:border-2 border-white rounded-sm hover:bg-slate-100 hover:text-black transition-all"
              >
                <Link href="/contact">Email Me</Link>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default App;
