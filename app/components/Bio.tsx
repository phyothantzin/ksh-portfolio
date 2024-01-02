import Image from "next/image";
import React from "react";

const Bio = () => {
  return (
    <section className="sm:py-12 py-10">
      <div className="flex flex-col sm:flex-row md:justify-evenly justify-center items-center gap-6">
        <div>
          <Image
            src="/img/portrait_640.jpg"
            alt="protrait"
            width={300}
            height={250}
          />
        </div>

        <div className="md:mt-20">
          <h2 className="font-serif text-4xl mb-6">Bio</h2>
          <p className="text-[#000000e0]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eaque
            eius
            <br />
            expedita quo necessitatibus maiores cumque odit deserunt omnis,
            sequi similique?
          </p>

          <Image
            src="/img/scenery.jpg"
            alt="scenery"
            width={600}
            height={300}
            className="md:pl-20 md:pt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Bio;
