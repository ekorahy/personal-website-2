"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

export default function ButtonScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
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
    if (window.scrollY > 0) {
      setIsVisible(true);
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto max-w-7xl px-4">
      {isVisible && (
        <div className="relative">
          <div className="absolute bottom-0 right-0 z-30 flex h-[6rem] w-[6rem] items-center justify-center">
            <svg className="absolute">
              <circle
                cx="50%"
                cy="50%"
                r="34"
                stroke="lightgray"
                strokeWidth="1"
                fill="transparent"
                className="pointer-events-none"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="34"
                stroke="currentColor"
                strokeWidth="2"
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
              className="z-10 flex transform items-center justify-center rounded-full bg-zinc-100 p-4 text-lg shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-800"
            >
              <FaArrowUp className="text-xl text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
