"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  MessageSquare,
  User,
  FileText,
  CheckCircle,
  Send,
} from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

// Form validation schema
const messageSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type MessageFormData = z.infer<typeof messageSchema>;

export default function SendMessagePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: MessageFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <div className="flex w-full min-h-screen flex-col items-stretch py-24 lg:py-32 section-spacing">
        <ScrollReveal>
          <Card className="w-full max-w-md text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Message Sent!
              </h2>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. We'll get back to you within 24
                hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen flex-col items-stretch py-24 lg:py-32 section-spacing">
      <ScrollReveal>
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Have questions about our web hosting, digital marketing, or
              development services? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          Full Name
                        </FormLabel>
                        <Input
                          placeholder="Enter your full name"
                          className="h-12"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          Email Address
                        </FormLabel>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="h-12"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Subject Field */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Subject
                        </FormLabel>
                        <Input
                          placeholder="What's this about?"
                          className="h-12"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                          Message
                        </FormLabel>
                        <Textarea
                          placeholder="Tell us more about your project or question..."
                          className="min-h-32 resize-none"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Prefer to email directly? Reach us at{" "}
              <a
                href="mailto:info@shreshbiz.com"
                className="text-primary hover:underline font-medium"
              >
                info@shreshbiz.com
              </a>
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
