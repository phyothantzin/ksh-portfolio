import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center text-white flex flex-col justify-center px-7 sm:px-14">
        <h2 className="lg:text-8xl text-6xl font-serif mb-6">Kyal Sin Hein</h2>
        <h4 className="lg:text-6xl text-4xl font-sans mb-20 lg:mb-40 tracking-tight font-light">
          Infra Engineer
        </h4>
        <button className="lg:text-2xl text-sm lg:font-extralight px-6 py-2 mr-auto bg-transparent border lg:border-2 border-white rounded-sm hover:bg-slate-100 hover:text-black transition-all">
          Email Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
