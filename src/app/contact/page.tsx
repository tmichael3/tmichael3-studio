"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, Camera, Heart } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const services = [
    'Wedding Photography',
    'Wedding Videography',
    'Portrait Session',
    'Commercial Photography',
    'Real Estate Photography',
    'Event Coverage',
    'Other'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(555) 123-4567',
      description: 'Call or text anytime'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@tjmichael.studio',
      description: 'Best way to reach me'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Michigan, USA',
      description: 'Serving statewide'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'Usually much faster'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Create Something Beautiful
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to capture your special moments? I&apos;d love to hear about your project and discuss how we can bring your vision to life.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Camera className="h-5 w-5" />
              <Heart className="h-4 w-4" />
              <span className="font-medium">Currently booking for 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in animate-delay-100">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date (if applicable)</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your project, vision, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in animate-delay-200">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground mb-6">
                    I&apos;m here to answer any questions and help you plan your perfect session. 
                    Don&apos;t hesitate to reach out!
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="animate-fade-in" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-lg font-medium text-primary mb-1">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="animate-fade-in animate-delay-600">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">What to Include in Your Message:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        Your event or session date
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        Type of photography/videography needed
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        Location preferences
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        Your vision and style preferences
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        Approximate budget range
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about my services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="animate-fade-in animate-delay-200">
                <CardHeader>
                  <CardTitle className="text-lg">How far in advance should I book?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I recommend booking 6-12 months in advance for weddings, and 2-4 weeks for other sessions. 
                    However, I often have last-minute availability, so don&apos;t hesitate to reach out!
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in animate-delay-300">
                <CardHeader>
                  <CardTitle className="text-lg">What&apos;s included in your packages?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All packages include professional editing, high-resolution digital images, and an online gallery. 
                    Specific inclusions vary by service type - I&apos;ll provide detailed information when we connect.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in animate-delay-400">
                <CardHeader>
                  <CardTitle className="text-lg">Do you travel for sessions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! I&apos;m based in Michigan but travel throughout the state and beyond. 
                    Travel fees may apply for locations outside my local area.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in animate-delay-500">
                <CardHeader>
                  <CardTitle className="text-lg">How do you deliver the final images?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You&apos;ll receive a private online gallery where you can view, download, and share your images. 
                    I also offer printed products and albums if you&apos;re interested.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
