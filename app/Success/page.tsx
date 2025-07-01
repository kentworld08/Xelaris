import Image from "next/image";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="h-[864px] bg-black24 md:px-[72] px-[20] flex justify-center items-center ">
      <div className="md:w-[497px] md:h-[520px] border-[0.3px] border-yellow69 bg-[#FBFAF4] py-[98px] px-[38px] w-full">
        <div className="flex flex-col justify-center items-center gap-[43px]">
          <Image
            src="/successIcon.png"
            alt="Success icon"
            height={66}
            width={66}
          />
          <div className="gap-[22px] flex flex-col">
            <h1 className="font-sans font-normal text-[25px] leading-[23px] md:tracking-[0.23px] text-[#091717] text-center ">
              Registration Successful!
            </h1>
            <p className="font-sans font-normal md:text-[17px] text-center md:leading-[25px md:tracking-[0.23px] text-[#091717]">
              Your child`s class is confirmed! We`ve sent all the details to
              your email, including the Zoom link and instructor information.
            </p>
          </div>
          <Link
            href="/"
            className="md:w-[418px] h-[42px] rounded-4xl border-[1px] text-black24 px-[25pxpx] py-[13px] bg-yellow69 flex items-center justify-center font-sans text-[15.88px] font-medium leading-[24px] tracking-normal align-middle cursor-pointer border-none hover:opacity-90 w-[390px]"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;
