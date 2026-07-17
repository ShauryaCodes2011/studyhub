"use client";

import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TeamFinderPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Find Study Partners</h1>
      <p className="text-muted-foreground mb-8">
        Connect with students studying the same subjects and collaborate.
      </p>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <Users className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">Study partners coming soon</h3>
          <p className="text-muted-foreground max-w-md mb-8">
            This feature will help you find study partners in your class and subjects.
          </p>
          <Button variant="outline" disabled>Coming Soon</Button>
        </CardContent>
      </Card>
    </div>
  );
}
