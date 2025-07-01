import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

// import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="px-[20px] w-full h-[60px] bg-[#1D1F24] text-white flex items-center fixed top-0 z-10 md:px-[72px]">
      <div className="flex w-full justify-between items-center">
        <Link href="/" className="text-xl flex items-center">
          <Image
            src="/logo-icon.png"
            height={42}
            width={40.98}
            alt="logo-icon"
            className="w-[24.82px] h-[26px] md:w-[40.98px] md:h-[42px]"
          />
          <h1 className="font-normal text-[18px] leading-[23px] tracking-normal font-helvetica">
            Xelaris
          </h1>
        </Link>

        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8">
            <li className="flex gap-2">
              <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans">
                Company
              </p>
              {/* <sub>
                {" "}
                <RiArrowDropDownLine size={30} />
              </sub> */}
            </li>
            <li className="flex gap-2">
              <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans">
                School
              </p>
              {/* <sub>
                {" "}
                <RiArrowDropDownLine size={30} />
              </sub> */}
            </li>
            <li>
              <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans">
                Pricing
              </p>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-white font-normal text-[15.88px] leading-6 tracking-normal align-middle font-sans hidden md:block"
          >
            Login
          </Link>
          <PrimaryButton title="Book A Free Class" width="181px" />

          {/* <button className="border-[#FAFF69]  text-[#1D1F24] font-bold py-2 px-4 rounded-[9999px] border-[1px] text-sm font-serif">
            Book A Free Class
          </button> */}
          <div className="md:hidden">icon</div>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <SecondaryButton title="Book A Free Class" width="171px" />

          <div className="md:hidden">icon</div>
        </div>
      </div>
    </header>
    // <header className="px-[20px] w-full">
    //   <div className="flex justify-between items-center h-[60px]">
    //     <Link href="/" className="text-xl flex items-center ">
    //       <Image
    //         src="/logo-icon.png"
    //         height={42}
    //         width={40.98}
    //         alt="logo-icon"
    //         className="w-[24.82px] h-[26px]"
    //       />
    //       <h1 className="font-normal text-[18px] leading-[23px] tracking-normal align-middle text-white font-helvetica">
    //         Xelaris
    //       </h1>
    //     </Link>

    //     <nav className="hidden md:flex flex-grow justify-center">
    //       <ul className="flex space-x-8">
    //         <li className="flex gap-2">
    //           <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans">
    //             Company
    //           </p>
    //           <sub>
    //             {" "}
    //             <RiArrowDropDownLine size={30} />
    //           </sub>
    //         </li>
    //         <li className="flex gap-2">
    //           <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans">
    //             School
    //           </p>
    //           <sub>
    //             {" "}
    //             <RiArrowDropDownLine size={30} />
    //           </sub>
    //         </li>
    //         <li>
    //           <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans">
    //             Pricing
    //           </p>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div className="flex items-center justify-center gap-4">
    //       <Link
    //         href="#"
    //         className="text-white font-normal text-[15.88px] leading-6 tracking-normal align-middle font-sans hidden md:block"
    //       >
    //         Login
    //       </Link>
    //       <div className="hidden md:block">
    //         <PrimaryButton title="Book A Free Class" width="181px" />
    //       </div>
    //       <div className=" block md:hidden">
    //         <button className=" h-[40px] w-[144px] py-[9.5px] px-[14px] bg-[#FAFF69] text-[#1D1F24] font-serif font-normal tracking-normal text-center rounded-[9999px]">
    //           Book A Free Class
    //         </button>
    //       </div>

    //       <div className="md:hidden">menu</div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
