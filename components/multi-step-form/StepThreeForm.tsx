// components/multi-step-form/StepThree.tsx
"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FullFormValues } from "@/schemas/formSchemas";

export default function StepThree() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FullFormValues>();

  // Generate options for Expiry Year (current year + next 14 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => String(currentYear + i)); // Generates years from currentYear to currentYear + 14

  return (
    <div>
      <h4 className="text-lg font-medium mb-3 mt-6">Payment Information</h4>
      <div className="mb-4">
        <label
          htmlFor="nameOnCard"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Name on Card
        </label>
        <input
          type="text"
          id="nameOnCard"
          {...register("nameOnCard")}
          className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
        />
        {errors.nameOnCard && (
          <p className="mt-1 text-sm text-red-600">
            {errors.nameOnCard.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="cardNumber"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          {...register("cardNumber")}
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="cc-number"
          className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
        />
        {errors.cardNumber && (
          <p className="mt-1 text-sm text-red-600">
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label
            htmlFor="expiryYear"
            className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
          >
            Expiry Year
          </label>
          <select
            id="expiryYear"
            {...register("expiryYear")}
            className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
          >
            <option value="">YYYY</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.expiryYear && (
            <p className="mt-1 text-sm text-red-600">
              {errors.expiryYear.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="cvv"
            className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            {...register("cvv")}
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            autoComplete="cc-csc"
            className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
          />
          {errors.cvv && (
            <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
