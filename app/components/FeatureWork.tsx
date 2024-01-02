import Image from "next/image";
import React from "react";

const FeatureWork = () => {
  return (
    <section className="lg:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 justify-between">
        <div className="col-span-3 justify-self-center">
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

        <div className="col-span-9">
          <div
            style={{ alignItems: "flex-end" }}
            className="flex flex-row mb-12"
          >
            <Image
              src="/img/scenery.jpg"
              alt="feature-work"
              width={500}
              height={150}
            />

            <div className="w-[200px] ml-12">
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

          <div style={{ alignItems: "flex-end" }} className="flex flex-row">
            <Image
              src="/img/scenery.jpg"
              alt="feature-work"
              width={500}
              height={750}
            />

            <div className="w-[200px] mx-10">
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
