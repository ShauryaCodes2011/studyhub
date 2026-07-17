"use client";

import { BookMarked } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SavedPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Saved Resources</h1>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <BookMarked className="h-16 w-16 text-muted-foreground/30 mb-6" />
          <h3 className="text-xl font-semibold mb-2">No saved resources</h3>
          <p className="text-muted-foreground max-w-md mb-8">
            Bookmark resources to save them for later. Your saved items will appear here.
          </p>
          <Button asChild>
            <Link href="/ncert">Browse Resources</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
