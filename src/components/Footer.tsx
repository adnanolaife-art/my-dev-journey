import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container-tight flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Abdullateef Mujidat Omoyeni. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          Built with <Heart className="h-4 w-4 text-coral" /> and React
        </p>
      </div>
    </footer>
  );
}
