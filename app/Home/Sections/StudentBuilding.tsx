const StudentBuilding = () => {
  return (
    <section className="w-full h-fit md:h-[509px]  flex flex-col items-center text-center mt-[156px] px-[20px] md:px-[72px]">
      <h2 className="w-full md:w-[768px] font-sans font-semibold text-[14.98px] leading-[22.68px] tracking-normal align-middle text-[#FFFEFA80]">
        Software | AI | Blockchain
      </h2>
      <div className="w-full md:w-[607px] h-fit md:h-[186px]">
        <h1 className="font-sans font-medium text-[34.03px] leading-[43.03px] tracking-normal  text-[#FFFEFA] md:text-[57.95px] md:leading-[76.82px]">
          See what our <br className="md:hidden" />
          <span className="font-serif font-light italic text-[42.5px] leading-[41.63px] -tracking-[1.45px] md:text-[72.88px] md:leading-[70.88px]">
            students are building
          </span>
        </h1>
      </div>
      <div className="w-full md:w-[768px] h-fit md:h-[75.68px] pt-[6.88px] flex flex-col md:flex-row justify-center items-center">
        <p className="w-[314.65px] font-sans font-normal text-[15.88px] leading-[21px] tracking-normal align-middle text-light-yellow-70 text-center md:text-[16px] md:leading-[22.68px] md:w-[600px]">
          From mobile apps to AI tools to full web applications; these
          aren&apos;t just classroom exercises. They&apos;re real projects that
          showcase technical growth, creative thinking, and the problem-solving
          confidence our students develop
        </p>
      </div>
    </section>
  );
};

export default StudentBuilding;
