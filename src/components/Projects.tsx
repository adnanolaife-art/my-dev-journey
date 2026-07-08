import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "TaskFlow",
    description:
      "A productivity app for managing tasks with drag-and-drop boards, due dates, and progress tracking.",
    tags: ["React", "TypeScript", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "WeatherWise",
    description:
      "A clean weather dashboard that fetches live forecast data and displays it in an easy-to-read interface.",
    tags: ["React", "API Integration", "CSS"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "A lightweight content management system for developers to publish project case studies and blog posts.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/40">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Things I've built</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects that showcase my skills in frontend development, UI design, and
            problem solving.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col border-border bg-card transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/15"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button size="sm" variant="default" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
