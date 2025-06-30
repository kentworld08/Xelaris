import React from "react";

const StudentSportlight = () => {
  return (
    <section className="w-full h-fit gap-8 flex md:justify-between md:flex-row flex-col md:pb-[104px]">
      <div className="w-full md:w-[495px] h-fit md:h-[1169px] space-y-[16px]">
        <div className="w-full md:w-[399px] h-fit md:h-[125.69px]">
          <h1 className="font-sans font-bold text-[28px] leading-[36.4px] tracking-normal align-middle text-[#F2F0EB] md:text-[60.3px] md:leading-[64px]">
            Our Student{" "}
            <span className="font-serif font-light italic text-[28px] leading-[36.4px] tracking-normal align-middle text-[#F3F3ED] md:text-[60.3px] md:leading-[64px]">
              Spotlights
            </span>
          </h1>
        </div>
        <div className="w-full md:w-[399px] h-fit md:h-[76px] opacity-70 ">
          <p className="font-sans font-normal text-[16px] leading-[22.4px] tracking-normal align-middle text-[#F3F3ED] w-[340px] md:text-[17.8px] md:leading-[25.2px] md:w-[400px]">
            Celebrating the hard work, talent, and growth of our students as
            they excel in competitions and present their innovative projects.
          </p>
        </div>
      </div>
      <div className="space-y-[83.61px]">
        <div className="bg-[#FAFF69] w-full md:w-[762px] h-fit md:h-[562px] p-5 md:p-10 space-y-[32px]">
          <iframe
            src="https://www.youtube.com/embed/MPbl76Pck1Q?si=etmCos97sPMrtaxt"
            title="YouTube video player"
            className="border-0 w-full h-[174.38px] md:h-[338.39px] md:w-[681.61px]"
          ></iframe>

          <div className="w-full md:w-[681.61px] h-fit md:h-[112px] ">
            <p className=" font-sans font-normal text-[16px] leading-[24px] tracking-normal align-middle text-center text-[#091717] md:text-[18px] md:leading-[28px] md:font-helvetica">
              We`&apos;re so proud of our student Fedir, who took 2nd place in{" "}
              <span className="font-sans font-bold text-[16px] leading-[24px] tracking-normal align-middle md:text-[18px] md:leading-[28px] text-[#091717]">
                {" "}
                Computer Science at the National BETA State Convention!
              </span>
              &nbsp; Fedir put in months of hard work preparing for this
              competition, and seeing his dedication and problem-solving skills
              pay off at the state level makes us incredibly proud.
            </p>
          </div>
        </div>
        <div className="bg-[#FAFF69] w-full md:w-[762px] h-fit md:h-[562px] p-5 md:p-10 space-y-[32px]">
          <iframe
            src="https://www.youtube.com/embed/MPbl76Pck1Q?si=etmCos97sPMrtaxt"
            title="YouTube video player"
            className="border-0 w-full h-[174.38px] md:h-[338.39px] md:w-[681.61px]"
          ></iframe>

          <div className="w-full md:w-[681.61px] h-fit md:h-[112px] ">
            <p className=" font-sans font-normal text-[16px] leading-[24px] tracking-normal align-middle text-center text-[#091717] md:leading-[28px] md:font-helvetica ">
              We`re so proud of our student Zach! He did an amazing job
              presenting his AI project at the camp. His parent were truly
              impressed by how confident and clear he was throughout his
              presentation. &nbsp;
              <span className="font-sans font-bold text-[16px] leading-[24px] tracking-normal align-middle  md:text-[18px] md:leading-[28px] text-[#091717]">
                As his mom said, they attribute his success to the support and
                guidance he`s receiving through our program.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSportlight;
