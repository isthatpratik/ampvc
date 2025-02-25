"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DialogDescription, DialogFooter } from "../ui/dropdown-menu";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  workEmail: z.string().email("Invalid email address"),
  dialCode: z.string().min(1, "Please select a country code"),
  phone: z.string().min(10, "Phone number is required"),
  companyName: z.string().min(2, "Company name is required"),
  role: z.string().min(2, "Role is required"),
  industry: z.string().min(2, "Industry is required"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  source: z.string().min(2, "Please tell us how you heard about us"),
  query: z.string().min(10, "Please provide more details about your query"),
});

const services = [
  { id: "exit-strategy", label: "Exit Strategy" },
  { id: "board-representation", label: "Board Representation" },
  { id: "fynar-ai-crm", label: "Fynar AI CRM" },
  { id: "secondary-buyout", label: "Secondary Buyout" },
];

interface ContactUsProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactUs({ open, setOpen }: ContactUsProps) {
  const [step, setStep] = React.useState(1);
  const [countryCodes, setCountryCodes] = useState<
    { code: string; dialCode: string }[]
  >([]);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      workEmail: "",
      dialCode: "+91",
      phone: "",
      companyName: "",
      role: "",
      industry: "",
      services: [],
      source: "",
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setOpen(false);
    setDialogOpen(true);
  }

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Array<{
          cca2: string;
          idd?: { root: string; suffixes?: string[] };
        }> = await response.json();

        const codes = data
          .map((country) => ({
            code: country.cca2,
            dialCode:
              country.idd?.root && country.idd?.suffixes
                ? `${country.idd.root}${country.idd.suffixes[0]}`
                : "",
          }))
          .filter((c) => c.dialCode)
          .sort((a, b) => a.code.localeCompare(b.code));

        setCountryCodes(
          codes.map(({ code, dialCode }) => ({
            key: `${code}-${dialCode}`, // Unique key format
            code,
            dialCode,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="mx-auto max-w-4xl px-14 py-14 min-h-[450px]">
          <DialogHeader>
            <DialogTitle className="text-h3 px-12">
              Ready to Disrupt the Ordinary?
              <br />
              Let&apos;s Create Something Extraordinary!
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-6">
            <div className="relative cols-span-1 flex justify-start pl-14 pt-2">
              <div className="relative flex flex-col justify-between h-[90%] items-center">
                {/* Background line */}
                <div className="absolute h-full w-[6px] bg-gray-200 rounded-full z-0" />

                {/* Progress line */}
                <div
                  className="absolute w-[6px] bg-gray-200 rounded-full z-10 transition-all duration-300 ease-in-out"
                  style={{
                    height: `${(step - 1) * 50}%`,
                    background:
                      step === 1
                        ? "#9BDCE1"
                        : step === 2
                        ? "linear-gradient(to bottom, #9BDCE1, #FFADDF)"
                        : "linear-gradient(to bottom, #9BDCE1, #FFADDF, #2B5C4F)",
                  }}
                />

                {/* Steps */}
                {[1, 2, 3].map((i) => {
                  const stepColors = ["#9BDCE1", "#FFADDF", "#2B5C4F"]; // Colors for each step
                  return (
                    <div
                      key={i}
                      className="relative z-20 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
                      style={{
                        backgroundColor:
                          i <= step ? stepColors[i - 1] : "#D1D5DB", // Gray for inactive steps
                      }}
                    >
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                  );
                })}
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 py-6 col-span-2 flex flex-col justify-between h-full w-[60%] mr-auto"
              >
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Smith"
                                className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="workEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="you@companymail.com"
                                className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-body-1 text-[#181A1A]">
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
                                    <SelectTrigger className="w-fit placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0">
                                      <SelectValue placeholder="IN" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-none shadow-none">
                                      {countryCodes.map(
                                        ({ code, dialCode }) => (
                                          <SelectItem
                                            key={`${code}-${dialCode}`}
                                            value={dialCode}
                                            className="rounded-none"
                                          >
                                            {code} ({dialCode})
                                          </SelectItem>
                                        )
                                      )}
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
                                  className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ampersand"
                                className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        className=" mt-4 rounded-full border text-black bg-transparent shadow-none hover:bg-transparent w-fit"
                      >
                        Next <ArrowRight />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Manager"
                              className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email@example.com"
                              className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <FormLabel>
                            What Services Are You Interested In?
                          </FormLabel>
                          <div className="grid grid-cols-2 gap-4">
                            {services.map((service) => (
                              <FormField
                                key={service.id}
                                control={form.control}
                                name="services"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-3">
                                    <FormControl>
                                      <Checkbox
                                        className="border-[#6E6E6E] rounded-sm shadow-none"
                                        checked={field.value?.includes(
                                          service.id
                                        )}
                                        onCheckedChange={(checked) => {
                                          const value = field.value || [];
                                          return checked
                                            ? field.onChange([
                                                ...value,
                                                service.id,
                                              ])
                                            : field.onChange(
                                                value.filter(
                                                  (v) => v !== service.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {service.label}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-between">
                      <Button
                        className="rounded-full border text-black bg-transparent shadow-none hover:bg-transparent w-fit"
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                      >
                        Back <ArrowLeft />
                      </Button>
                      <Button
                        type="button"
                        className="rounded-full border text-black bg-transparent shadow-none hover:bg-transparent w-fit"
                        onClick={() => setStep(3)}
                      >
                        Next <ArrowRight />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="source"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How Did You Here About Us?</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Eg. LinkedIn, Google, etc."
                              className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="query"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Query</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email@example.com"
                              className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button type="submit">Submit</Button>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="border-none max-w-screen-md bg-[url('/images/form/form-success-bg.png')] bg-cover bg-no-repeat bg-center">
          <DialogHeader>
            <div className="p-16 flex flex-col gap-6">
              <DialogTitle className="text-center text-h1">
                Thank you!
              </DialogTitle>
              <DialogDescription className="text-center text-body-1 px-16 mx-auto">
                We’ve received your message and appreciate you reaching out. Our
                team will review it and get back to you shortly.
              </DialogDescription>
            </div>
          </DialogHeader>
          <DialogFooter className="py-24">
            {/* <Button onClick={() => setDialogOpen(false)} className="px-6 py-2">Close</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
