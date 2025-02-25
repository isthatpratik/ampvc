"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// ✅ Zod Schema for Validation
const formSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  workEmail: z.string().email("Enter a valid email"),
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  role: z.string().min(2, "Role is required"),
  industry: z.string().min(2, "Industry is required"),
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
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setFormSubmitted(true);

    // Simulate API call delay before closing (Optional)
    setTimeout(() => {
      setOpen(false);
      setFormSubmitted(false);
      reset(); // Reset form after closing
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) setFormSubmitted(false); // Reset formSubmitted when closing dialog manually
    }}>
      <DialogContent className="sm:max-w-[500px] w-full bg-white text-black shadow-xl p-11 z-50">

        {formSubmitted ? (
          // ✅ Thank You Message after Submission
          <div className="text-center">
            <DialogTitle className="font-semibold text-h3">Thank You!</DialogTitle>
            <p className="mt-4 text-gray-600">Your request has been received. We will get back to you soon.</p>
            <Button
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogTitle className="text-center font-semibold text-h3">
              Get The Full List
            </DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="space-y-1">
                <label htmlFor="fullName" className="text-[18px] font-normal leading-6 text-[#181A1A]">
                  Your Name
                </label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="John Doe"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="workEmail" className="text-[18px] font-normal leading-6 text-[#181A1A]">
                  Work Email
                </label>
                <Input
                  id="workEmail"
                  type="email"
                  {...register("workEmail")}
                  placeholder="You@company.com"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.workEmail && <p className="text-red-500 text-sm">{errors.workEmail.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="companyName" className="text-[18px] font-normal leading-6 text-[#181A1A]">
                  Company Name
                </label>
                <Input
                  id="companyName"
                  {...register("companyName")}
                  placeholder="Ampersand"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="role" className="text-[18px] font-normal leading-6 text-[#181A1A]">
                  Role
                </label>
                <Input
                  id="role"
                  {...register("role")}
                  placeholder="Venture Capitalist"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="industry" className="text-[18px] font-normal leading-6 text-[#181A1A]">
                  Industry
                </label>
                <Input
                  id="industry"
                  {...register("industry")}
                  placeholder="Early-Stage Tech Investments"
                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                />
                {errors.industry && <p className="text-red-500 text-sm">{errors.industry.message}</p>}
              </div>

              <div className="flex justify-center mt-12 p-18">
                <Button
                  type="submit"
                  className="h-12 px-6 shadow-none hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20  py-1 flex items-center text-body-2"
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