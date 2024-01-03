import Image from "next/image";
import React from "react";

const Certificate = () => {
  return (
    <section className="sm:py-12 py-10 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8">
        <div className="col-span-6">
          <div
            style={{ alignItems: "flex-start" }}
            className="flex flex-col mb-12"
          >
            <h2 className="font-serif text-3xl lg:text-6xl mb-6">
              My <br />
              Certificates
              <p className="text-[#000000e0] text-base md:ml-16 my-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aspernatur architecto, iste quae similique ullam
                ducimus saepe magnam quod error.
              </p>
            </h2>

            <div className="md:ml-16">
              <Image
                src="/img/scenery.jpg"
                alt="feature-work"
                width={500}
                height={150}
                style={{ height: "250px" }}
              />

              <div className="mt-8">
                <h2 className="font-serif text-3xl mb-3">
                  Placeholder Certificate
                </h2>
                <p className="text-[#000000e0] text-base">2014</p>
                <p className="text-[#000000e0] text-base">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 justify-self-end">
          <div style={{ alignItems: "flex-start" }} className="flex flex-col">
            <Image
              src="/img/scenery.jpg"
              alt="feature-work"
              width={500}
              height={150}
              style={{ height: "300px" }}
            />

            <div className="mt-8">
              <h2 className="font-serif text-3xl mb-3">
                Placeholder Certificate
              </h2>
              <p className="text-[#000000e0] text-base">2014</p>
              <p className="text-[#000000e0] text-base">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
