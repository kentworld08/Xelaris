import Image from "next/image";
import React from "react";
import { StudentBuildingData } from "@/components/ContentData";
import { PrimaryButton } from "@/components/ui/Button";

const StudentBuildings = () => {
  return (
    <div className="pt-[72px]">
      {StudentBuildingData.map(
        ({
          index,
          name,
          bgColor,
          label1,
          label2,
          summary1,
          summary2,
          buttonTitle,
          width,
          imageUrl,
          mobile1,
          mobile2,
        }) => (
          <section className="pb-[48px] md:pb-[216px] " key={index}>
            <hr className="border-[#FFFEFA80] mb-4 hidden md:block" />
            <div className="w-full flex gap-4">
              {index}
              <p
                style={{ backgroundColor: bgColor, width: width }}
                className="py-1 px-2 font-sans font-semibold leading-0[21px] text-[14px] align-middle tracking-normal text-light text-center"
              >
                {name}
              </p>
            </div>
            <div className="w-full h-fit md:h-fit gap-[64.79px] flex flex-col md:flex-row md:justify-between mt-[48px]">
              <div className="w-full md:w-[615.6px] h-fit md:h-fit max-w-[733.55px] ">
                <h1 className="font-sans font-medium text-[30.4px] leading-[36.48px] tracking-normal text-light md:text-[40px] md:leading-[61.3px]">
                  {label1}{" "}
                  <span className="font-serif font-light italic text-[35.9px] leading-[35.15px]-tracking-[0.72px] text-light md:text-[60.3px] md:leading-[59px] md:-tracking-[1.21px]">
                    {label2}
                  </span>
                </h1>
                <div className="w-full md:w-[554.05px] h-fit md:h-fit pt-[9.28px] gap-[14.85px]">
                  <p className="font-serif font-light italic text-[16.5px] leading-[16.19px] -tracking-[0.33px] align-middle text-light-yellow-70 whitespace-pre-wrap w-[365px] md:text-[17.49px] md:leading-[17.49px] md:-tracking-[0.36px]">
                    <span className="hidden md:block"> {summary1}</span>
                    <span className="block md:hidden"> {mobile1}</span>
                  </p>
                  <br />
                  <p className="font-sans font-normal text-[14px] leading-[21px] tracking-normal align-middle text-light-yellow-70 pb-[0.54px] whitespace-pre-wrap md:text-[14.98px] md:leading-[22.68px]">
                    <span className="hidden md:block"> {summary2}</span>
                    <span className="block md:hidden"> {mobile2}</span>
                  </p>
                  <br />
                  <p className="font-sans font-semibold text-[14.98px] leading-[22.68px] tracking-normal align-middle text-[#FFFEFA80]">
                    {name}
                  </p>
                  <div className="mt-8">
                    <PrimaryButton title={buttonTitle} width="188px" />
                  </div>
                </div>
              </div>
              <Image
                src={imageUrl}
                alt={label1 + "" + label2}
                height={540}
                width={615.61}
                className="w-[351px] h-[306.67px] pb-[21px] md:w-[615.61px] md:h-[540px]"
              />
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default StudentBuildings;
