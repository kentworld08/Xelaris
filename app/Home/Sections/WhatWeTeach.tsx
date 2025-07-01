import React from "react";
import Image from "next/image";
// import { IoChevronForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { WhatWeTeachData } from "@/components/ContentData";

const WhatWeTeach = () => {
  return (
    <section className=" px-[20px]">
      <div className="w-full h-[304px] pt-[64px] pb-[64px] space-y-[12px]">
        <div className="flex flex-col items-center md:flex-row md:gap-2 justify-center">
          <h1 className="font-sans font-medium text-[37.19px] leading-[50px] tracking-normal align-middle text-[#FFFEFA]">
            What we
          </h1>{" "}
          <span className="font-serif font-light italic text-[47.2px] -tracking-[1.69px] text-[#FFFEFA] leading-[46.26px] align-middle">
            teach
          </span>
        </div>
        <div className=" w-full flex items-center justify-center align-middle">
          <p className="w-[276px] font-sans text-[15.88px] leading-[24px] tracking-normal align-middle text-light-yellow-70 font-normal text-center justify-self-center md:w-[768px]">
            We teach Software Engineering, AI, Blockchain through a curriculum{" "}
            <br className="hidden md:block" />
            that helps kids become confident problem-solvers, and future-ready
            builders.
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center gap-2 overflow-hidden">
        <div className="flex gap-[25px] flex-col md:flex-row ">
          {WhatWeTeachData.map(
            ({ title, status, buttonText, imageUrl, route, level }) => {
              return (
                <div
                  key={title}
                  className="w-full md:w-[425px] h-fit md:h-[347px] border-[1px] border-[#FCF5EB]"
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={425}
                    height={80}
                    className="w-full md:w-[425px] h-[160px]"
                  />

                  <div className="w-full md:w-[423px] py-3 px-6 bg-[#42464B]">
                    <h1 className="font-sans font-medium text-[20px] leading-[32px] tracking-normal align-middle text-[#F2F2EC] h-fit md:h-[32px] ">
                      {title}
                    </h1>
                    <div className="mt-[12px] space-x-2">
                      <button className="md:w-[83px] text-center rounded-full border-[1px] px-[13px] py-[5px] border-[#F3F3ED]">
                        {status}
                      </button>
                      <button className="w-[83px]text-center rounded-full border-[1px] px-[13px] py-[5px] border-[#F3F3ED]">
                        {level}
                      </button>
                    </div>
                  </div>

                  <div className="h-fit md:h-[78px] border-t-[0.5px] py-4 px-6 border-t-[#F3F3ED]">
                    <Link
                      href={route}
                      className="h-[50px] rounded-[9999px] border-[1px] text-[#1D1F24] px-[21px] py-[9px] bg-primary flex items-center justify-center font-sans text-[16px] font-bold md:leading-6 md:w-[375px] bg-yellow69"
                    >
                      {buttonText}
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
        {/* <IoChevronForwardCircleOutline
          size={40}
          stroke="#FAFF69"
          fill="none"
          strokeWidth={1}
        /> */}
      </div>
    </section>
  );
};

export default WhatWeTeach;
