"use client";

import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TutorsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Find Tutors</h1>
      <p className="text-muted-foreground mb-8">
        Connect with tutors for extra help in your subjects.
      </p>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <GraduationCap className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">Tutors coming soon</h3>
          <p className="text-muted-foreground max-w-md">
            The tutoring feature is being built. Check back later.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
