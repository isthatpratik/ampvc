"use client";

import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  source: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection({
  selectedService,
}: {
  selectedService: { title: string; subtitle: string } | null;
}) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema), 
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      mail: "",
      phone: "",
      source: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="sticky top-0 flex flex-col bg-[#FAFAFA] lg:w-full overflow-hidden justify-start pt-[168px] pb-[56px] px-[40px] max-h-screen overflow-y-auto h-full">

      {/* Animate the title when the service changes */}
      <motion.h2
        key={selectedService?.title}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="text-h6 font-semibold mb-4"
      >
        {selectedService ? selectedService.title : "Get in Touch"}
      </motion.h2>

      <motion.p
        className="text-[#B6B6B6] text-body-3 mb-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        {selectedService
          ? selectedService.subtitle
          : "Have questions? Let’s chat!"}
      </motion.p>

      <motion.div
        className="border py-16 px-8 border-[#AFB6B4] h-fit flex flex-col 2xl:gap-16 justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4">
          <h6 className="text-h6 text-balance">
            Ready to optimize your strategy and unlock new opportunities?
          </h6>
          <p className="text-body-2">Let’s make your success story stand out.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="2xl:space-y-10 xl:space-y-8 lg:space-y-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-body-1">First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        {...field}
                        className="border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
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
                  <FormItem className="text-body-1">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        {...field}
                        className="border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
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
                  <FormLabel className="text-body-1">Corporate Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email@yourcompany.com"
                      {...field}
                      className="border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
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
                  <FormLabel className="text-body-1">Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="9922853244"
                      {...field}
                      className="border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-body-1">How Did You Hear About Us?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Eg. LinkedIn, Google, etc."
                      {...field}
                      className="border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
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
                  <FormLabel className="text-body-1">Your Query</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project or requirements"
                      {...field}
                      className="resize-none min-h-[100px] border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="self-center">

            <Button type="submit" className="py-4 shadow-none hover:border-black transition-all duration-300 bg-transparent border border-[#AFB6B4] w-fit rounded-full text-black hover:bg-transparent">
              Submit  <ArrowRight className="w-4 h-4"/>
            </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
