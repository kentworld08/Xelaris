"use client";

import Link from "next/link";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  // Handles mouse entering a menu link or its dropdown
  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  // Handles mouse leaving both link and dropdown area
  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = (event.target as HTMLElement).closest("a");

    if (target) {
      // If a Link or <a> was clicked, then close the navigation
      setOpen(false);
    }
  };

  return (
    <header className="px-[20px] w-full h-[60px] bg-[#1D1F24] text-white flex items-center fixed top-0 z-100 md:px-[72px]">
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
            <li
              className="flex gap-2 relative align-middle justify-center items-center"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans">
                Company
              </p>

              <RiArrowDropDownLine size={30} />

              <div
                className={`
            absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-50
            transition-all duration-300 ease-in-out
            ${
              hoveredMenu === "company"
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-3"
            }
          `}
              >
                <Link
                  href="/About"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About Xelaris
                </Link>
                <Link
                  href="/ContactUs"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Get in Touch
                </Link>
              </div>
            </li>

            <li
              className="flex gap-2 relative align-middle justify-center items-center"
              onMouseEnter={() => handleMouseEnter("school")}
              onMouseLeave={handleMouseLeave}
            >
              <p className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans cursor-pointer">
                School
              </p>
              <RiArrowDropDownLine size={30} />
              {/* Dropdown */}
              <div
                className={`
            absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-50
            transition-all duration-300 ease-in-out
            ${
              hoveredMenu === "school"
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-3"
            }
          `}
              >
                <Link
                  href="/Software"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Software Development
                </Link>
                <Link
                  href="/ProductDesign"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product Design
                </Link>
                <Link
                  href="/ArtificialIntelligence"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Artificial Intelligence
                </Link>
                <Link
                  href="/Web3Developer"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Web3 Developer
                </Link>
              </div>{" "}
            </li>
            <li>
              <Link
                href="/Pricing"
                className="font-inter font-normal text-[15.88px] leading-[24px] tracking-normal align-middle text-white font-sans"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/LoginSignUp"
            className="text-white font-normal text-[15.88px] leading-6 tracking-normal align-middle font-sans hidden md:block"
          >
            Login
          </Link>
          <Link href="/Form">
            <PrimaryButton title="Book A Free Class" width="181px" />
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <Link href="/Form">
            <SecondaryButton title="Book A Free Class" width="171px" />
          </Link>
        </div>

        <>
          {/* Hamburger button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 focus:outline-none md:hidden"
          >
            {/* Simple hamburger icon */}
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  open && "rotate-45 translate-y-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  open && "-rotate-45 -translate-y-1.5"
                }`}
              />
            </div>
          </button>

          {/* Menu overlay */}
          <div
            className={`fixed top-[60px] left-0 h-full w-full bg-black24 opacity-98 z-50 transition-transform duration-300 md:hidden ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav
              className="flex flex-col p-6 space-y-6 text-white text-lg"
              onClick={handleNavClick}
            >
              <a href="#" onClick={(e) => e.preventDefault()}></a>
              <Link href="/About">About Xelaris</Link>
              <Link href="/ContactUs">Get in Touch</Link>
              <Link href="/Software">Software Development</Link>
              <Link href="/ProductDesign">Product Design</Link>
              <Link href="/ArtificialIntelligence">
                Artificial Intelligence
              </Link>
              <Link href="/Web3Developer">Web3 Developer</Link>
              <Link href="/Pricing">Pricing</Link>
              <Link href="/LoginSignUp">Login</Link>
            </nav>
          </div>
        </>
      </div>
    </header>
  );
};

export default Header;
