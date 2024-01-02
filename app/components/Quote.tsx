import React from "react";

const Quote = () => {
  return (
    <section className="">
      <div className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center text-white flex flex-col justify-center px-7 sm:px-14">
        <h2
          className="lg:text-5xl text-2xl font-serif w-[550px]"
          style={{ lineHeight: 1.35 }}
        >
          &quot;Kian&apos;s work is simply exceptional.
          <br />
          They have an amazing eye fordetail, as well as thebig picture.&quot;
        </h2>

        <p className="lg:text-2xl text-sm lg:font-thin mt-8">
          - Carson Ellis, Client
        </p>
      </div>
    </section>
  );
};

export default Quote;
