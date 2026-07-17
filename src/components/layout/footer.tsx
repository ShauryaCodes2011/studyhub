import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">StudyHub</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your all-in-one student platform. Access NCERT books, share resources, and connect with fellow students.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ncert" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  NCERT Books
                </Link>
              </li>
              <li>
                <Link href="/study-resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Study Resources
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team-finder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Find Study Partners
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/premium" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Premium
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Contact: hello@studyhub.app
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} StudyHub. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Built for students, by students.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
