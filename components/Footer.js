import React from "react";
import { BsFillBookmarkHeartFill, BsHeartFill } from "react-icons/bs";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-20">
      <p className="font-primary text-gray-500 dark:text-gray-300 text-center ">
        Made with <BsHeartFill className="inline text-red-300" /> by Albin Lamichhane
      </p>
      <p className="font-primary text-gray-500 dark:text-gray-300 text-center mt-4">
        Built with{" "}
        <a
          className="text-gray-800 dark:text-white underline"
          href="https://nextjs.org"
        >
          Next.js
        </a>{" "}
        &{" "}
        <a
          className="text-gray-800 dark:text-white underline"
          href="https://tailwindcss.com"
        >
          Tailwindcss
        </a>{" "}
      </p>
     
    </div>
  );
};

export default Footer;
