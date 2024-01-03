import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <section className="sm:py-12 py-10 px-12">
      <div className="">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly mb-8">
          <Image
            src="/img/scenery.jpg"
            alt="feature-work"
            width={400}
            height={150}
            style={{ height: "250px" }}
          />

          <div className="my-4">
            <h2 className="font-serif text-3xl mb-3">Education </h2>
            <div className="mb-4">
              <p className="text-[#000000e0] text-base">
                MA in Professional Photography
              </p>
              <p className="text-[#000000e0] text-base">
                Venston Bay Arts Institute, 2025
              </p>
            </div>
            <div>
              <p className="text-[#000000e0] text-base">BA in Photography</p>
              <p className="text-[#000000e0] text-base">
                University of Falworth, 2017{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center justify-evenly">
          <Image
            src="/img/scenery.jpg"
            alt="feature-work"
            width={400}
            height={150}
            style={{ height: "250px" }}
          />

          <div className="my-4">
            <h2 className="font-serif text-3xl mb-3">Skills</h2>
            <ul>
              <li>• Landscape Photography</li>
              <li>• Portrait Photography</li>
              <li>• Digital Imaging</li>
              <li>• Commercial Photography</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
