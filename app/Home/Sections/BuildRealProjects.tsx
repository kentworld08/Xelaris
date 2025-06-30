import Image from "next/image";

const BuildRealProjects = () => {
  return (
    <section className="mt-[95.59px] p-[72px] flex flex-col justify-between items-center px-[20px] md:flex-row">
      <div>
        <div className="w-full space-y-[13px]">
          <h5 className="font-sans font-semibold text-[14.98px] leading-[22.68px] tracking-normal align-middle text-light-yellow-70 w-full">
            Software | AI | Blockchain
          </h5>
          <div className="w-full md:w-[550.81px] h-fit md:h-[122.58px]">
            <h1 className="font-sans font-medium text-[30.4px] leading-[36.48px] tracking-normal align-middle text-[#FFFEFA] md:text-[51.1px] md:leading-[61.3px]">
              Build real
            </h1>
            <h2 className="w-full font-serif font-light italic text-[35.9px] leading-[36.48px] tracking-normal align-middle text-[#FFFEFA] md:text-[60.3px] md:leading-[59.07px] md:-tracking-[1.21px]">
              projects
            </h2>
          </div>

          <p className="w-full font-sans font-normal text-[16px] leading-[22.68px] tracking-normal align-middle text-light-yellow-70 md:w-[539px]">
            No prior knowledge needed. We introduce students to software
            engineering, AI and blockchain through guided, practical learning.
            While building real-world projects takes time, within a few months,
            our students gain solid foundations and start working on exciting
            projects that showcase their growing abilities.
          </p>
        </div>
      </div>
      <Image
        src="/panel-discussion.png"
        alt="panel discussion"
        height={550.8}
        width={648}
        className="mt-[48px]"
      />
    </section>
  );
};

export default BuildRealProjects;
