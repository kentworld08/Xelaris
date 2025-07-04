import React from "react";
import { ParentReviewsCarousel } from "./ParentReviewSlid";
import * as motion from "motion/react-client";

const ParentReview = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="px-[20px] mt-[466px] md:mt-[135px]"
    >
      <div className="flex justify-end">
        <div className="w-[60px] h-[18px] bg-[#1F808D]" />
        <div className="w-[6.63px] h-[18px] bg-[#EB001B]" />

        <div className="w-[200px] h-[18px] bg-[#FAFF69]" />
      </div>
      <div className="flex justify-end">
        <div className="w-[42px] h-[18px] bg-[#FBBC04]" />
        <div className="w-[98.66px] h-[18px] bg-[#C0F864]" />
      </div>
      <div className="w-full">
        <div className="w-full md:w-[768px] h-fit md:h-[62px] mt-[81px] md:mb-[79.78px]">
          <h1 className="font-sans font-medium text-[30.4px] tracking-normal text-[#F2F0EB] md:text-[51.1px] md:leading-[61.3px]">
            Parents{" "}
            <span className="font-serif font-light italic text-[35.9px] leading-[35.15px] -tracking-[0.72px]  text-[#F2F0EB] md:text-[60.3px] md:leading-[59px] md:-tracking-[1.21px]">
              Reviews
            </span>
          </h1>
        </div>
        <div className="w-full h-fit md:h-[776.69px] pb-[96px]">
          <ParentReviewsCarousel />
        </div>
      </div>
    </motion.section>
  );
};

export default ParentReview;
