"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Library,
  Store,
  Users,
  LayoutDashboard,
  Search,
  GraduationCap,
  BookMarked,
  ArrowRight,
  ChevronDown,
  Check,
  FileText,
  Download,
  Upload,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FEATURES, FAQS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                Your All-in-One Student Platform
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Everything you need to{" "}
              <span className="text-primary">succeed</span> in school
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
            >
              Access NCERT books, share notes, find study partners, and organize your study materials.
              StudyHub brings together all the tools you need in one place.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="xl" className="w-full sm:w-auto" asChild>
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/ncert">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse NCERT Books
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Free to use
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                No ads
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Class 1-12
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                All subjects
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to study better
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              All the tools and resources to help you excel in your studies.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((feature) => {
              const IconComponent = {
                "book-open": BookOpen,
                "library": Library,
                "store": Store,
                "users": Users,
                "layout-dashboard": LayoutDashboard,
                "search": Search,
              }[feature.icon] || BookOpen;

              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Link href={feature.href}>
                    <Card className="group h-full cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm font-medium text-primary">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Screenshots/Placeholders Section */}
      <section className="border-t border-border py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See it in action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A clean, intuitive interface designed for students.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Browse NCERT Books",
                description: "Access all textbooks organized by class and subject with a clean reading interface.",
                gradient: "from-blue-500/20 to-purple-500/20",
                icon: BookOpen,
              },
              {
                title: "Study Dashboard",
                description: "Track your progress, manage saved resources, and access everything in one place.",
                gradient: "from-green-500/20 to-teal-500/20",
                icon: LayoutDashboard,
              },
              {
                title: "Share Resources",
                description: "Upload notes, find study partners, and collaborate on projects together.",
                gradient: "from-orange-500/20 to-red-500/20",
                icon: Upload,
              },
            ].map((screenshot, i) => {
              const Icon = screenshot.icon;
              return (
                <motion.div
                  key={screenshot.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="group relative overflow-hidden rounded-2xl border bg-card">
                    <div className={`aspect-video bg-gradient-to-br ${screenshot.gradient} flex items-center justify-center`}>
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm">
                        <Icon className="h-10 w-10 text-foreground" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold mb-2">{screenshot.title}</h3>
                      <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border py-20 sm:py-28 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started in just a few simple steps.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Create an account",
                description: "Sign up for free and set up your profile with your class and subjects.",
              },
              {
                icon: BookMarked,
                title: "Browse resources",
                description: "Access NCERT books, previous year papers, notes, and study materials.",
              },
              {
                icon: Upload,
                title: "Share & collaborate",
                description: "Upload your own notes, find study partners, and collaborate on projects.",
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border py-20 sm:py-28" id="faq">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about StudyHub.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <details className="group rounded-xl border border-border bg-card transition-all hover:border-border/80">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium">
                    {faq.question}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 sm:px-16 sm:py-24 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to start studying better?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
                Join other students already using StudyHub to organize their studies.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="xl"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link href="/register">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
