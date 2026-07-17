"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Upload,
  Users,
  BookOpen,
  FileText,
  AlertTriangle,
  Trash2,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminDashboardPage() {
  const [file, setFile] = useState<File | null>(null);

  const stats = [
    { label: "Total Users", value: "0", icon: Users, color: "text-blue-500" },
    { label: "Resources", value: "0", icon: FileText, color: "text-green-500" },
    { label: "NCERT Books", value: "0", icon: BookOpen, color: "text-purple-500" },
    { label: "Reports", value: "0", icon: AlertTriangle, color: "text-red-500" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Manage users, resources, and platform content.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Management Tabs */}
      <Tabs defaultValue="ncert">
        <TabsList>
          <TabsTrigger value="ncert">NCERT Books</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="ncert" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload NCERT Book</CardTitle>
              <CardDescription>
                Upload NCERT textbooks in PDF format. Books will be organized by class and subject.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-muted-foreground/30 transition-colors">
                <Upload className="h-10 w-10 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-sm font-medium mb-1">Upload NCERT PDF</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Select the class, subject, and language before uploading
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4 max-w-lg mx-auto">
                  <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option>Class</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option>Subject</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                  </select>
                  <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option>Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Urdu</option>
                  </select>
                </div>
                <Input
                  type="file"
                  accept=".pdf"
                  className="max-w-sm mx-auto"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                {file && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {file.name}
                  </p>
                )}
                <Button className="mt-4" disabled={!file}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Book
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  Uploaded Books
                </h3>
                <div className="flex flex-col items-center justify-center py-12 text-center border rounded-xl">
                  <BookOpen className="h-12 w-12 text-muted-foreground/30 mb-4" />
                  <p className="text-sm text-muted-foreground">No books uploaded yet</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Resources</CardTitle>
              <CardDescription>Manage uploaded student resources.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Database className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-sm text-muted-foreground">No resources to manage yet</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>View and manage platform users.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Users className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-sm text-muted-foreground">No users to display</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Reported Content</CardTitle>
              <CardDescription>Review and take action on flagged content.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <AlertTriangle className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-sm text-muted-foreground">No reported content</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
