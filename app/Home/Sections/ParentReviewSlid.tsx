"use client";

import { ParentReviewsData } from "@/components/ContentData";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function ParentReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // You can adjust this
      scrollRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const cardWidth = 276;
      const gap = 48;
      const totalCardWidth = cardWidth + gap;
      const index = Math.round(container.scrollLeft / totalCardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        ref={scrollRef}
        className="h-fit md:h-[740px] flex md:flex-row justify-between gap-[48px] pt-[38.83px] overflow-x-hidden scroll-smooth flex-row"
      >
        {ParentReviewsData.map((item, index) => (
          <div
            key={item.name + "" + index}
            className="w-full md:w-[276px] h-fit md:h-[276px] flex-shrink-0"
          >
            <div className="h-fit md:h-[617px] ">
              <div className="space-y-5">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    height={276}
                    width={276}
                    alt={`Parent review by ${item.name}`}
                    className="w-full"
                  />
                )}
                <div>
                  <h3 className="text-[17.86px] font-sans font-semibold leading-[27px] tracking-normal align-middle text-[#F2F0EB] md:text-[18.8px] md:leading-[28.88px]">
                    {item.name}
                  </h3>
                  <div className="font-sans font-normal text-[14px] leading-[21px] tracking-normal align-middle text-light-yellow-70">
                    {item.country}
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <span className="w-full md:w-[268px] font-sans font-normal text-[14px] leading-[21px] tracking-normal align-middle text-light-yellow-70">
                    {item.testimony}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-between mt-[82.01px] ">
        <div className="flex gap-[10.1px]">
          {ParentReviewsData.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === activeIndex ? "bg-[#FAFF69]" : "bg-light-yellow-70"
              }`}
            />
          ))}
        </div>
        <div className="gap-4 flex">
          <button type="button" onClick={() => scroll("left")}>
            <Image
              src="/forwardArrow.png"
              alt="Backward arrow button"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </button>
          <button type="button" onClick={() => scroll("right")}>
            <Image
              src="/forwardArrow.png"
              alt="forward arrow button"
              width={48}
              height={48}
              className="h-12 w-12 rotate-180"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
