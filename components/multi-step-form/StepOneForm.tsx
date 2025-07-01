// components/multi-step-form/StepOne.tsx
"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FullFormValues } from "@/schemas/formSchemas";
import { countryCodes } from "@/utils/countryCodes";

export default function StepOne() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FullFormValues>();

  // Watch the countryCode field to dynamically update placeholder/hints
  const selectedCountryCode = watch("countryCode");
  const currentCountry = countryCodes.find(
    (c) => c.code === selectedCountryCode
  );

  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <label
          htmlFor="parentName"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Parent full name
        </label>
        <input
          type="text"
          id="parentName"
          placeholder="Alexa Plex"
          {...register("parentName")}
          className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
        />
        {errors.parentName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.parentName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="childName"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Child full name
        </label>
        <input
          type="text"
          id="childName"
          placeholder="Alexa Plex"
          {...register("childName")}
          className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
        />
        {errors.childName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.childName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Email Address
        </label>
        <input
          type="text"
          id="email"
          placeholder="Alexa Plex"
          {...register("email")}
          className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phoneNumber"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Phone Number
        </label>
        <div className="flex space-x-2 flex-col">
          <select
            id="countryCode"
            {...register("countryCode")}
            className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
          >
            <option
              value=""
              className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
            >
              Select Code
            </option>
            {countryCodes.map((country) => (
              <option
                key={country.iso}
                value={country.code}
                className="text-black24 "
              >
                {country.name} ({country.code})
              </option>
            ))}
          </select>

          {/* Phone Number Input */}
          <input
            type="tel" // Use type="tel" for phone numbers
            id="phoneNumber"
            {...register("phoneNumber")}
            placeholder={
              currentCountry
                ? `e.g., ${currentCountry.minLength || ""} to ${
                    currentCountry.maxLength || ""
                  } digits`
                : "Enter phone number"
            }
            className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
          />
        </div>
        {/* Display errors for both fields */}
        {errors.countryCode && (
          <p className="mt-1 text-sm text-red-600">
            {errors.countryCode.message}
          </p>
        )}
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
    </div>
  );
}
