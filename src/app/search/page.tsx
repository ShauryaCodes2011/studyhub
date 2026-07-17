"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, BookOpen, Users, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight mb-2">Search</h1>
        <p className="text-muted-foreground mb-6">
          Find books, notes, projects, and users across StudyHub.
        </p>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for anything..."
            className="h-14 pl-12 pr-10 text-lg rounded-xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </motion.div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {query ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">
                No results found for &quot;{query}&quot;
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-16 w-16 text-muted-foreground/30 mb-6" />
              <h3 className="text-xl font-semibold mb-2">Search across StudyHub</h3>
              <p className="text-muted-foreground max-w-md">
                Type in the search bar above to find NCERT books, study resources, users, and more.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="books" className="mt-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">
              {query ? `No books found for "${query}"` : "Search for NCERT books"}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <FileText className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">
              {query ? `No resources found for "${query}"` : "Search for study resources"}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Users className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">
              {query ? `No users found for "${query}"` : "Search for other students"}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
