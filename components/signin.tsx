"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, LockKeyhole } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Sign In Attempt:", { email, password })
    // In a real application, you would send this data to your authentication backend
    alert("Sign-in attempt logged. (Authentication logic not implemented)")
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden shadow-2xl border border-border/50">
        {/* Left Column: Visual & Marketing */}
        <div className="relative hidden lg:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <Image
            src="/placeholder.svg?height=800&width=800"
            alt="Abstract tech background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-30 z-0"
          />
          <div className="relative z-10 text-center space-y-6">
            <ScrollReveal >
              <h2 className="text-4xl font-bold tracking-tight gradient-text">Welcome to Shresh Biz</h2>
            </ScrollReveal>
            <ScrollReveal >
              <p className="text-lg">
                Your gateway to innovative digital solutions and seamless business management.
              </p>
            </ScrollReveal>
            <ScrollReveal >
              <p className="text-sm">
                Sign in to access your personalized dashboard, projects, and support.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Sign-in Form */}
        <div className="flex items-center justify-center p-6 md:p-10 bg-background">
          <ScrollReveal >
            <Card className="glassmorphic-card w-full">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight">Sign In</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enter your credentials to access your account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-9 glassmorphic-inner-card"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="#" className="text-sm font-medium text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-9 glassmorphic-inner-card"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="neumorphic-button-primary w-full">
                    Sign In
                  </Button>
                </form>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link href="/sign-up" className="font-medium text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
