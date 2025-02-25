"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  workEmail: string
  phone: string
  companyName: string
  role: string
  industry: string
  services: string[]
  source: string
  query: string
}

interface ContactUSProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function ContactUS({ open, setOpen }: ContactUSProps) {
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    companyName: "",
    role: "",
    industry: "",
    services: [],
    source: "",
    query: "",
  })

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setOpen(false)
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const services = ["Exit Strategy", "Board Representation", "Fynar AI CRM", "Secondary Buyout"]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] font-sans">
  <button
    onClick={() => setOpen(false)}
    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </button>

  <div className="space-y-6">
    <div className="space-y-1">
      <h2 className="text-3xl font-bold tracking-tight">Ready to Disrupt the Ordinary?</h2>
      <p className="text-3xl font-bold tracking-tight">Let&apos;s Create Something Extraordinary!</p>
    </div>

    {/* Step Indicator */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-pink-300 to-slate-400" />
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`absolute left-[-8px] h-4 w-4 rounded-full ${
            i <= step ? "bg-gradient-to-r from-cyan-300 to-pink-300" : "bg-slate-300"
          }`}
          style={{ top: `${(i - 1) * 40}%` }}
        />
      ))}
    </div>

    {/* Fixed height wrapper for step content */}
    <form onSubmit={handleSubmit} className="space-y-4 pl-8">
      <div className="h-[400px] flex flex-col justify-between">
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First name
                </label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="First name"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last name
                </label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Last name"
                  className="h-12"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="workEmail" className="text-sm font-medium">
                Work Email
              </label>
              <Input
                id="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={(e) => updateFormData("workEmail", e.target.value)}
                placeholder="Email@yourcompany.com"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="+91 9922853244"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium">
                Company Name
              </label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => updateFormData("companyName", e.target.value)}
                placeholder="Ampersand"
                className="h-12"
              />
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Role
              </label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => updateFormData("role", e.target.value)}
                placeholder="Manager"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="industry" className="text-sm font-medium">
                Industry
              </label>
              <Input
                id="industry"
                value={formData.industry}
                onChange={(e) => updateFormData("industry", e.target.value)}
                placeholder="Technology, Finance, etc."
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">What Services Are You Interested In?</label>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("services", [...formData.services, service])
                        } else {
                          updateFormData(
                            "services",
                            formData.services.filter((s) => s !== service),
                          )
                        }
                      }}
                    />
                    <label htmlFor={service} className="text-sm">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="source" className="text-sm font-medium">
                How Did You Hear About Us?
              </label>
              <Input
                id="source"
                value={formData.source}
                onChange={(e) => updateFormData("source", e.target.value)}
                placeholder="Eg. LinkedIn, Google, etc."
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="query" className="text-sm font-medium">
                Your Query
              </label>
              <Textarea
                id="query"
                value={formData.query}
                onChange={(e) => updateFormData("query", e.target.value)}
                placeholder="Tell us about your requirements..."
                className="min-h-[100px] resize-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        {step > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="h-12 px-8 text-base font-medium rounded-full border-2"
          >
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button
            type="button"
            onClick={handleNext}
            className="ml-auto h-12 px-8 text-base font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            Next →
          </Button>
        ) : (
          <Button type="submit" className="ml-auto h-12 px-8 text-base font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            Submit →
          </Button>
        )}
      </div>
    </form>
  </div>
</DialogContent>
    </Dialog>
  )
}

