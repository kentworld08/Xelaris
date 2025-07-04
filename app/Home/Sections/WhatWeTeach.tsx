"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { WhatWeTeachData } from "@/components/ContentData";
import InteractiveParagraph from "@/utils/InteractiveParagraph";

const WhatWeTeach = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const mobileCardWidth = 321;
  const desktopCardWidth = 425;
  const cardGap = 25;

  const getActiveCardWidth = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? mobileCardWidth : desktopCardWidth;
    }
    return desktopCardWidth;
  };

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      const timer = setTimeout(checkScrollability, 100);

      // Re-check on window resize
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(container);

      return () => {
        container.removeEventListener("scroll", checkScrollability);
        resizeObserver.disconnect();
        clearTimeout(timer);
      };
    }
  }, [checkScrollability]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const activeCardScrollAmount = getActiveCardWidth() + cardGap;
      const currentScrollLeft = scrollRef.current.scrollLeft;
      let newScrollLeft;

      if (direction === "left") {
        newScrollLeft = Math.max(0, currentScrollLeft - activeCardScrollAmount);
      } else {
        newScrollLeft = currentScrollLeft + activeCardScrollAmount;
      }

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const myParagraph1 =
    "We teach Software Engineering, AI, Blockchain through a curriculum";
  const myParagraph2 =
    "  that helps kids become confident problem-solvers, and future-ready builders.";

  return (
    <section className="px-[20px]">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 200 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-[304px] pt-[64px] pb-[64px] space-y-[12px]"
      >
        <div className="flex flex-col items-center md:flex-row md:gap-2 justify-center">
          <h1 className="font-sans font-medium text-[37.19px] leading-[50px] tracking-normal align-middle text-[#FFFEFA]">
            What we
          </h1>{" "}
          <span className="font-serif font-light italic text-[47.2px] -tracking-[1.69px] text-[#FFFEFA] leading-[46.26px] align-middle">
            teach
          </span>
        </div>
        <div className="w-full flex items-center justify-center align-middle">
          <p className="w-[276px] font-sans text-[15.88px] leading-[24px] tracking-normal align-middle text-light-yellow-70 font-normal text-center justify-self-center md:w-[768px]">
            <InteractiveParagraph text={myParagraph1} />
            <br className="hidden md:block" />
            <InteractiveParagraph text={myParagraph2} />
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full flex items-center justify-center relative"
      >
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          aria-label="Scroll left"
          disabled={!canScrollLeft}
          style={{
            opacity: canScrollLeft ? 1 : 0.5,
            pointerEvents: canScrollLeft ? "auto" : "none",
          }}
        >
          <IoChevronForwardCircleOutline
            size={40}
            stroke="#FAFF69"
            fill="none"
            strokeWidth={1}
            className="rotate-180"
          />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-[25px] overflow-x-auto scroll-smooth flex-nowrap
                     scroll-snap-x mandatory w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {WhatWeTeachData.map(
            ({ title, status, buttonText, imageUrl, route, level }) => {
              return (
                <div
                  key={title}
                  className="flex-none w-[321px] md:w-[425px] h-[347px] md:h-[347px] border-[1px] border-[#FCF5EB] scroll-snap-start flex flex-col"
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={425}
                    height={160}
                    className="w-full h-[160px] object-cover"
                  />
                  <div className="w-full py-3 px-6 bg-[#42464B]">
                    <h1 className="font-sans font-medium text-[20px] leading-[32px] tracking-normal align-middle text-[#F2F2EC] h-fit md:h-[32px] ">
                      {title}
                    </h1>
                    <div className="mt-[12px] space-x-2">
                      <button className="text-center rounded-full border-[1px] px-[13px] py-[5px] border-[#F3F3ED] text-[#F3F3ED] text-[12px]">
                        {status}
                      </button>
                      <button className="text-center rounded-full border-[1px] px-[13px] py-[5px] border-[#F3F3ED] text-[#F3F3ED] text-[12px]">
                        {level}
                      </button>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-black/50 to-transparent" />
                  {/* Right shadow */}
                  <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-black/50 to-transparent" />
                  <div className="h-fit md:h-[78px] border-t-[0.5px] py-4 px-6 border-t-[#F3F3ED] bg-[#42464B]">
                    <Link
                      href={route}
                      className="h-[50px] rounded-[9999px] border-[1px] text-[#1D1F24] px-[21px] py-[9px] bg-[#FAFF69] flex items-center justify-center font-sans text-[16px] font-bold md:leading-6 w-full"
                    >
                      {buttonText}
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          aria-label="Scroll right"
          disabled={!canScrollRight}
          style={{
            opacity: canScrollRight ? 1 : 0.5,
            pointerEvents: canScrollRight ? "auto" : "none",
          }}
        >
          <IoChevronForwardCircleOutline
            size={40}
            stroke="#FAFF69"
            fill="none"
            strokeWidth={1}
          />
        </button>
      </motion.div>
    </section>
  );
};

export default WhatWeTeach;
