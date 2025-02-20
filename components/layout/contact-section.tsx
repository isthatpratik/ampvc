"use client";

import { motion } from "framer-motion";
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
import { useForm } from "react-hook-form";

export default function ContactSection({
  selectedService,
}: {
  selectedService: { title: string; subtitle: string } | null;
}) {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      source: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="sticky top-0 flex h-screen w-full flex-col bg-[#FAFAFA] lg:w-full overflow-hidden justify-start pt-14 pb-[56px] px-[40px]">
      {/* Animate the title when the service changes */}
      <motion.h2
        key={selectedService?.title} // Ensures animation when title changes
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="text-h6 font-semibold mb-4"
      >
        {selectedService ? `${selectedService.title}` : "Get in Touch"}
      </motion.h2>

      <motion.p className="text-[#B6B6B6] text-body-3 mb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}>
        {selectedService
          ? `${selectedService.subtitle}`
          : "Have questions? Let’s chat!"}
      </motion.p>

      {/* Simple Contact Form */}
      <motion.div className="border py-16 px-8 border-[#AFB6B4] h-fit"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}>
        <div className="flex flex-col gap-4 mb-24">
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
            className="space-y-10"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
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
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field}  className="border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Corporate Email</FormLabel>
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
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <Input
                        type="tel"
                        placeholder="9922853244"
                         className="border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                        {...field}
                      />
                    </div>
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
                  <FormLabel>How Did You Hear About Us?</FormLabel>
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
                  <FormLabel>Your Query</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project or requirements"
                      className="resize-none min-h-[100px] border-t-0 border-l-0 border-r-0 border-b-[#AFB6B4] shadow-none rounded-none px-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-fit rounded-full">
              Submit
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
