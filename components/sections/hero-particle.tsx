"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Server, Globe, Mail, Shield, Clock, Headphones } from "lucide-react";
import { ScrollReveal } from "../scroll-reveal";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

function HeroParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect(); //getting the current container in which the Particle will be rendered
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 51, 90, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(228, 51, 90, ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      createParticles();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "transparent" }}
      />
    </div>
  );
}

export default function WebServicesAd() {
  return (
    <div className="container mx-auto px-4 py-16 relative z-10">
      <HeroParticlesBackground />{" "}
     
        {/* Hero Section */}
        <ScrollReveal>
          <section className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl font-bold text-[#E4335A] mb-6 font-sans">
              Looking for Web Services ?
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8 font-sans leading-relaxed">
              Reliable domains, hosting, and email services tailored for web
              professionals.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center gap-3 ">
                <Shield className="w-6 h-6 text-[#E4335A]" />
                <span className="font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <Headphones className="w-6 h-6 text-[#E4335A]" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <Globe className="w-6 h-6 text-[#E4335A]" />
                <span className="font-medium">Easy Domain Management</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-[#E4335A]  hover:bg-[#E4335A]/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              onClick={() => window.open("https://web.shreshbiz.com", "_blank")}
            >
              Explore Now
            </Button>

          </section>
        </ScrollReveal>

        {/* Social Proof Section */}
        <ScrollReveal>
          <section className="mt-20 text-center">
            <p className="mb-8 font-bold">Trusted by web professionals worldwide</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:first-letter:gap-8 opacity-60">
              <div className="text-2xl font-bold ">1,00+</div>
              <div className=" ">Active Domains</div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-2xl font-bold ">99.9%</div>
              <div className=" ">Uptime</div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-2xl font-bold ">24/7</div>
              <div className=" ">Support</div>
            </div>
          </section>
        </ScrollReveal>
      
    </div>
  );
}
