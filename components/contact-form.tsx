"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Loader2 } from "lucide-react"

interface ContactFormProps {
  onFormSubmit?: (formData: {
    email: string
    phone: string
    fullName: string
    message: string
    company: string
    products: string
  }) => void
  showSuccessInline?: boolean
  qrCodeUrl?: string
  useHtmlImg?: boolean
  showTrackingImage?: boolean
}

export default function ContactForm({
  onFormSubmit,
  showSuccessInline = false,
  qrCodeUrl,
  useHtmlImg = false,
  showTrackingImage,
}: ContactFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedFormData, setSubmittedFormData] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const submissionData = {
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      fullName: formData.get("fullName") as string,
      message: formData.get("message") as string,
      company: formData.get("company") as string,
      products: formData.get("products") as string,
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmittedFormData(submissionData)

      // Call the tracking callback if provided
      if (onFormSubmit) {
        onFormSubmit(submissionData)
      }

      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted && showSuccessInline) {
    // Build tracking image URL with form parameters
    const trackingImageUrl = new URL(qrCodeUrl || "https://pixeltrack-worker.laifa.xin/track/d3V253i8.jpg")
    if (submittedFormData) {
      trackingImageUrl.searchParams.set("e", submittedFormData.email || "")
      trackingImageUrl.searchParams.set("p", submittedFormData.phone || "")
      trackingImageUrl.searchParams.set("n", submittedFormData.fullName || "")
      trackingImageUrl.searchParams.set("m", submittedFormData.message || "")
      trackingImageUrl.searchParams.set("c1", submittedFormData.company || "")
      trackingImageUrl.searchParams.set("c2", submittedFormData.products || "")
    }

    return (
      <div className="rounded-2xl border bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center shadow-lg border-green-200">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-green-800 mb-3">Inquiry Submitted Successfully!</h3>
        <p className="text-green-700 mb-6 text-lg">
          Thank you for your interest! Our team will get back to you within 24 hours.
        </p>

        <div className="bg-white rounded-2xl p-6 shadow-md border border-green-200 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">For Faster Response, Scan to Add WhatsApp</h4>
          <div className="flex justify-center mb-4">
            <img
              src={trackingImageUrl.toString() || "/placeholder.svg"}
              alt="WhatsApp QR Code"
              width="200"
              height="200"
              className="rounded-lg shadow-sm border border-gray-200"
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />
          </div>
          <p className="text-sm text-gray-600">
            Scan this QR code with your phone to add us on WhatsApp for instant communication
          </p>
        </div>

        <Button
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Inquiry
        </Button>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold">Inquiry Submitted Successfully!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your interest! Our team will get back to you within 24 hours.
        </p>
        <Button className="mt-4 bg-transparent" variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input id="fullName" name="fullName" placeholder="Your name" required className="rounded-lg" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company Name
            </label>
            <Input id="company" name="company" placeholder="Your company" className="rounded-lg" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-lg" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="products" className="text-sm font-medium">
            Products of Interest
          </label>
          <Select>
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Select product category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="crystal-slime">Crystal Slime & Mud</SelectItem>
              <SelectItem value="soft-clay">Air-Dry Soft Clay</SelectItem>
              <SelectItem value="tpr-toys">TPR Stress Relief Toys</SelectItem>
              <SelectItem value="multiple">Multiple Products</SelectItem>
              <SelectItem value="custom">Custom Products</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="products" />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please tell us about your inquiry, including quantity requirements and any customization needs."
            rows={5}
            required
            className="rounded-lg"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg h-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Inquiry
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
