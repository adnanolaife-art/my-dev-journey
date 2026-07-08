import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Lightbulb, Layers, Globe } from "lucide-react";

const futureProjects = [
  {
    title: "AI-Powered Study Assistant",
    description:
      "An app that helps students generate quizzes and summaries from their notes using AI.",
    icon: Lightbulb,
    status: "Planning",
  },
  {
    title: "Open Source UI Kit",
    description:
      "A collection of accessible, reusable components for React and Tailwind CSS projects.",
    icon: Layers,
    status: "In Progress",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A simple, privacy-focused tool to track expenses, set budgets, and visualise spending.",
    icon: Globe,
    status: "Ideation",
  },
  {
    title: "Developer Portfolio Generator",
    description:
      "A CLI tool that generates a clean, deployable portfolio site from a JSON config file.",
    icon: Rocket,
    status: "Coming Soon",
  },
];

export function FutureProjects() {
  return (
    <section id="future-projects" className="section-padding bg-secondary/40">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">
            Future Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            What's coming next
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ideas I'm currently exploring, building, or planning. These are the projects that keep
            me excited about learning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {futureProjects.map((project) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="border-border bg-card transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-coral/30 text-coral">
                    {project.status}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
