"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Upload,
  BookMarked,
  Download,
  Clock,
  FileText,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const stats = [
    { label: "Saved Resources", value: "0", icon: BookMarked, href: "/dashboard/saved" },
    { label: "Uploads", value: "0", icon: Upload, href: "/dashboard/uploads" },
    { label: "Downloads", value: "0", icon: Download, href: "/dashboard/history" },
    { label: "Recent Views", value: "0", icon: Clock, href: "/dashboard/history" },
  ];

  const quickActions = [
    {
      title: "Browse NCERT Books",
      description: "Access books from Class 1-12",
      icon: BookOpen,
      href: "/ncert",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Upload Resources",
      description: "Share your notes and materials",
      icon: Upload,
      href: "/marketplace/upload",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Study Resources",
      description: "Find papers and notes",
      icon: FileText,
      href: "/study-resources",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Find Study Partners",
      description: "Connect with classmates",
      icon: GraduationCap,
      href: "/team-finder",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s an overview of your study activity.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link href={stat.href}>
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              >
                <Link href={action.href}>
                  <Card className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.bg} ${action.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{action.title}</CardTitle>
                        <CardDescription>{action.description}</CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your recent study activity will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Clock className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium">No recent activity</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">
              Start exploring resources to see your activity here.
            </p>
            <Button asChild>
              <Link href="/ncert">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse NCERT Books
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
