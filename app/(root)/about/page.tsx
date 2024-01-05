import Bio from "@/app/components/Bio";
import Navbar from "@/app/components/nav/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />
      <section className="sm:py-12 py-10 px-6">
        <Bio aboutPage={true} />
      </section>
    </>
  );
};

export default Page;
