import React from "react";
import { TeamData } from "@/components/ContentData";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="overflow-hidden pb-[90px]">
      <section className="h-[488px] p-[64px] gap-[20px] w-full flex flex-col items-center justify-center  bg-[url('/aboutBg.png')] bg-cover bg-no-repeat bg-center md:h-[810px] px-[20px]">
        <div className="w-[392px] h-[75px] flex justify-center md:w-[501px] md:h-[75px]">
          <h1 className="font-sans font-normal text-[25px] leading-[74.4px] -tracking-[0.24px] text-light md:-tracking-[3.2px] md:text-[48.32px]">
            About
          </h1>{" "}
          &nbsp;
          <span className="font-serif font-light italic text-[35.9px] leading-[74.4px] -tracking-[0.24px] text-light md:-tracking-[3.2px] md:text-[60.3px]">
            Xelaris
          </span>
        </div>
        <div className="w-[340px] h-[100px] max-w-[1440px]md:h-[73px] md:w-[559px]">
          <p className="font-sans font-normal text-[16px] leading-[21.6px] -tracking-[0.24px] align-middle text-light text-center md:text-[20px] md:leading-[27px] md:tracking-normal">
            Founded by former educators from Synthesis and Springboard, Xelaris
            is led by a team deeply passionate about technology, education, and
            the intersection of both.
          </p>
        </div>
        <div className="w-[340px] h-[86px] max-w-[1440px] md:w-[655px] md:h-[90px]">
          <p className="font-sans font-normal text-[18px] leading-[21.6px] -tracking-[0.24px] align-middle text-light text-center md:text-[20px] md:tracking-normal md:leading-[27px]">
            We are educators, designers, and engineers who believe in pushing
            boundaries to create engaging, innovative, and meaningful learning
            experiences tailored specifically for kids and teens.
          </p>
        </div>
      </section>
      <section className="px-[20px] md:px-[72px] ">
        <div className="w-[342px] h-[40px] mt-[74px] md:w-[213px] md:h-[85px]">
          <h1 className="font-sans font-normal text-[28px] leading-[40px] tracking-normal text-light md:text-[39.88px] md:-tracking-[0.85px] md:leading-[85px]">
            Our{" "}
            <span className="font-serif font-normal text-[35.9px] leading-[40px] tracking-normal text-light md:leading-[85px] md:text-[60.3px] md:-tracking-[0.85px]">
              Team
            </span>{" "}
          </h1>
        </div>
        <div className="w-[320px] h-[110.28px] pt-[23.28px] md:w-[590px] md:h-[80px] md:pt-[24px] mb-5">
          <p className="font-sans font-normal text-[16px] leading-[21.6px] tracking-[0.18px] align-middle text-light">
            They`re We believe there`s nothing more powerful than using your
            skills to make a difference. Meet the team who are building the
            foundation of Xelaris.
          </p>
        </div>
        <div className="grid gap-[69px] md:grid-cols-2 lg:grid-3 xl:grid-cols-4 2xl:grid-cols-5">
          {TeamData.map((team, index) => (
            <div
              key={team.name + "" + index}
              className="border-[1px] border-[#E2E3D3] w-full md:w-[266px]"
            >
              <Image
                src={team.imageUrl}
                alt={team.name}
                height={247}
                width={372}
                className="w-full h-[247px] md:w-[264px] md:h-[202px]"
              />
              <div className="w-full h-[100px] py-[16px] px-[14px] gap-[8px] flex flex-col">
                <h1 className="font-sans font-bold text-[24px] leading-[28.8px] -tracking-[0.32px] align-middle text-yellow69">
                  {team.name}
                </h1>
                <p className="font-sans font-normal text-[16px] leading-[24px] -tracking-[0.48] align-middle text-light">
                  {team.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
