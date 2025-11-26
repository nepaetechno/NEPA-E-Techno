"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    deadline: "",
    description: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'c9eca06e-f287-4847-8b44-e05e7f15146b',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          budget: formData.budget,
          deadline: formData.deadline,
          description: formData.description,
          subject: `New Project Inquiry from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          deadline: "",
          description: "",
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        console.error('Failed to send message:', result)
        alert('Failed to send inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="w-full bg-background border-border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full bg-background border-border"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+977 98XXXXXXXX"
            className="w-full bg-background border-border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Project Type *</label>
          <Select value={formData.projectType} onValueChange={handleSelectChange("projectType")}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website Development</SelectItem>
              <SelectItem value="ecommerce">E-Commerce Website</SelectItem>
              <SelectItem value="mobile-app">Mobile App Development</SelectItem>
              <SelectItem value="ui-ux">UI/UX Design</SelectItem>
              <SelectItem value="branding">Branding & Identity</SelectItem>
              <SelectItem value="seo">SEO Optimization</SelectItem>
              <SelectItem value="custom">Custom Software</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Budget Range *</label>
          <Select value={formData.budget} onValueChange={handleSelectChange("budget")}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="Select your budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-15k">Under ₨15,000</SelectItem>
              <SelectItem value="15k-40k">₨15,000 - ₨40,000</SelectItem>
              <SelectItem value="40k-80k">₨40,000 - ₨80,000</SelectItem>
              <SelectItem value="80k-120k">₨80,000 - ₨1,20,000</SelectItem>
              <SelectItem value="above-120k">Above ₨1,20,000</SelectItem>
              <SelectItem value="flexible">Flexible / Discuss</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Expected Deadline</label>
          <Select value={formData.deadline} onValueChange={handleSelectChange("deadline")}>
            <SelectTrigger className="w-full bg-background border-border">
              <SelectValue placeholder="When do you need it?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP</SelectItem>
              <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
              <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
              <SelectItem value="1-2-months">1-2 Months</SelectItem>
              <SelectItem value="3-months">3+ Months</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Project Description *</label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell us about your business and what you're looking to build. Include any specific features, design preferences, or references you have in mind..."
          required
          rows={6}
          className="w-full bg-background border-border resize-none"
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>

      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Thank you for your inquiry! We'll review your project details and get back to you within 24 hours.
          </p>
        </div>
      )}
    </form>
  )
}
