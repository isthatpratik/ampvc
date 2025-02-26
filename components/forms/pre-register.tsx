"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

const formSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  workEmail: z
    .string()
    .email("Invalid email address")
    .refine(
      (email) => !personalEmailDomains.includes(email.split("@")[1]),
      "Personal email addresses are not allowed"
    ),
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  role: z.string().min(2, "Role is required"),
  industry: z.string().min(1, "Industry is required"),
});

type FormData = z.infer<typeof formSchema>;

interface PreregisterProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Preregister({ open, setOpen }: PreregisterProps) {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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
    setIsSubmitted(true); // Show thank you message instead of closing
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl w-full p-0 border-none bg-white text-black shadow-xl z-50">
        {/* Show Thank You Message if Form is Submitted */}
        {isSubmitted ? (
          <div className="bg-[url('/images/form/form-success-bg.png')] bg-cover bg-no-repeat bg-center p-16 text-center flex flex-col items-center gap-6">
            <h2 className="text-h1">Thank You!</h2>
            <p className="text-body-1 px-12 mx-auto"> 
              We’ll notify you as soon as we launch, so you can be among the first to experience it.  
              Stay tuned for exciting updates!
            </p>
            <div className="py-24"></div>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 mt-4 p-11"
            >
              <DialogTitle className="text-center font-semibold text-[40px] ">
                Pre-Register for Fynar AI
              </DialogTitle>
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
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
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
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.workEmail && (
                  <p className="text-red-500 text-sm">
                    {errors.workEmail.message}
                  </p>
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
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message}
                  </p>
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
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
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
                      <SelectTrigger className="w-full border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0 text-left">
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
                  <p className="text-red-500 text-sm">
                    {errors.industry.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="h-12 px-6 shadow-none hover:bg-black/5 transition-all duration-300 rounded-full bg-transparent border border-black/20 py-1 flex items-center text-body-2"
                >
                  Submit <ArrowRight className="ml-2" />
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
