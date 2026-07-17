"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  Search,
  BookMarked,
  Download,
  Globe,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CLASSES, SUBJECTS_BY_CLASS } from "@/lib/constants";

interface NCERTBook {
  id: string;
  title: string;
  subject: string;
  class: string;
  language: string;
  coverUrl: string | null;
  source: string;
}

// Empty state since no books are uploaded yet
const emptyBooks: NCERTBook[] = [];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function NCERTLibraryPage() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const subjects = selectedClass ? SUBJECTS_BY_CLASS[selectedClass] || [] : [];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">NCERT Library</h1>
            <p className="text-muted-foreground mt-1">
              Browse NCERT textbooks from Class 1 to 12. Read online or download for free.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mt-6 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for books, chapters, subjects..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Class Selection */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
          Select Class
        </h2>
        <div className="flex flex-wrap gap-2">
          {CLASSES.map((cls) => (
            <motion.div key={cls} variants={itemVariants}>
              <Button
                variant={selectedClass === cls ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedClass(cls === selectedClass ? null : cls);
                  setSelectedSubject(null);
                }}
                className="min-w-[3rem]"
              >
                Class {cls}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Subjects */}
      {selectedClass && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Subjects for Class {selectedClass}
          </h2>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <Button
                key={subject}
                variant={selectedSubject === subject ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSubject(subject === selectedSubject ? null : subject)}
              >
                {subject}
              </Button>
            ))}
          </div>
          {subjects.length === 0 && (
            <p className="text-sm text-muted-foreground italic">
              Subjects will be configured in the admin panel.
            </p>
          )}
        </motion.div>
      )}

      {/* Books Grid - Empty State */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {selectedClass && selectedSubject ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground/30 mb-6" />
            <h3 className="text-xl font-semibold mb-2">No books uploaded yet</h3>
            <p className="text-muted-foreground max-w-md mb-8">
              NCERT books for Class {selectedClass} - {selectedSubject} haven&apos;t been uploaded yet.
              They will appear here once added by the admin.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" disabled>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" disabled>
                <BookMarked className="mr-2 h-4 w-4" />
                Bookmark
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Globe className="h-16 w-16 text-muted-foreground/30 mb-6" />
            <h3 className="text-xl font-semibold mb-2">Select a class and subject</h3>
            <p className="text-muted-foreground max-w-md">
              Choose a class above, then select a subject to browse available NCERT books.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
