import React from "react";
import { PricingData } from "@/components/ContentData";
import Link from "next/link";
import * as motion from "motion/react-client";

const Pricing = () => {
  return (
    <main className="md:h-fit flex flex-col gap-[16px] bg-light justify-center items-center px-[20px] md:px-[72px] text-center pb-[121px]">
      <div className="w-[350px] h-[42px] text-center mt-[121px]">
        <h1 className="font-sans font-normal text-[32.19px] leading-[42px] tracking-normal text-black24 md:text-[64.39px] md:leading-[71.28px] md:tracking-[1.5px] md:mb-[16px]">
          Pricing
        </h1>
      </div>
      <div className="w-[320px] h-[98px] md:w-[687px] md:h-[80px] md:mt-[23px] md:mb-[31px]">
        <p className="font-sans font-normal text-[16px] leading-[20.4px] tracking-normal text-center text-black24 md:w-[620px] md:text-[16.83px]">
          Our goal is to provide the finest online tech education available.
          When you enrol your child, their tuition includes much more than just
          the standard class experience{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[42px] flex-wrap">
        {PricingData.map(
          ({ duration, price, timeframe, btntext, included, benefits }) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              key={price}
              className="w-[358px] h-fit rounded-[4px] border-[0.3px] border-[#1F808D] bg-black24 md:w-[420px] md:h-[594px]"
            >
              <div className="p-6">
                <h2 className="w-[310px] h-[24px] font-helvetica font-bold text-[19px] leading-[24px] tracking-normal align-middle text-start text-whiteED mb-[29px] md:w-[372px]">
                  {duration}
                </h2>
                <h1 className="w-[310px] h-[50px] font-helvetica font-extrabold text-[28.88px] leading-[40px] tracking-normal align-middle text-whiteED text-start md:w-[372px] md:h-[49px]">
                  {price}{" "}
                  <span className="font-helvetica font-normal text-[15px] leading-[24px] tracking-normal align-middle text-whiteED md:font-sans md:text-light">
                    {timeframe}
                  </span>
                </h1>
                <Link href="/">
                  <button
                    type="button"
                    className="w-[310px] h-[50px] rounded-[9999px] border-[1px] py-[9px] px-[21px] text-center bg-yellow69 text-black24 font-helvetica font-bold text-[16px] tracking-normal md:w-[372px] md:pt-[10.5px] md:pb-[10px]"
                  >
                    {btntext}
                  </button>
                </Link>
              </div>
              <hr />
              <div className="p-6">
                <h3 className="font-sans font-bold text-[13px] leading-[18px] tracking-[0.32px] align-middle uppercase text-light text-start mb-[24px]">
                  {included}
                </h3>
                <div>
                  {benefits.map((data, index) => (
                    <div key={index} className="flex pb-[16px] md:pb-0">
                      <span className="pr-2 w-[22px] h-[38px]">--</span>
                      <span className="pr-2 w-[22px] h-[38px]">--</span>
                      <p className="font-sans font-normal text-[15px] leading-[18.7px] tracking-[0.34px] align-middle text-light mb-[24px] text-start">
                        {data}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </main>
  );
};

export default Pricing;
