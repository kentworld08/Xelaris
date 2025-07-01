// schemas/formSchemas.ts
import { z } from "zod";
import { countryCodes } from "@/utils/countryCodes";
import { timeZones } from "@/utils/timeZones";
import {
  classDayOptions,
  classTimeOptions,
  classDurationOptions,
  childAgeOptions,
} from "@/utils/formOptions";

const currentYear = new Date().getFullYear();
const expiryYears = Array.from({ length: 15 }, (_, i) =>
  String(currentYear + i)
);

export const baseFormSchema = z.object({
  // Step 1 Fields
  parentName: z.string().min(1, { message: "Parent name is required." }),
  childName: z.string().min(1, { message: "Child name is required." }),
  countryCode: z.string().min(1, { message: "Country code is required." }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required." })
    .max(12),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
  timeZone: z
    .string()
    .min(1, { message: "Time Zone is required." })
    .refine((val) => timeZones.some((tz) => tz.value === val), {
      message: "Invalid Time Zone selected.",
    }),
  childAge: z
    .string()
    .min(1, { message: "Child age is required." })
    .refine((val) => childAgeOptions.some((opt) => opt.value === val), {
      message: "Invalid child age selected.",
    }),
  classDuration: z
    .string()
    .min(1, { message: "Class duration is required." })
    .refine((val) => classDurationOptions.some((opt) => opt.value === val), {
      message: "Invalid class duration selected.",
    }),
  classDay: z
    .string()
    .min(1, { message: "Class day is required." })
    .refine((val) => classDayOptions.some((opt) => opt.value === val), {
      message: "Invalid class day selected.",
    }),
  classTime: z
    .string()
    .min(1, { message: "Class time is required." })
    .refine((val) => classTimeOptions.some((opt) => opt.value === val), {
      message: "Invalid class time selected.",
    }),
  nameOnCard: z.string().min(1, { message: "Name on card is required." }),
  cardNumber: z
    .string()
    .min(16, { message: "Card number must be at least 16 digits." })
    .max(19, { message: "Card number cannot exceed 19 digits." })
    .regex(/^\d+$/, { message: "Card number must contain only digits." }),

  expiryYear: z
    .string()
    .min(1, { message: "Expiry year is required." })
    .regex(/^\d{2}(?:[0-9]{2})?$/, {
      message: "Invalid year format (YY or YYYY).",
    })
    // Now 'expiryYears' is accessible here
    .refine(
      (val) => {
        const fullYear = val.length === 2 ? `20${val}` : val; // Convert 2-digit to 4-digit
        return expiryYears.includes(fullYear);
      },
      {
        message: "Expiry year is not in a valid range.",
      }
    ),
  cvv: z
    .string()
    .min(3, { message: "CVV must be 3 or 4 digits." })
    .max(4, { message: "CVV must be 3 or 4 digits." })
    .regex(/^\d+$/, { message: "CVV must contain only digits." }),
});

export const fullFormSchema = baseFormSchema.superRefine((data, ctx) => {
  // --- Cross-field Validation for Phone Number (Step 1) ---
  // Only proceed if both fields are non-empty; individual .min(1) rules handle initial emptiness
  if (data.countryCode && data.phoneNumber) {
    const selectedCountry = countryCodes.find(
      (c) => c.code === data.countryCode
    );

    if (!selectedCountry) {
      ctx.addIssue({
        // If country code is somehow invalid/not found in our list
        code: z.ZodIssueCode.custom,
        message: "Invalid country code selected.",
        path: ["countryCode"],
      });
    } else {
      const numberPart = data.phoneNumber;

      // Validate length based on selected country
      if (
        selectedCountry.minLength &&
        numberPart.length < selectedCountry.minLength
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Phone number must be at least ${selectedCountry.minLength} digits.`,
          path: ["phoneNumber"],
        });
      }
      if (
        selectedCountry.maxLength &&
        numberPart.length > selectedCountry.maxLength
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Phone number must be at most ${selectedCountry.maxLength} digits.`,
          path: ["phoneNumber"],
        });
      }

      // Validate regex for specific country format (if provided)
      if (selectedCountry.regex && !selectedCountry.regex.test(numberPart)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Invalid phone number format for ${selectedCountry.name}.`,
          path: ["phoneNumber"],
        });
      }
    }
  }
});

export type FullFormValues = z.infer<typeof fullFormSchema>;

export const stepOneFields = z.object({
  parentName: baseFormSchema.shape.parentName,
  childName: baseFormSchema.shape.childName,
  countryCode: baseFormSchema.shape.countryCode,
  phoneNumber: baseFormSchema.shape.phoneNumber,
  email: baseFormSchema.shape.email,
  password: baseFormSchema.shape.password,
});

export const stepTwoFields = z.object({
  timeZone: baseFormSchema.shape.timeZone,
  childAge: baseFormSchema.shape.childAge,
  classDuration: baseFormSchema.shape.classDuration,
  classDay: baseFormSchema.shape.classDay,
  classTime: baseFormSchema.shape.classTime,
});

export const stepThreeFields = z.object({
  nameOnCard: baseFormSchema.shape.nameOnCard,
  cardNumber: baseFormSchema.shape.cardNumber,

  expiryYear: baseFormSchema.shape.expiryYear,
  cvv: baseFormSchema.shape.cvv,
});
