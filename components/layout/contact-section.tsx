"use client";

import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

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
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  mail: z
    .string()
    .email("Invalid email address")
    .refine((email) => {
      const domain = email.split("@")[1];
      return !personalEmailDomains.includes(domain);
    }, "Personal email addresses are not allowed"),
  dialCode: z.string().min(1, "Please select a country code"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  source: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection({
  selectedService,
  selectedSolution,
}: {
  selectedService: { title: string; subtitle: string } | null;
  selectedSolution: { title: string; subtitle: string } | null;
}) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      mail: "",
      dialCode: "+91",
      phone: "",
      source: "",
      message: "",
    },
  });

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [countryCodes, setCountryCodes] = useState<
    { code: string; dialCode: string }[]
  >([]);

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

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/service-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setDialogOpen(true);
        form.reset();
      } else {
        alert(result.error || "Failed to send enquiry");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="sticky top-0 flex flex-col bg-[#FAFAFA] lg:w-full overflow-hidden justify-start py-14 px-10 max-h-screen overflow-y-auto h-full">
      {/* Animate the title when the service changes */}
      <motion.h2
        key={selectedService?.title}
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
        className="text-h6 font-semibold mb-4"
      >
        {selectedService
          ? selectedService.title
          : selectedSolution
          ? selectedSolution.title
          : "Get in Touch"}
      </motion.h2>

      <motion.p
        className="text-[#B6B6B6] text-body-3 mb-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      >
        {selectedService
          ? selectedService.subtitle
          : selectedSolution
          ? selectedSolution.subtitle
          : "Have questions? Let's have a chat!"}
      </motion.p>

      <motion.div
        className="border py-16 px-8 border-[#AFB6B4] h-fit flex flex-col 2xl:gap-16 justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.3,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      >
        <div className="flex flex-col gap-4">
          <h6 className="text-h6 text-balance">
            Ready to optimize your strategy and unlock new opportunities?
          </h6>
          <p className="text-body-2">
            Let’s make your success story stand out.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="2xl:space-y-10 xl:space-y-8 lg:space-y-6 flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-body-1 text-[#181A1A]">
                      First name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        {...field}
                        className="focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="text-body-1 text-[#181A1A] ">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        {...field}
                        className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-body-1 text-[#181A1A]">
                    Work Mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email@yourcompany.com"
                      {...field}
                      className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
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
                  <div className="flex items-center space-x-2">
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
                          <SelectContent>
                            {countryCodes.map(({ code, dialCode }) => (
                              <SelectItem
                                key={`${code}-${dialCode}`}
                                value={dialCode}
                              >
                                {code} ({dialCode})
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
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-body-1 text-[#181A1A]">
                    How Did You Hear About Us?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Eg. LinkedIn, Google, etc."
                      {...field}
                      className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-body-1 text-[#181A1A]">
                    Your Query
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project, specific requirements, challenges, or any other details we should know before getting started."
                      {...field}
                      className="placeholder-[#AFB6B4] focus-visible:outline-none focus-visible:ring-0 resize-none min-h-[80px] border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="self-center">
              <Button
                type="submit"
                className="py-4 shadow-none hover:border-black transition-all duration-300 bg-transparent border border-[#AFB6B4] w-fit rounded-full text-black hover:bg-transparent"
              >
                Submit <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="border-none max-w-screen-md bg-[url('/images/form/form-success-bg.png')] bg-cover bg-no-repeat bg-center">
          <DialogHeader>
            <div className="p-24 flex flex-col gap-6">
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
    </div>
  );
}
