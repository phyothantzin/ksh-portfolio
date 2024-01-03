import Image from "next/image";
import React from "react";

const FeatureWork = () => {
  return (
    <section className="sm:py-12 py-10 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 items-center">
        <div className="col-span-3 md:-mt-40">
          <h2 className="font-serif text-4xl lg:text-6xl mb-6">
            Feature <br />
            Work
          </h2>
          <p className="text-[#000000e0] text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur architecto, iste quae similique ullam ducimus saepe
            magnam quod error.
          </p>
        </div>

        <div className="col-span-9 md:justify-self-end">
          <div
            // style={{ alignItems: "flex-end" }}
            className="flex flex-col md:flex-row mb-12 md:items-end items-start"
          >
            <Image
              src="/img/scenery.jpg"
              alt="feature-work"
              width={500}
              height={150}
              style={{ height: "250px" }}
            />

            <div className="md:w-[200px] md:ml-6 mt-6">
              <h2 className="font-serif text-3xl mb-3">
                Featured <br />
                Work
              </h2>
              <p className="text-[#000000e0] text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aspernatur architecto, iste
              </p>
            </div>
          </div>

          <div
            style={{ alignItems: "flex-end" }}
            className="flex flex-col md:flex-row"
          >
            <Image
              src="/img/scenery.jpg"
              alt="feature-work"
              width={500}
              height={150}
              style={{ height: "300px" }}
            />

            <div className="md:w-[200px] md:ml-6 mt-6">
              <h2 className="font-serif text-3xl mb-3">
                Feature <br />
                Work
              </h2>
              <p className="text-[#000000e0] text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureWork;
