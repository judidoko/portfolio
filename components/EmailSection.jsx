"use client";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

const EmailSection = () => {
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
          website more interactive, responsive and easy to navigate? I am always
          available.
        </p>
        <div className="flex flex-row gap-4 text-[30px]">
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
            className="rounded-full bg-dark text-white p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
      <div className="z-0">
        <h4 className="text-xl font-bold dark:text-white text-dark my-2">
          How can I contact you?
        </h4>
        <p className="dark:text-[#ADB7BE] text-dark mb-4 max-w-md">
          You can contact me through my email or/and my WhatsApp.
        </p>
        <div className="flex justify-start items-center space-x-6">
          <address className="text-sm underline text-blue-500">
            <Link href="mailto:judidoko@gmail.com.com">Send me an email</Link>
          </address>
          <Link
            href="https://wa.me/+2348034665743?text=Hello Juddoko"
            target="_blank"
            className="rounded-full bg-gray-200 text-[#25D366] p-2 text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaSquareWhatsapp />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
