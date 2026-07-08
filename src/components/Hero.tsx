import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="container-tight grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-0">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
            Junior Software Developer
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I build clean, accessible, and responsive web applications. I love turning ideas into
            polished digital experiences with modern tools and thoughtful design.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => scrollTo("#projects")}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
              Get in Touch
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Illustration of a developer working at a clean desk"
            width={520}
            height={520}
            className="rounded-2xl"
            loading="eager"
          />
        </div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground lg:block"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
