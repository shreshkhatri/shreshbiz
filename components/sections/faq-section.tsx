"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "../ui/animated-text";

export function FaqSection() {
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
      question:
        "What is an e-learning system and how can it help my institution?",
      answer:
        "An e-learning system allows you to deliver courses, quizzes, and assignments online. It helps students access learning materials from anywhere and allows teachers to track progress easily.",
    },
    {
      question: "How long will it take to build my website?",
      answer:
        "The timeline depends on the complexity of your website. A basic site can take 1–2 weeks, while more complex systems may take longer.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. We offer ongoing technical support, updates, and optimization to make sure your digital presence remains strong.",
    },
  ];

  return (
    <section id="faq" className="w-full py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <AnimatedText
                text="Frequently Asked Questions"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Find answers to common questions about our component library."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glassmorphic-accordion-item"
                >
                  <AccordionTrigger className="text-left font-medium tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
