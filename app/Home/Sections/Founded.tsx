import Image from "next/image";
import React from "react";

const Founded = () => {
  return (
    <section className="h-[226px] px-[20px]">
      <div className="h-[108px]">
        <div className="flex flex-col items-center justify-center ">
          <p className="font-sans font-normal text-[12px] leading-[12px] tracking-[2px] align-middle text-light-yellow-70">
            FOUNDED BY FORMER TECH EDUCATORS FROM
          </p>
          <div className="flex pt-[62px] gap-6 ">
            <Image
              src="/springboard.png"
              alt="springboard"
              height={20.24}
              width={128.09}
            />
            <Image
              src="/synthesis.png"
              alt="springboard"
              height={20.24}
              width={128.09}
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-fit pt-12  flex flex-col text-left items-center">
        <p className="font-sans font-normal text-[12px] leading-[12px] tracking-[2px] align-middle text-light-yellow-70">
          TRUSTED BY PARENTS WORKING AT
        </p>
        <div className="flex pt-[62px] gap-6 text-left flex-wrap items-center">
          <Image
            src="/netflix.png"
            alt="springboard"
            height={19}
            width={69}
            className="h-[15px] w-[69px]"
          />
          <Image
            src="/TESLA.png"
            alt="springboard"
            height={19}
            width={69}
            className="h-[15px] w-[69px]"
          />
          <Image
            src="/amazon.png"
            alt="springboard"
            height={19}
            width={69}
            className="h-[19px] w-[69px]"
          />
          <Image
            src="/duolingo.png"
            alt="springboard"
            height={19}
            width={69}
            className="h-[19px] w-[69px]"
          />
          <Image
            src="/shopify.png"
            alt="springboard"
            height={19}
            width={69}
            className="h-[19px] w-[69px] hidden md:block"
          />
          <Image
            src="/microsoft.png"
            alt="springboard"
            height={19}
            width={69}
            className="h-[19px] w-[69px] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Founded;
