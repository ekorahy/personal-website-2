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

    const clonedList = list.cloneNode(true) as HTMLUListElement;
    clonedList.setAttribute("aria-hidden", "true");
    container.appendChild(clonedList);

    let animationFrameId: number;

    function animate() {
      if (!list || !clonedList) return;

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
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 25,
      }}
      ref={containerRef}
      className="inline-flex w-full flex-nowrap overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
      }}
    >
      <ul
        ref={listRef}
        className="flex animate-infinite-scroll items-center justify-center gap-4 whitespace-nowrap"
      >
        {features.map(({ id, name, emoji }) => (
          <FeatureItem key={id} name={name} emoji={emoji} />
        ))}
      </ul>
    </motion.div>
  );
}
