import StudentBuilding from "@/app/Home/Sections/StudentBuilding";
import StudentBuildings from "@/app/Home/Sections/StudentBuildingsTemplate";
import { MyCustomAccordion } from "@/app/Utilities/Accordion";
import { SecondaryButton } from "@/app/Utilities/Button";
import { AccordionItems } from "@/app/Utilities/ContentData";
import Image from "next/image";

const Software = () => {
  return (
    <main className="px-[20px] md:px-[72px]">
      <section className="py-[64px] gap-[64px] flex flex-col md:flex-row justify-between md:pt-[72px] items-center">
        <div className="w-full h-[300px] gap-[20.38px] flex flex-col md:w-[712px] md:h-[351.51px] md:max-w-[872px] md:gap-[23.3px]">
          <div className="h-[86.38px] w-[388px] md:w-[560px] md:h-[153.22px]">
            <h1 className="font-sans font-medium text-[43.03px] leading-[43.2px] tracking-normal align-middle md:text-[57.95px] md:leading-[76.62px] text-light">
              School of software{" "}
              <span className="font-serif font-light italic text-[40px] leading-[43.2px] tracking-normal align-middle md:text-[60.3px] md:leading-[76.62px]">
                development
              </span>
            </h1>
          </div>
          <div className="w-[330px] max-w-[560px] md:w-[560px]">
            <p className="font-sans font-normal text-[15.75px] leading-[24px] tracking-normal align-middle text-light-yellow-70 md:text-[16.83px] md:leading-[25.68px]">
              This self-paced course is designed for students to build skills in
              HTML, CSS and Javascript, the core languages of the web. By the
              end, they`ll be able to build fully functional web apps.{" "}
            </p>
          </div>
          <SecondaryButton title="Book A Free Class" width="188px" />
        </div>
        <Image
          src="/school.png"
          alt="Learn with us"
          width={390}
          height={420.33}
          className="md:w-[720px] md:h-[776px]"
        />
      </section>
      <section className="py-[48px] gap-[48px] flex flex-col md:flex-row">
        <Image
          src="/panel-discussion.png"
          alt="panel discussion image"
          width={351}
          height={364.67}
          className="md:w-[648px] md:h-[673.23px]"
        />
        <div className="md:w-[648px] md:pl-[97.19px] md:flex md:flex-col gap-[22.8px]">
          <h1 className="font-sans font-medium text-[28.26px] leading-[61.3px] tracking-normal text-light md:text-[47.31px] md:leading-[61.3px]">
            What You`ll &nbsp;
            <span className="font-serif font-light italic text-[35px] leading-[36.48px] tracking-normal text-light md:text-[60.3px] md:leading-[61.3px]">
              Learn
            </span>
          </h1>
          <p className="w-[330px] font-sans font-light text-[14px] leading-[21px] tracking-normal align-middle text-light-yellow-70 mb-[32px] md:text-[14.98px] md:leading-[22.68px] md:w-[530px]">
            Every web or mobile application has two parts: a front-end and a
            back-end. The front-end is what the user sees and interacts with.
            It`s the app on your phone or the website you visit. So, front-end
            developers are in charge of building beautiful, interactive user
            interfaces.
          </p>
          <hr className="text-yellow69" />
          <MyCustomAccordion items={AccordionItems} defaultOpenIndex={0} />
        </div>
      </section>
      <StudentBuilding />
      <StudentBuildings />
    </main>
  );
};

export default Software;
