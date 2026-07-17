"use client";

import { FolderGit2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Student Projects</h1>
      <p className="text-muted-foreground mb-8">
        Browse and share school projects with fellow students.
      </p>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <FolderGit2 className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-muted-foreground max-w-md">
            Projects shared by students will appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
