"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";
// import emailjs from "@emailjs/browser";
// import { styles } from "../styles";
// import { slideIn } from "../utils/motion";

const ContactForm = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .send(
    //     "service_92rlzdg",
    //     "template_o6pt7yb",
    //     {
    //       from_name: form.name,
    //       to_name: "Phyo Thant",
    //       from_email: form.email,
    //       to_email: "q5lZl@example.com",
    //       message: form.message,
    //     },
    //     "vhLTr6AK10Ja_vQiN"
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);

    //       console.log(error);

    //       alert("Something went wrong.");
    //     }
    //   );
  };

  return (
    <section className="px-8">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className="text-[#000000e0] text-base">Get in touch</p>
          <h3 className="font-serif text-4xl lg:text-6xl mb-3 capitalize">
            Contact.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-[#000000e0] text-base font-medium mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-neutral-200 bg-opacity-50 py-4 px-6 placeholder:text-secondary text-[#000000e0] text-base rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#000000e0] text-base font-medium mb-4">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-neutral-200 bg-opacity-50 py-4 px-6 placeholder:text-secondary text-[#000000e0] text-base rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#000000e0] text-base font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-neutral-200 bg-opacity-50 py-4 px-6 placeholder:text-secondary text-[#000000e0] text-base rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-neutral-200 bg-opacity-50 py-3 px-8 rounded-xl outline-none w-fit text-[#000000e0] text-base font-bold shadow-md shadow-primary
            hover:shadow-lg active:scale-95 transition-all duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
      </div>
    </section>
  );
};

export default ContactForm;
