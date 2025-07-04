"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    reset(data);
    router.push("/");
  };

  return (
    <main className="md:h-[864px] md:bg-black24 flex justify-center items-center flex-col px-[20px] md:px-[72px] bg-[#FBFAF4] h-[864px]">
      <h1 className="font-sans font-normal text-[30px] leading-[23px] tracking-[0.23px] mb-[28px] text-black24 md:text-light">
        Welcome back
      </h1>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:p-[39px] max-w-2xl mx-auto bg-[#FFFEF9] md:h-fit md:w-[497px] gap-[10px] flex flex-col border-[0.3px] md:max-h-[760px] p-2 w-full"
        >
          <div>
            <label
              htmlFor="email"
              className="block md:text-[15.63px] font-normal text-black24 font-sans md:leading-[22px]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
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
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className="mt-1 block w-full border-[#D9DCE1] shadow-sm p-2 border-[1px] rounded-[4px] placeholder:text-[#BDC1CA] text-black24 text-[15px]"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className="underline font-normal text-[14px] leading-[24px] text-black24 mt-[24px]">
            Forgot password?
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="md:px-[21px] md:py-[9px] rounded-[9999px] bg-yellow69 text-black24 font-sans font-medium hover:opacity-90 md:w-[418px] md:h-[50px] w-full px-[13px] py-[9px] text-[17px] mt-[59.49px] duration-75 ease-in-out cursor-pointer"
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
          <p className="font-sans font-normal text-[14px] text-center mt-[32.97px] text-[#1B1B1B]">
            Need to create an account?{" "}
            <span className="font-normal text-sans text-[14px] underline">
              Sign up
            </span>
          </p>
        </form>
      </motion.div>
    </main>
  );
}
