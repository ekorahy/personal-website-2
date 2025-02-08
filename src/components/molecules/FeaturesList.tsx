"use client";

import React, { useEffect, useRef } from "react";
import { features } from "@/constant/features";
import FeatureItem from "../atoms/FeatureItem";
import { motion } from "framer-motion";

export default function FeaturesList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;

    if (!container || !list) return;

    // Duplicate items to create an infinite loop effect
    const totalWidth = list.scrollWidth;
    list.style.transform = `translateX(0px)`;

    let start = 0;
    let animationFrameId: number;

    function animate() {
      if (!list) return; // Ensure list is not null
      start -= 1; // Adjust speed by changing step size
      if (Math.abs(start) >= totalWidth / 2) {
        start = 0; // Reset position when halfway scrolled
      }
      list.style.transform = `translateX(${start}px)`;
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "linear", stiffness: 300, damping: 25 }}
      ref={containerRef}
      className="relative w-full overflow-hidden whitespace-nowrap"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
      }}
    >
      <ul ref={listRef} className="flex items-center justify-center gap-4">
        {[...features, ...features].map(({ id, name, emoji }, index) => (
          <FeatureItem key={id + "-" + index} name={name} emoji={emoji} />
        ))}
      </ul>
    </motion.div>
  );
}
