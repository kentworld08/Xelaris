import { WhatMakesUsDifferentData } from "@/components/ContentData";
import Link from "next/link";
import * as motion from "motion/react-client";

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-[116px]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full ">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 200 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full space-y-[18px]"
        >
          <h2 className="font-sans font-normal text-[32.66px] leading-[36px] tracking-normal text-[#F2F0EB] md:text-[51.1px] md:leading-[70px]">
            What Makes Us <br />
            <span className="font-serif font-light italic text-[32.66px] leading-[36px] tracking-normal text-[#F2F0EB] md:text-[60.3px] md:leading-[70px]">
              Different?
            </span>
          </h2>
          <p className="font-sans font-normal text-[16px] leading-[22.4px] tracking-normal text-[#F2F0EB] md:text-[22px] md:leading-[30px] md:w-[504px]">
            This isn`t school. It`s a launchpad for the next generation of
            innovators.
          </p>
          <Link href="/Form">
            <button
              type="button"
              className="bg-[#FAFF69] text-[#1D1F24] font-bold py-2 px-4 rounded-[9999px] border-[1px] text-sm font-helvetica border-none hover:opacity-90 cursor-pointer ease-in-out duration-75"
            >
              Book A Free Class
            </button>
          </Link>
        </motion.div>
        <div className="flex mt-[67px] gap-[35.5px]">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[12px] h-[12px] bg-[#F2F1EB] rounded-full" />
            <div className="h-[214.2px] bg-light w-[2px]" />
            <div className="w-[12px] h-[12px] bg-[#F2F1EB] rounded-full" />
            <div className="h-[214.2px] bg-light w-[2px]" />
            <div className="w-[12px] h-[12px] bg-[#F2F1EB] rounded-full" />
            <div className="h-[214.2px] bg-light w-[2px]" />
            <div className="w-[12px] h-[12px] bg-[#F2F1EB] rounded-full" />
            <div className="h-[214.2px] bg-light w-[2px]" />
            <div className="w-[12px] h-[12px] bg-[#F2F1EB] rounded-full" />
            <div className="h-[214.2px] bg-light w-[2px]" />
            <div className="w-[12px] h-[12px] bg-[#F2F1EB] rounded-full" />
          </div>
          <div className="space-y-[10px] ">
            {WhatMakesUsDifferentData.map(({ title, paragraph }, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                key={title + "" + index}
                className="bg-[#F2F0EB] w-full md:w-[601px] h-fit md:h-[205px] py-[25px] px-[30px]"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <h1 className="w-full md:w-[186px] h-fit md:h-[96px] font-sans font-bold text-[22.75px] leading-[24.2px] tracking-normal text-[#1D1F24]">
                    {title}
                  </h1>
                  <p className="w-[267px] font-sans font-normal text-[14.5px] leading-[19.2pxx] -tracking-[0.32px] text-[#1D1F24]">
                    {paragraph}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
