const imageVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const slideIn = (direction: string, type: any, delay: any, duration: any) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export { imageVariants, textVariants, slideIn };
