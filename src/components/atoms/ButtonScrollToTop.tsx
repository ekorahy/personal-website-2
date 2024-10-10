"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

export default function ButtonScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 xl:bottom-16 xl:right-16">
      {isVisible && (
        <div className="relative flex items-center justify-center">
          <svg className="h-12 w-12 lg:h-16 lg:w-16">
            <circle
              cx="50%"
              cy="50%"
              r="22"
              stroke="lightgray"
              strokeWidth="4"
              fill="transparent"
              className="pointer-events-none"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="22"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="transparent"
              style={{
                pathLength: scrollYProgress,
                pointerEvents: "none",
              }}
              className="text-amber-400"
            />
          </svg>

          <button
            title="Scroll to Top"
            onClick={scrollToTop}
            className="absolute z-10 flex transform items-center justify-center rounded-full bg-zinc-100 p-2 text-lg shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-800 lg:text-lg"
          >
            <FaArrowUp className="h-6 w-6 text-amber-400" />
          </button>
        </div>
      )}
    </div>
  );
}
