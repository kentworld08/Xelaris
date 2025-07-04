import InteractiveParagraph from "@/utils/InteractiveParagraph";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const MathScores = () => {
  const myParagraph =
    "Zach`s MAP math scores went up 20% from last fall which is a phenomenal leap, from 75% percentile to 95% percentile achievement in math. We think it`s because of all the coding problem solving work. It`s the biannual test the students take to measure them against all other students in US based schools. Yes, they have a math performance break down and his problem solving skills were the highest section by a huge margin from coding of course.";

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="px-[20px] pt-[44.61px] pb-[64px] md:pb-[150px]"
    >
      <div className="w-full h-fit md:h-[113px] border-t-[1px] pt-[44.61px] pb-[64px] border-t-[#515151] hidden md:block" />
      <div className="w-full h-fit md:h-[604px] gap-[91px] flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-[19px]">
          <h1 className="font-sans font-medium text-[31.41px] leading-[36px] tracking-normal align-middle md:w-[437px] md:text-[40px] md:-tracking-[3.3px] md:leading-[55pxpx]">
            From 75th to 95th Percentile: Coding Boosted Our Student{" "}
            <span className="font-serif font-light italic text-[31.41px] leading-[36px] tracking-normal text-light md:text-[60.3px] md:leading-[55px] md:-tracking-[3.3px]">
              Zach&apos;s Math Scores by 20%
            </span>
          </h1>
          <p className="font-sans font-normal texr-[16px] leading-[22.4px] -tracking-[0.1px] align-middle text-light-yellow-70 w-[320px] md:w-[420px] md:text-[17.6px] md:leading-[25.2px] md:tracking-normal">
            <InteractiveParagraph text={myParagraph} />
          </p>
          <h3 className="font-sans font-bold text-[12.8px] leading-[14px] -tracking-[0.14px] align-middle uppercase text-[#E4E3D3] md:text-[15px] md:leading-[20px]">
            Alice Richardson
          </h3>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col gap-[23.97px] md:flex-row"
        >
          <Image
            src="/tall-card.png"
            alt="div tall card"
            width={389}
            height={604}
            className="h-[553px] w-full md:w-[389px] md:h-[604px]"
          />
          <Image
            src="/tall-card2.png"
            alt="div tall card"
            width={389}
            height={604}
            className="h-[553px] w-full md:w-[389px] md:h-[604px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MathScores;
