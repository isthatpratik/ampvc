"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 🚀 Block personal email domains
const personalEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "aol.com",
  "outlook.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
];

// 🔹 Industry options
const industries = [
  "FinTech",
  "HealthTech",
  "EdTech",
  "AI & Machine Learning",
  "E-commerce",
  "SaaS",
  "Cybersecurity",
  "Clean Energy",
];

// ✅ Zod Schema for Validation
const formSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  workEmail: z
    .string()
    .email("Enter a valid email")
    .refine(
      (email) => !personalEmailDomains.includes(email.split("@")[1]),
      "Personal email addresses are not allowed"
    ),
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  role: z.string().min(2, "Role is required"),
  industry: z.string().min(1, "Industry is required"),
});

type FormData = z.infer<typeof formSchema>;

interface MatchingListProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MatchingList({ open, setOpen }: MatchingListProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      workEmail: "",
      companyName: "",
      role: "",
      industry: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setFormSubmitted(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) {
          setFormSubmitted(false);
          reset();
        }
      }}
    >
      <DialogContent className="sm:max-w-[500px] w-full bg-white text-black shadow-xl p-11 z-50">
        {formSubmitted ? (
          // ✅ Thank You Message
          <div className="bg-[url('/images/form/form-success-bg.png')] bg-cover bg-no-repeat bg-center p-16 text-center flex flex-col items-center gap-6">
            <h2 className="text-h1">You're on the list!</h2>
            <p className="text-body-1 px-12 mx-auto">
              We’ll notify you as soon as the full list is available.
              Stay tuned for updates!
            </p>
            <div className="py-24"></div>
          </div>
        ) : (
          <>
            <DialogTitle className="text-center font-semibold text-h3">
              Get The Full List
            </DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="space-y-1">
                <label
                  htmlFor="fullName"
                  className="text-[18px] font-normal leading-6 text-[#181A1A]"
                >
                  Your Name
                </label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="John Doe"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="workEmail"
                  className="text-[18px] font-normal leading-6 text-[#181A1A]"
                >
                  Work Email
                </label>
                <Input
                  id="workEmail"
                  type="email"
                  {...register("workEmail")}
                  placeholder="You@company.com"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.workEmail && (
                  <p className="text-red-500 text-sm">{errors.workEmail.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="companyName"
                  className="text-[18px] font-normal leading-6 text-[#181A1A]"
                >
                  Company Name
                </label>
                <Input
                  id="companyName"
                  {...register("companyName")}
                  placeholder="Ampersand"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="role"
                  className="text-[18px] font-normal leading-6 text-[#181A1A]"
                >
                  Role
                </label>
                <Input
                  id="role"
                  {...register("role")}
                  placeholder="Venture Capitalist"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[18px] font-normal leading-6 text-[#181A1A]">
                  Industry
                </label>
                <Controller
                  name="industry"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full border-b-[#AFB6B4] shadow-none rounded-none px-0 text-left">
                        <SelectValue placeholder="Select Industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.industry && (
                  <p className="text-red-500 text-sm">{errors.industry.message}</p>
                )}
              </div>

              <div className="flex justify-center mt-12 p-18">
                <Button
                  type="submit"
                  className="h-12 px-6 shadow-none hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 py-1 flex items-center text-body-2"
                >
                  Submit <ArrowRight />
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
