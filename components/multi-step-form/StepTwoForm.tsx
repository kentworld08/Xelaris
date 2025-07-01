"use client";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FullFormValues } from "@/schemas/formSchemas";
import { timeZones, getUserLocalTimeZone } from "@/utils/timeZones";
import {
  childAgeOptions,
  classDurationOptions,
  classTimeOptions,
  classDayOptions,
} from "@/utils/formOptions";

export default function StepTwo() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<FullFormValues>();

  // Optional: Set default time zone to user's local time zone on component mount
  useEffect(() => {
    const userTimeZone = getUserLocalTimeZone();
    if (userTimeZone && timeZones.some((tz) => tz.value === userTimeZone)) {
      setValue("timeZone", userTimeZone, { shouldValidate: false });
    }
  }, [setValue]);

  return (
    <div className="mt-6">
      <div className="mb-4">
        <label
          htmlFor="timeZone"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Time Zone
        </label>
        <select
          id="timeZone"
          {...register("timeZone")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900 placeholder-gray-400 "
        >
          <option value="">Select a Time Zone</option>
          {timeZones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
        {errors.timeZone && (
          <p className="mt-1 text-sm text-red-600">{errors.timeZone.message}</p>
        )}
      </div>

      {/* NEW: Child Age Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="childAge"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Select Child Age
        </label>
        <select
          id="childAge"
          {...register("childAge")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900 placeholder-gray-400 "
        >
          <option value="">Select Child Age</option>
          {childAgeOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black24"
            >
              {option.label}
            </option>
          ))}
        </select>
        {errors.childAge && (
          <p className="mt-1 text-sm text-red-600">{errors.childAge.message}</p>
        )}
      </div>

      {/* NEW: Class Duration Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="classDuration"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          Class Duration
        </label>
        <select
          id="classDuration"
          {...register("classDuration")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900 placeholder-gray-400 "
        >
          <option value="">Select Class Duration</option>
          {classDurationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.classDuration && (
          <p className="mt-1 text-sm text-red-600">
            {errors.classDuration.message}
          </p>
        )}
      </div>

      {/* NEW: Class Day Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="classDay"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          What Day Are You Available For Class?
        </label>
        <select
          id="classDay"
          {...register("classDay")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900 placeholder-gray-400 "
        >
          <option value="">Select Day</option>
          {classDayOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.classDay && (
          <p className="mt-1 text-sm text-red-600">{errors.classDay.message}</p>
        )}
      </div>

      {/* NEW: Class Time Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="classTime"
          className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
        >
          What Time Are You Available For Class?
        </label>
        <select
          id="classTime"
          {...register("classTime")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900 placeholder-gray-400 "
        >
          <option value="">Select Time</option>
          {classTimeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.classTime && (
          <p className="mt-1 text-sm text-red-600">
            {errors.classTime.message}
          </p>
        )}
      </div>
    </div>
  );
}
