"use client";

import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MessagesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Messages</h1>
      <p className="text-muted-foreground mb-8">
        Chat with your study partners and collaborators.
      </p>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <MessageSquare className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
          <p className="text-muted-foreground max-w-md">
            Messages with study partners will appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
