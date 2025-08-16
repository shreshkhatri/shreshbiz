"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 400,
  rotate = 0,
  gradient = "from-gray-400/[0.5]", // Changed to a darker gradient
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent ",
            gradient,
            "backdrop-blur-[2px] ", // Changed border color
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]", // Adjusted shadow for slightly darker shapes
            "dark:shadow-[0_0_3px_rgba(255,255,255,0.8)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.08),transparent_70%)]" // Adjusted radial gradient
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection({
  badge = "Kokonut UI",
  title1 = "Elevate Your",
  title2 = "Digital Vision",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const isMdOrLarger = useMediaQuery("(min-width: 768px)"); // Check for medium and larger screens

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const leftVariants = {
    hidden: { opacity: 0, x: isMdOrLarger ? -100 : 0 }, // Animate x only on md+
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: isMdOrLarger ? 100 : 0 }, // Animate x only on md+
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden ">
      <div className=" absolute inset-0 bg-gradient-to-r from-white to-gray-100 dark:from-[#101d3e] dark:via-[#101d3e] dark:to-[#c6baba]" />{" "}
      {/* Adjusted gradient for white background */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={200}
          height={200}
          rotate={12}
          gradient="from-blue-400/[0.5]" // Changed gradient to darker blue
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={200}
          height={200}
          rotate={-15}
          gradient="from-purple-400/[0.5]" // Changed gradient to darker purple
          className="hidden md:block left-[45%] bottom-[-5%]"
        />

        <ElegantShape
          delay={0.6}
          width={150}
          height={150}
          rotate={20}
          gradient="from-yellow-400/[0.6]" // Changed gradient to darker yellow
          className=" right-[25%]  top-[30%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={150}
          rotate={-25}
          gradient="from-red-400/[0.5]" // Changed gradient to darker red
          className="left-[80%] md:left-[35%] top-[15%] md:top-[10%] z-10"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={150}
          rotate={-25}
          gradient="from-green-400/[0.5]" // Changed gradient to darker red
          className="hidden md:block right-[15%] md:right-[-1%] bottom-[-5%] md:bottom-[-5%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={150}
          rotate={-25}
          gradient="from-cyan-400/[0.5]" // Changed gradient to darker red
          className="right-[15%] md:right-[0%] top-[0%] md:top-[10%]"
        />
      </div>
      <div className=" relative z-10 container mx-auto px-4 md:px-6">
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 text-[15vw] font-extrabold text-gray-200 opacity-5 rotate-90 origin-left select-none pointer-events-none z-0">
          {" "}
          {/* Adjusted text color */}
          Shresh
        </div>
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 text-[15vw] font-extrabold text-gray-200 opacity-5 -rotate-90 origin-right select-none pointer-events-none z-0">
          {" "}
          {/* Adjusted text color */}
          Biz
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={leftVariants}
            className="flex flex-col items-start text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mt-10 leading-tight">
              <span className="text-gray-900 dark:text-gray-400">
                Your partner for{" "}
              </span>{" "}
              {/* Changed text color */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
                {" "}
                {/* Darker gradient for white background */}
                progress
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 max-w-md">
              {" "}
              {/* Adjusted text color */}
              Reach more people | Grow your brand
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-md">
              {" "}
              {/* Adjusted text color */}
              And let digital marketing drive your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="w-full neumorphic-button-primary" asChild>
                <Link href="https://web.shreshbiz.com/" target="_blank">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="link"
                className="px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors" // Corrected backslash
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right Placeholder Cards Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={rightVariants}
            className="relative grid grid-cols-2 gap-4 p-4 lg:p-8"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
