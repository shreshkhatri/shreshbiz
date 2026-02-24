"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide digital marketing services such as running Meta ads, creating social media content, and managing purchases on behalf of clients. We also design and develop websites, purchase domains, host applications on the cloud, and create e-learning systems for colleges and universities.",
  },
  {
    question: "How much does it cost to run a digital marketing campaign?",
    answer:
      "The cost depends on your budget, target audience, and campaign goals. We can work with small budgets to start, and then scale as your results grow.",
  },
  {
    question: "Can you manage my website and ads together?",
    answer:
      "Yes, we can handle both website development and digital marketing so your brand has a consistent and effective online presence.",
  },
  {
    question: "Do you also purchase domains and hosting for clients?",
    answer:
      "Yes. We can purchase your domain name, set up cloud hosting, and ensure your website is fast, secure, and always online.",
  },
  {
    question: "What is an e-learning system and how can it help my institution?",
    answer:
      "An e-learning system allows you to deliver courses, quizzes, and assignments online. It helps students access learning materials from anywhere and allows teachers to track progress easily.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "The timeline depends on the complexity of your website. A basic site can take 1-2 weeks, while more complex systems may take longer.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer ongoing technical support, updates, and optimization to make sure your digital presence remains strong.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="w-full section-spacing bg-muted/40">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Find answers to common questions about our services.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
