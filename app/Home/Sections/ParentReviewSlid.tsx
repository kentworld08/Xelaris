import { ParentReviewsData } from "@/app/Utilities/ContentData";
import Image from "next/image";
export function ParentReviewsCarousel() {
  return (
    <div>
      <div className="h-fit md:h-[740px] flex flex-col md:flex-row justify-between gap-[48px] pt-[38.83px]">
        {ParentReviewsData.map((item, index) => (
          <div
            key={item.name + "" + index}
            className="w-full md:w-[276px] h-fit md:h-[276px]"
          >
            <div className="h-fit md:h-[617px] ">
              <div className="space-y-5">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    height={276}
                    width={276}
                    alt={`Parent review by ${item.name}`}
                    className="w-full"
                  />
                )}
                <div>
                  <h3 className="text-[17.86px] font-sans font-semibold leading-[27px] tracking-normal align-middle text-[#F2F0EB] md:text-[18.8px] md:leading-[28.88px]">
                    {item.name}
                  </h3>
                  <div className="font-sans font-normal text-[14px] leading-[21px] tracking-normal align-middle text-light-yellow-70">
                    {item.country}
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <span className="w-full md:w-[268px] font-sans font-normal text-[14px] leading-[21px] tracking-normal align-middle text-light-yellow-70">
                    {item.testimony}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-between mt-[82.01px] ">
        <div className="flex gap-[10.1px]">
          <div className="w-2 h-2 rounded-full bg-[#FAFF69]" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
          <div className="w-2 h-2 rounded-full bg-light-yellow-70" />
        </div>
        <div className="gap-4 flex">
          <button type="button">
            <Image
              src="/forwardArrow.png"
              alt="Backward arrow button"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </button>
          <button type="button">
            <Image
              src="/forwardArrow.png"
              alt="forward arrow button"
              width={48}
              height={48}
              className="h-12 w-12 rotate-180"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
