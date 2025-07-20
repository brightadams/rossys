import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }



import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CircleCheckBig,
  Users,
  PiggyBank,
  Shield,
  TrendingUp,
  Star,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <CircleCheckBig className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-slate-900">RoSSys</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => (window.location.href = "/api/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Group Savings
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Join the digital revolution of traditional rotational savings. Save
            together, grow together, and achieve your financial goals with
            trusted friends and family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "/api/login")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Start Your Circle
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose RoSSys?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built on trust, powered by technology. Experience the modern way
              to save collectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl text-slate-900">
                  Easy Group Management
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Create and manage savings groups with friends and family in
                  minutes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <PiggyBank className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-xl text-slate-900">
                  Automated Savings
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Set up automatic contributions and let the system handle the
                  rest.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl text-slate-900">
                  Secure & Transparent
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Bank-level security with complete transparency of all
                  transactions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl text-slate-900">
                  Track Progress
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Monitor your savings growth and group performance in
                  real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-xl text-slate-900">
                  Reliability Ratings
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Build trust with member reliability scores and payment
                  history.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <CircleCheckBig className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl text-slate-900">
                  Interest-Free
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Traditional Susu principles with no interest charges or hidden
                  fees.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get started with SusuCircle in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Create or Join
              </h3>
              <p className="text-slate-600">
                Start a new savings group or join an existing one with an invite
                code.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Set Schedule
              </h3>
              <p className="text-slate-600">
                Decide on contribution amounts and payment frequency that works
                for everyone.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Save & Receive
              </h3>
              <p className="text-slate-600">
                Make regular contributions and take turns receiving the full
                pot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Saving Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already building wealth through
            group savings.
          </p>
          <Button
            onClick={() => (window.location.href = "/api/login")}
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <CircleCheckBig className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold">SusuCircle</span>
          </div>
          <div className="text-center text-slate-400">
            <p className="mb-4">
              Empowering communities through collective savings and financial
              growth.
            </p>
            <p>&copy; 2024 SusuCircle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
