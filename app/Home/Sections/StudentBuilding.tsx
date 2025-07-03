import InteractiveParagraph from "@/utils/InteractiveParagraph";

const StudentBuilding = () => {
  const myParagraph =
    "   From mobile apps to AI tools to full web applications; these aren`t just classroom exercises They`re real projects that showcase technical growth, creative thinking, and the problem-solving confidence our students develop";

  return (
    <section className="flex flex-col justify-center items-center md:py-[112px] pt-[96px] pb-[64px] text-center w-full">
      <h3 className="md:text-[14.98px] md:leading-[22.68px] font-sans font-semibold tracking-normal align-middle text-[#FFFEFA80]">
        Software | AI | Blockchain
      </h3>
      <h1 className="font-sans font-medium md:text-[57.95px] md:leading-[76.62px] tracking-normal text-light md:w-[607px] text-center text-[34.03px] leading-[43.2px] w-[340px] mb-[20px]">
        See what our{" "}
        <span className="font-serif font-medium italic md:text-[72.3px] md:leading-[70.88px] md:-tracking-[1.45px] text-light text-[42.5px] leading-[41.63px] -tracking-[0.85px]">
          students are building
        </span>
      </h1>
      <p className="md:w-[670px] md:text-[16px] md:leading-[22.68px] tracking-normal align-middle font-sans text-[#FFFEFAB2] text-center text-[15.88px] leading-[21px] font-light w-[351px]">
        <InteractiveParagraph text={myParagraph} />
      </p>
    </section>
  );
};

export default StudentBuilding;
