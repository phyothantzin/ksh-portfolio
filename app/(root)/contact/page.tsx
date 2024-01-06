import Contact from "@/app/components/Contact";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/nav/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />
      <div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Page;
