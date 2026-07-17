"use client";

import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CommunityPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Community</h1>
      <p className="text-muted-foreground mb-8">
        Connect with fellow students and discuss topics.
      </p>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <MessageSquare className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">Community coming soon</h3>
          <p className="text-muted-foreground max-w-md">
            The community feature is being built. Stay tuned for discussions, study groups, and more.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
