"use client";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mgejngee");
  if (state.succeeded) {
    return <p>Thanks for the Message!</p>;
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-cyan-900 dark:to-transparent dark:rounded-full from-cyan-900 to-cyan-200 h-60 md:h-80 w-80 z-0 dark:blur-lg absolute top-[93%] md:top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-0">
        <h5 className="text-xl font-bold dark:text-white text-dark my-2">
          Let&apos;s Connect
        </h5>
        <p className="dark:text-[#ADB7BE] text-dark mb-4 max-w-md">
          Are you currently looking for a frontend developer to make your
          website more interactive, responsive and easy to navigate? My inbox is
          always open Whether you have any Frontend question(s) ask me about my
          skills, I am always available.
        </p>
        <div className="socials flex flex-row gap-4 text-[30px] ">
          <Link
            href="https://github.com/judidoko"
            target="_blank"
            className="rounded-full bg-gray-400 p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/idoko-jude-201233199"
            target="_blank"
            className="rounded-full bg-gray-200 text-[#0e76a8] p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://x.com/judidoko"
            target="_blank"
            className="rounded-full bg-gray-400 p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://wa.me/+2348034665743?text=Hello Juddoko"
            target="_blank"
            className="rounded-full bg-gray-200 text-[#25D366] p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaSquareWhatsapp />
          </Link>
        </div>
      </div>
      <div className="z-0">
        <form className="flex flex-col" onSubmit={handleSubmit} method="POST">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="dark:text-white text-dark block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@google.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="dark:text-white text-dark block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just say hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="dark:text-white text-dark block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
