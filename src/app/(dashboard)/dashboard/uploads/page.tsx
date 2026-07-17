"use client";

import { Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UploadsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">My Uploads</h1>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <Upload className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">No uploads yet</h3>
          <p className="text-muted-foreground max-w-md mb-8">
            Resources you upload will appear here. Start sharing your study materials!
          </p>
          <Button asChild>
            <Link href="/marketplace/upload">Upload a Resource</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
