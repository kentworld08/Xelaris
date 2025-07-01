import StudentBuilding from "@/app/Home/Sections/StudentBuilding";
import StudentBuildings from "@/app/Home/Sections/StudentBuildingsTemplate";
import { MyCustomAccordion } from "@/components/ui/Accordion";
import { SecondaryButton } from "@/components/ui/Button";
import { AccordionItems, SchoolsData } from "@/components/ContentData";
import Image from "next/image";

const SchoolsTemplateContent = (spanText: string) => {
  const data = SchoolsData.find(
    (data) => data.spanText.toLowerCase() === spanText.toLocaleLowerCase()
  );
  return (
    <main className="px-[20px] md:px-[72px]">
      <section className="py-[64px] gap-[64px] flex flex-col md:flex-row justify-between md:pt-[72px] items-center">
        <div className="w-full h-[300px] gap-[20.38px] flex flex-col md:w-[712px] md:h-[351.51px] md:max-w-[872px] md:gap-[23.3px]">
          <div className="h-[86.38px] w-[388px] md:w-[560px] md:h-[153.22px]">
            <h1 className="font-sans font-medium text-[43.03px] leading-[43.2px] tracking-normal md:text-[57.95px] md:leading-[76.62px] text-light">
              {data?.title}
              <span className="font-serif font-light italic text-[40px] leading-[43.2px] tracking-normal md:text-[60.3px] md:leading-[76.62px]">
                {data?.spanText}
              </span>
            </h1>
          </div>
          <div className="w-[330px] max-w-[560px] md:w-[560px]">
            <p className="font-sans font-normal text-[15.75px] leading-[24px] tracking-normal align-middle text-light-yellow-70 md:text-[16.83px] md:leading-[25.68px]">
              {data?.typography}
            </p>
          </div>
          <SecondaryButton
            title={data?.btnText ?? "Book A Free Class"}
            width="188px"
          />
        </div>
        <Image
          src={data?.imageurl1 ?? "/school.png"}
          alt="Learn with us"
          width={390}
          height={420.33}
          className="md:w-[720px] md:h-[776px]"
        />
      </section>
      <section className="py-[48px] gap-[48px] flex flex-col md:flex-row">
        <Image
          src={data?.imageurl2 ?? "/panel-discussion.png"}
          alt="panel discussion image"
          width={351}
          height={364.67}
          className="md:w-[648px] md:h-[673.23px]"
        />
        <div className="md:w-[648px] md:pl-[97.19px] md:flex md:flex-col gap-[22.8px]">
          <h1 className="font-sans font-medium text-[28.26px] leading-[61.3px] tracking-normal text-light md:text-[47.31px] md:leading-[61.3px]">
            {data?.learn} &nbsp;
            <span className="font-serif font-light italic text-[35px] leading-[36.48px] tracking-normal text-light md:text-[60.3px] md:leading-[61.3px]">
              {data?.learnSpan}
            </span>
          </h1>
          <p className="w-[330px] font-sans font-light text-[14px] leading-[21px] tracking-normal align-middle text-light-yellow-70 mb-[32px] md:text-[14.98px] md:leading-[22.68px] md:w-[530px]">
            {data?.typography2}
          </p>
          <hr className="text-yellow69" />
          <MyCustomAccordion
            items={data?.AccordionItems ?? AccordionItems}
            defaultOpenIndex={0}
          />
        </div>
      </section>
      <StudentBuilding />
      <StudentBuildings />
    </main>
  );
};

export default SchoolsTemplateContent;
