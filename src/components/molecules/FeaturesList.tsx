"use client";

import React, { useEffect, useRef } from "react";
import { features } from "@/constant/features";
import FeatureItem from "../atoms/FeatureItem";

const FeaturesList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;

    if (!container || !list) return;

    const clonedList = list.cloneNode(true) as HTMLUListElement;
    clonedList.setAttribute("aria-hidden", "true");
    container.appendChild(clonedList);

    const scrollSpeed = 0.5;
    let startX = 0;

    let animationFrameId: number;

    function animate() {
      if (!list || !clonedList) return;

      startX -= scrollSpeed;
      if (startX <= -list.offsetWidth) {
        startX = 0;
      }
      list.style.transform = `translateX(${startX}px)`;
      clonedList.style.transform = `translateX(${startX + list.offsetWidth}px)`;

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="inline-flex w-full flex-nowrap overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
      }}
    >
      <ul
        ref={listRef}
        className="animate-infinite-scroll flex items-center justify-center gap-4 whitespace-nowrap"
      >
        {features.map(({ id, name }) => (
          <FeatureItem key={id} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturesList;
