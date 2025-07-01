"use client";
import React from "react";
declare interface ButtonProps {
  title: string;
  width: string;
  maxWidth?: string;
  onclick?: () => void;
}

const PrimaryButton = ({ title, width, maxWidth }: ButtonProps) => {
  return (
    <button
      style={{ width: width, maxWidth: maxWidth }}
      type="button"
      className=" h-[42px] rounded-4xl border-[1px] px-[21px] py-[9px] border-yellow69 flex items-center justify-center text-yellow69 tracking-normal text-center cursor-pointer"
    >
      {title}
    </button>
  );
};

const SecondaryButton = ({ title, width, onclick }: ButtonProps) => {
  return (
    <button
      onClick={() => onclick}
      style={{ width: width }}
      type="button"
      className=" h-[42px] rounded-4xl border-[1px] text-black24 px-[25pxpx] py-[13px] bg-yellow69 flex items-center justify-center font-sans text-[15.88px] font-medium leading-[24px] tracking-normal align-middle cursor-pointer border-none hover:opacity-90"
    >
      {title}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
