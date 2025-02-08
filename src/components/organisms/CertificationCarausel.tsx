"use client";

import { certifications } from "@/constant/certifications";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CertificationCard from "../molecules/CertificationCards";
import CarouselControls from "../molecules/CarouselControls";
import PaginationDots from "../molecules/PaginationDots";
import * as motion from "framer-motion/client";

export default function CertificationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const totalSlides = certifications.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + cardsPerSlide;
      return nextIndex >= totalSlides ? 0 : nextIndex;
    });
  }, [cardsPerSlide, totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - cardsPerSlide;
      return prevIndex < 0
        ? totalSlides - (totalSlides % cardsPerSlide || cardsPerSlide)
        : prevIndex;
    });
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(1);
      }
    };

    window.addEventListener("resize", updateCardsPerSlide);
    updateCardsPerSlide();

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="relative mx-auto max-w-full p-4"
    >
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 gap-4 px-6 transition-transform duration-1000 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
          {[...certifications, ...certifications]
            .slice(currentIndex, currentIndex + cardsPerSlide)
            .map((cert, index) => (
              <CertificationCard
                key={index}
                certification={cert}
                onClick={() => router.push(cert.link)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            ))}
        </div>
        <CarouselControls onPrev={prevSlide} onNext={nextSlide} />
      </div>
      <PaginationDots
        totalSlides={totalSlides}
        cardsPerSlide={cardsPerSlide}
        currentIndex={currentIndex}
        onClick={(index) => setCurrentIndex(index * cardsPerSlide)}
      />
    </motion.div>
  );
}
