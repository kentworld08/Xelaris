import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="hidden md:block px-[72px] h-[432px] bg-[#34353A]">
        <div className="pt-[38.51px] min-w-full table-auto text-left flex pb-[51.49px]">
          <div className="flex flex-col w-[338px]">
            <h1 className="px-4 py-2 font-bold text-[#F2F0EB] text-[11.63px] uppercase leading-[15.6px] -tracking-[0.02px] align-middle font-sans">
              SITE MAP
            </h1>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm hover:opacity-90 cursor-pointer">
                About Us
              </p>
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm hover:opacity-90 cursor-pointer">
                Contact Us
              </p>
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90cursor-pointer">
                Pricing
              </p>{" "}
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90 cursor-pointer">
                Careers
              </p>
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
          </div>
          <div className="flex flex-col w-[338px]">
            <h1 className="px-4 py-2 font-bold text-[#F2F0EB] text-[11.63px] uppercase leading-[15.6px] -tracking-[0.02px] align-middle font-sans">
              SOCIAL
            </h1>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90 cursor-pointer">
                Instagram
              </p>
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90 cursor-pointer">
                Twitter (X)
              </p>{" "}
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90 cursor-pointer">
                Facebook
              </p>{" "}
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90 cursor-pointer">
                Linkedin
              </p>{" "}
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </Link>
          </div>
          <div className="flex flex-col w-[338px]">
            <h1 className="px-4 py-2 font-bold text-[#F2F0EB] text-[11.63px] uppercase leading-[15.6px] -tracking-[0.02px] align-middle font-sans">
              LEGAL
            </h1>
            <div className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90 cursor-pointer">
                Terms of Service
              </p>{" "}
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="px-4 py-2 text-[#F2F0EB] font-sans text-[20px] leading-[30px] -tracking-[0.02px] align-middle text-sm  hover:opacity-90 cursor-pointer">
                Privacy Policy
              </p>{" "}
              <Image
                src="/termsIcon.png"
                alt="Privacy Policy icon"
                width={2.44}
                height={6.4}
              />
            </div>
          </div>
        </div>

        <hr className="border-[#FFFEFA80] mb-4" />
        <div className="w-full h-[118px] py-8 gap-[40px] flex justify-between items-center ">
          <div className="flex items-center gap-1">
            {" "}
            <Image
              src="/browser.png"
              alt="browser image"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />{" "}
            United States | English{" "}
            <sub>
              <Image
                src="/footerdroparrow.png"
                alt="footer drop arrow image"
                width={12}
                height={12}
                className="w-[12px] h-[12px]"
              />
            </sub>{" "}
          </div>{" "}
          <div className="w-[271px] gap-[40px] flex justify-between">
            <p className="font-sans font-normal text-[16px] leading-[24px] tracking-normal align-middle text-[#F2F0EB]">
              Terms of service
            </p>
            <p className="font-sans font-normal text-[16px] leading-[24px] tracking-normal align-middle text-[#F2F0EB]">
              Privacy policy
            </p>
          </div>
          <div className="flex gap-[24px] w-[200px]">
            <Image
              src="/instagram.png"
              alt="instagram icon"
              width={32}
              height={32}
              className="w-[32px] h-[32px]"
            />
            <Image
              src="/twitter.png"
              alt="twitter icon"
              width={32}
              height={32}
              className="w-[32px] h-[32px]"
            />
            <Image
              src="/facebook.png"
              alt="facebook icon"
              width={32}
              height={32}
              className="w-[32px] h-[32px]"
            />
            <Image
              src="/linkdin.png"
              alt="linkdin icon"
              width={32}
              height={32}
              className="w-[32px] h-[32px]"
            />
          </div>
        </div>
      </footer>
      {/* MOBILE */}
      <div className="block md:hidden w-full bg-[#34353A] py-[37px] px-[10px] space-y-[40.01px] p">
        <div className="mt-[37px] pb-[40px]">
          <h2 className="uppercase font-sans font-normal text-[11.68px] leading-[15.6px] -tracking-[0.01px] align-middle text-[#F2F0EB] pb-[30px] ">
            Site Map
          </h2>
          <ul className="w-full space-y-[16px]">
            <li className="flex justify-between items-center">
              <Link href="/About">About Us</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="About us link"
                width={24}
                height={24}
              />
            </li>
            <li className="flex justify-between items-center">
              <Link href="/About">Contact Us</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="Contact us link"
                width={24}
                height={24}
              />
            </li>
            <li className="flex justify-between items-center">
              <Link href="/About">Pricing</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="Pricing link"
                width={24}
                height={24}
              />
            </li>
            <li className="flex justify-between items-center">
              <Link href="/About">Careers</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="Careers link"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>
        <div className="mt-[37px] pb-[40px]">
          <h2 className="uppercase font-sans font-normal text-[11.68px] leading-[15.6px] -tracking-[0.01px] align-middle text-[#F2F0EB] ">
            Social
          </h2>
          <ul className="w-full space-y-[16px]">
            <li className="flex justify-between items-center">
              <Link href="/About">Instagram</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="About us link"
                width={24}
                height={24}
              />
            </li>
            <li className="flex justify-between items-center">
              <Link href="/">Twitter</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="Contact us link"
                width={24}
                height={24}
              />
            </li>
            <li className="flex justify-between items-center">
              <Link href="/">Facebook</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="Pricing link"
                width={24}
                height={24}
              />
            </li>
            <li className="flex justify-between items-center">
              <Link href="/">Linkedin</Link>{" "}
              <Image
                src="/footerLinkIcon.png"
                alt="Careers link"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>
        <div className="w-full space-y-[33px]">
          <h3 className="w-full flex justify-between items-center">
            Privacy Policy
            <Image
              src="/termsIcon.png"
              alt="Privacy Policy icon"
              width={2.44}
              height={6.4}
            />
          </h3>
          <h3 className="w-full flex justify-between items-center">
            Terms Services
            <Image
              src="/termsIcon.png"
              alt="Terms Services icon"
              width={2.44}
              height={6.4}
            />
          </h3>
          <div>
            Socials
            <div className="flex gap-2.5 ">
              <Image
                src="/youtube.png"
                alt="youtube icon"
                width={24}
                height={24}
              />
              <Image src="/in.png" alt="linkedin icon" width={24} height={24} />
              <Image
                src="/ig.png"
                alt="instagram icon"
                width={24}
                height={24}
              />
              <Image src="/x.png" alt="twitter icon" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
