// components/MultiStepForm.tsx
"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  stepOneFields,
  stepThreeFields,
  stepTwoFields,
  fullFormSchema,
  FullFormValues,
} from "@/schemas/formSchemas";

// Import your individual step components
import StepOne from "@/components/multi-step-form/StepOneForm";
import StepTwo from "@/components/multi-step-form/StepTwoForm";
import StepThree from "@/components/multi-step-form/StepThreeForm";

// Define which fields belong to which step for validation purposes
const formSteps = [
  {
    component: <StepOne />,
    fields: Object.keys(stepOneFields.shape) as (keyof FullFormValues)[],
  },
  {
    component: <StepTwo />,
    fields: Object.keys(stepTwoFields.shape) as (keyof FullFormValues)[],
  },
  {
    component: <StepThree />,
    fields: Object.keys(stepThreeFields.shape) as (keyof FullFormValues)[],
  },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<FullFormValues>({
    resolver: zodResolver(fullFormSchema), // Use the full schema for overall validation
    defaultValues: {
      parentName: "",
      childName: "",
      password: "",
      email: "",
      phoneNumber: "",
      timeZone: "",
      childAge: "",
      classDuration: "",
      classDay: "",
      classTime: "",
      nameOnCard: "",
      cardNumber: "",
      expiryYear: "",
      cvv: "",
    },
    mode: "onTouched", // Validate on blur or change, not just on submit
  });

  const {
    trigger,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleNext = async () => {
    // Get the fields to validate for the current step
    const fieldsToValidate = formSteps[currentStep].fields;

    // Trigger validation for the current step's fields
    const stepIsValid = await trigger(fieldsToValidate, { shouldFocus: true });

    if (stepIsValid && currentStep < formSteps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const onSubmit = async (data: FullFormValues) => {
    console.log("Final Form Data:", data);

    methods.reset();
    setCurrentStep(0);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <main className="md:w-full md:h-[864px] bg-black24 py-[58px] px-[20px]">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:p-[39px] max-w-2xl mx-auto bg-[#FFFEF9] md:h-fit md:w-[497px] gap-[10px] flex flex-col border-[0.3px] border-yellow69 md:max-h-[760px] p-2"
        >
          <div className="items-center text-center flex justify-center">
            <div
              className={`${
                currentStep === 0
                  ? "bg-black24 text-[#FFFFFF]"
                  : "text-black24 bg-[#09171714]"
              } w-[24px] h-[24px] rounded-full text-center `}
            >
              1
            </div>
            <div className="w-[102px] h-[4px] bg-[#09171714]" />
            <div
              className={`${
                currentStep === 1
                  ? "bg-black24 text-[#FFFFFF]"
                  : "text-black24 bg-[#09171714]"
              } w-[24px] h-[24px] rounded-full text-center `}
            >
              2
            </div>
            <div className="w-[102px] h-[4px] bg-[#09171714]" />
            <div
              className={`${
                currentStep === 2
                  ? "bg-black24 text-[#FFFFFF]"
                  : "text-black24 bg-[#09171714]"
              } w-[24px] h-[24px] rounded-full text-center `}
            >
              3
            </div>
          </div>

          {/* Conditionally render the current step's component */}
          {formSteps[currentStep].component}

          {currentStep === 0 && (
            <p className="font-sans font-normal md:text-[13.34px] md:leading-[18px] md:w-[360px] text-black24">
              By clicking `Continue`, you agree to Xelaris`s{" "}
              <span className="font-sans font-normal md:text-[13.34px] tracking-normal underline text-black24 decoration-0">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="font-sans font-normal md:text-[13.34px] tracking-normal underline text-black24 decoration-0">
                Terms Of Service.
              </span>
            </p>
          )}

          <div className="flex flex-col justify-between mt-[22px]">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="text-left mb-3 text-black24 cursor-pointer w-[80px] font-medium text-[17px] font-sans bg-[#BDC1CA] py-[0.3px] px-1 rounded-[4px] hover:opacity-90"
              >
                Previous
              </button>
            )}

            {currentStep < formSteps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="md:px-[21px] md:py-[9px] rounded-[9999px] bg-yellow69 text-black24 font-sans font-medium hover:opacity-90 md:w-[418px] md:h-[50px] w-full px-[13px] py-[9px] text-[17px]"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="md:px-[21px] md:py-[9px] rounded-[9999px] bg-yellow69 text-black24 font-sans font-medium hover:opacity-90 md:w-[418px] md:h-[50px] w-full px-[13px] py-[9px] text-[17px]"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </main>
  );
}
