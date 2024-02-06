"use client";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  // For when ever componentMount
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "darkb") setDarkMode(true);
  }, []);

  // for when the state changes from darkMode to light
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      <div
        className="relative w-16 h-8 flex items-center dark:border-gray-900 bg-cyan-500 cursor-pointer rounded-full p-1"
        onClick={() => setDarkMode(!darkMode)}
      >
        <FaMoon className="text-medium" size={20} />
        <div
          className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-tranform duration-300"
          style={darkMode ? { left: "2px" } : { right: "2px" }}
        ></div>
        <BsSunFill className="ml-auto text-yellow-200" size={20} />
      </div>
    </>
  );
};

export default ThemeToggle;
