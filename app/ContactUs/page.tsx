import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const ContactUs = () => {
  return (
    <main className="h-[962px] w-full py-[150px] px-[20px] md:px-[72px] md:h-[670px] md:top-[106px] bg-black24 flex items-center justify-center flex-col">
      <h1 className="font-sans font-normal text-[32.48px] leading-[42px] -tracking-[1.1px] text-light md:text-[48.32px md:leading-[50px]">
        {" "}
        Get in{" "}
        <span className="font-serif font-light italic text-[35.9px] leading-[42px] -tracking-[1.1px] text-light md:text-[60.3px] md:leading-[50px]">
          touch
        </span>
      </h1>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col gap-[36px] md:flex-row mt-[79px]"
      >
        <div className="w-[326x] h-[324.13px] rounded-[8px] pt-[40px] pb-[50px] px-[32px] bg-light md:w-[384px] md:h-[328px]">
          <div className="gap-[23px] flex flex-col">
            <Image src="/message.png" alt="message" height={20.25} width={23} />
            <h1 className="h-[27px] font-sans font-normal text-[24px] leading-[26.4px] -tracking-[0.7px] align-middle text-cyan60 md:leading-[26.4px]">
              Parent support
            </h1>
            <p className="h-[82px] w-[250px] font-sans font-normal text-[17px] leading-[20.4px] -tracking-[0.2px] align-middle text-black24">
              Need help with class schedules, rescheduling, or any other
              inquiries? Our support team is here to assist.
            </p>
          </div>
          <p className="font-sans font-medium h-[53px] text-[18px] leading-[14.3px] tracking-[0.9px] align-middle text-cyan60 flex gap-3 mt-[15px] items-center">
            hello@xelaris.co{" "}
            <Image
              src="/arrow.png"
              alt="foward email icon"
              width={12}
              height={9.75}
            />
          </p>
        </div>
        <div className="w-[326x] h-[324.13px] rounded-[8px] pt-[40px] pb-[50px] px-[32px] bg-light md:w-[384px] md:h-[328px]">
          <div className="gap-[23px] flex flex-col">
            <Image
              src="/listener.png"
              alt="message"
              height={20.25}
              width={23}
            />
            <h1 className="h-[27px] font-sans font-normal text-[24px] leading-[26.4px] -tracking-[0.7px] align-middle text-cyan60 md:leading-[26.4px]">
              Schedule a call
            </h1>
            <p className="h-[82px] w-[250px] font-sans font-normal text-[17px] leading-[20.4px] -tracking-[0.2px] align-middle text-black24">
              Book a free call to discuss your child`s interests, experience
              level, and find the perfect program match.
            </p>
          </div>
          <p className="font-sans font-medium h-[53px] text-[18px] leading-[14.3px] tracking-[0.9px] align-middle text-cyan60 flex gap-3 mt-[15px] items-center">
            Book a call{" "}
            <Image
              src="/arrow.png"
              alt="foward email icon"
              width={12}
              height={9.75}
            />
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactUs;
