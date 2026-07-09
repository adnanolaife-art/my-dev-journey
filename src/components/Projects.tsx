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
import { Github, ImageIcon, Users, User } from "lucide-react";

type Project = {
  title: string;
  problem: string;
  role: string;
  tags: string[];
  link: string;
  linkLabel: string;
};

const groupProjects: Project[] = [
  {
    title: "Oja Ogbomoso",
    problem:
      "Many local vendors in Ogbomoso still rely on word-of-mouth and physical stalls to sell their goods, which limits their reach and makes it hard for buyers to discover products. There is no simple, low-cost way for small vendors to list items online and chat directly with customers. Oja Ogbomoso solves this by giving vendors a mobile-first storefront where they can publish products and buyers can reach them instantly via WhatsApp.",

    role: "Frontend developer — built the vendor listing UI, product discovery flow, and WhatsApp integration.",
    tags: ["React", "Mobile-first", "WhatsApp API"],
    link: "https://github.com/adnanolaife-art",
    linkLabel: "View on GitHub",
  },
  {
    title: "ResQ Naija",
    problem:
      "During emergencies, many Nigerians waste critical minutes trying to find the right contact number or explaining their location to responders. Poor address systems and delayed communication can slow down rescue efforts. ResQ Naija solves this by letting users report incidents with one tap, automatically share their location, and request help faster when every second counts.",
    role: "Contributor — worked on the incident reporting screen and location handling with the team.",

    tags: ["React Native", "Geolocation", "Team Project"],
    link: "https://github.com/adnanolaife-art",
    linkLabel: "View on GitHub",
  },
];

const individualProjects: Project[] = [
  {
    title: "Personal Portfolio",
    problem:
      "Recruiters need a fast, clear way to see who I am and what I've built. This portfolio presents my work, video resume, and CV in one responsive page.",
    role: "Sole developer — designed the UI, built every section, and deployed the site.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/adnanolaife-art",
    linkLabel: "View on GitHub",
  },
  {
    title: "Learning Sandbox",
    problem:
      "I wanted a place to practice new concepts — components, forms, and API calls — without breaking a real project.",
    role: "Sole developer — built small, focused demos to sharpen my frontend fundamentals.",
    tags: ["JavaScript", "APIs", "UI Practice"],
    link: "https://github.com/adnanolaife-art",
    linkLabel: "View on GitHub",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col overflow-hidden border-border bg-card transition-shadow hover:shadow-md">
      <div className="flex aspect-video w-full items-center justify-center bg-muted">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="h-10 w-10" />
          <span className="text-xs uppercase tracking-wider">Screenshot coming soon</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{project.problem}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <p className="text-sm text-foreground">
          <span className="font-semibold text-primary">My role: </span>
          {project.role}
        </p>
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
      <CardFooter>
        <Button size="sm" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            {project.linkLabel}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/40">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Things I've built</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects that showcase my skills in software development, product
            thinking, and collaboration.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Group Projects</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {groupProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Individual Projects</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {individualProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
