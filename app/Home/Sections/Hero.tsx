import React from "react";

import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/app/Utilities/Button";
import Link from "next/link";
import BuildRealProjects from "./BuildRealProjects";
import WhatWeTeach from "./WhatWeTeach";
import StudentBuilding from "./StudentBuilding";
import StudentBuildings from "./StudentBuildingsTemplate";
import MathScores from "./MathScores";
import StudentSportlight from "./StudentSportlight";

import ParentReview from "./ParentReview";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";

const HomePage = () => {
  return (
    <main className="h-fit  px-[20px] md:px-[72px] md:h-fit pt-[96px]">
      <section className="w-full flex justify-between items-center md:h-[640px] ">
        <div className=" space-y-[27px] md:space-y-[46.16px]">
          <div className="w-[351px] h-[157px] md:w-[450px] md:h-[248px]">
            <h1 className="font-sans font-medium text-[35px] leading-[40px] tracking-normal align-middle md:text-[57.95px] md:leading-[60px]">
              {" "}
              The best place for kids/teens to learn tech skills.
            </h1>{" "}
            <span className="font-serif font-light italic text-[42px] leading-[40px] tracking-normal align-middle text-yellow69 md:text-[72.3px] md:leading-[60px]">
              {" "}
              guaranteed.
            </span>
          </div>
          <div className="w-[351px] h-[78px] max-w-[560px] md:w-[410px] md:h-[52px] md:max-w-[560px]">
            <p className="font-sans font-normal text-[15.75px] leading-[25.68px] tracking-normal align-middle text-light-yellow-70 md:text-[16.83px]">
              We&apos;re laying the foundation for the next generation of
              pioneers in Software Engineering, AI, and Blockchain.
            </p>
          </div>
          <div className="w-[262px] h-[24px] flex gap-1">
            <Image
              src="/Margin.png"
              alt="margin"
              height={24}
              width={40}
              className="w-[32px] h-[24px]"
            />
            <h2
              className="font-helvetica font-bold text-[18px] leading-[24px] tracking-normal align-middle text-[#BBBBBA]
        "
            >
              1-on-1 online live classes
            </h2>
          </div>

          <div className="w-[351px] h-[54px] pt-[4px] gap-[16px] flex">
            <Link href="/">
              <SecondaryButton width="188px" title="Book A Free Class" />
            </Link>
            <Link href="/">
              <PrimaryButton title="Signup" width="103px" maxWidth="351px" />
            </Link>
          </div>
        </div>
        <div className=" hidden md:block relative ">
          <Image
            src="/careers-bg-image.webp.png"
            alt="careers-bg-image"
            width={778}
            height={680}
            className="h-[588px] md:h-[640px] md:w-[778px]"
          />
          <Image
            src="/pedro.webp.png"
            alt="pedro"
            height={324}
            width={405}
            className="max-w-[324px] absolute -inset-x-12 inset-y-40"
          />
        </div>
      </section>
      {/* MOBILE */}
      <Image
        src="/tores.png"
        alt="mobile"
        width={390}
        height={420.33}
        className="mt-[64px] md:hidden pb-10 "
      />

      <section className="h-[226px] px-[20px] flex flex-col md:flex-row justify-between items-center">
        <div className="h-[108px] w-full">
          <div className="flex flex-col items-start justify-center">
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
        <div className=" w-full h-[108px] pt-12 md:pt-0 flex flex-col text-left items-start">
          <p className="font-sans font-normal text-[12px] leading-[12px] tracking-[2px] align-middle text-light-yellow-70 text-start">
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
      <BuildRealProjects />
      <WhatWeTeach />
      <StudentBuilding />
      <StudentBuildings />
      <MathScores />
      <StudentSportlight />
      <ParentReview />
      <WhatMakesUsDifferent />
    </main>
  );
};

export default HomePage;
