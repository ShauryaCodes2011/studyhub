"use client";

import { Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">History</h1>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <Clock className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">No history yet</h3>
          <p className="text-muted-foreground max-w-md mb-8">
            Your recently viewed and downloaded resources will appear here.
          </p>
          <Button asChild>
            <Link href="/ncert">Start Exploring</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
