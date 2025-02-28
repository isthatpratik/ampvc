"use client";

import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const jobFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  dialCode: z.string().min(1, "Please select a country code"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  role: z.string().min(2, "Please specify the role"),
  about: z.string().min(10, "Tell us more about yourself (min. 10 characters)"),
});

const roles = [
  "Venture Analyst",
  "M&A Specialist (Mergers & Acquisitions)",
  "AI/ML Engineer (Fynar CRM Development)",
  "Full Stack Developer (CRM & Website)",
  "Growth Marketer – Investor & Startup Outreach",
  "AI/ML Intern – Fynar CRM Development",
  "AI Research Intern – VC & Startup Intelligence",
];

type JobFormValues = z.infer<typeof jobFormSchema>;

interface JobFormProps {
    onClose: () => void;
  }

export default function JobForm({ onClose }: JobFormProps) {
  const [dialCodes, setDialCodes] = useState<{ code: string; name: string }[]>(
    []
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    async function fetchDialCodes() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Array<{ 
          idd?: { root?: string; suffixes?: string[] }; 
          name: { common: string } 
        }> = await response.json();
  
        const codes = data
          .map((country) => ({
            code: country.idd?.root && country.idd?.suffixes?.[0] 
              ? country.idd.root + country.idd.suffixes[0] 
              : "",
            name: country.name.common,
          }))
          .filter((c) => c.code); 
  
        setDialCodes(codes);
      } catch (error) {
        console.error("Error fetching dial codes:", error);
      }
    }
  
    fetchDialCodes();
  }, []);
  

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      dialCode: "+91",
      phone: "",
      role: "",
      about: "",
    },
  });

  const onSubmit = async (data: JobFormValues) => {
    try {
      const response = await fetch("/api/job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        onClose();
        setIsSubmitted(true);
      } else {
        alert("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <motion.div
      className="sticky top-0 flex flex-col lg:w-full overflow-hidden justify-start gap-14 overflow-y-auto "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 25,
      }}
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-h3 font-semibold mb-4">Application Submitted!</h2>
          <p className="text-body-1 text-center text-[#AFB6B4]">
            Thank you for applying. We will review your application and get back
            to you soon.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-h3 font-semibold mb-4">Apply Now</h2>

          {/* Form Wrapper */}
          <div className="border grid space-y-8 border-[#AFB6B4] p-6 min-h-[80vh]">
            <h6 className="text-h6">Get ready to launch your career</h6>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid h-full space-y-6"
              >
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-body-1 text-[#181A1A]">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="lg:text-body-1 placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-body-1 text-[#181A1A]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          placeholder="you@email.com"
                          className="lg:text-body-1 placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Dial Code & Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-body-1 text-[#181A1A]">
                        Phone
                      </FormLabel>
                      <div className="flex items-center">
                        {/* Country Code Selector */}
                        <FormField
                          control={form.control}
                          name="dialCode"
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="lg:text-body-1 w-fit placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0">
                                <SelectValue placeholder="+91" />
                              </SelectTrigger>
                              <SelectContent className="lg:text-body-1 placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0">
                                {dialCodes.map(({ code, name }) => (
                                  <SelectItem
                                    key={`${code}-${name}`}
                                    value={code}
                                    className="rounded-none"
                                  >
                                    {code} ({name})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />

                        {/* Phone Number Input */}
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="0123456789"
                            {...field}
                            className="lg:text-body-1 placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Role Applying For */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-body-1 text-[#181A1A]">
                        Role you are applying for
                      </FormLabel>
                      <FormControl>
                        <Controller
                          name="role"
                          control={form.control}
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="w-full border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0 text-left">
                                <SelectValue placeholder="Select Role" />
                              </SelectTrigger>
                              <SelectContent>
                                {roles.map((role) => (
                                  <SelectItem key={role} value={role}>
                                    {role}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Tell About Yourself */}
                <FormField
                  control={form.control}
                  name="about"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-body-1 text-[#181A1A]">
                        Tell us about yourself
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Write a brief introduction about yourself..."
                          className="resize-none lg:text-body-1 placeholder-[#AFB6B4] min-h-20 focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Buttons */}
                <div className="flex self-center py-6 items-center mx-auto gap-6">
                  <Button type="submit" className="rounded-full p-6">
                    Submit
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full p-6"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </>
      )}
    </motion.div>
  );
}
