import { Code, Layout, Terminal, Sparkles, Briefcase, GraduationCap } from "lucide-react";

const skills = [
  { name: "React", icon: Layout },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Terminal },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Git", icon: Briefcase },
  { name: "Next.js", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">About Me</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            A little bit about who I am
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Junior Software Developer with a growing passion for digital innovation and
            problem-solving.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-card-foreground">My Story</h3>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                I am Abdullateef Mujidat Omoyeni, a Junior Software Developer with a growing
                passion for software development, digital innovation, and problem-solving. My
                journey combines experience in education, fashion entrepreneurship, and technology,
                giving me a unique perspective on creating practical solutions for everyday
                challenges.
              </p>
              <p>
                I recently completed an intensive software development training program where I
                developed skills in web development, user experience design, project planning, and
                AI-assisted development workflows. I enjoy learning new technologies, collaborating
                with teams, and turning ideas into functional products.
              </p>
              <p>
                Beyond technology, I have experience as an educator and fashion designer, which has
                strengthened my communication, creativity, leadership, and attention to detail. My
                goal is to continue growing as a developer while building products that create
                meaningful impact in communities.
              </p>
            </div>
          </div>


          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-card-foreground">Skills & Tools</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 transition-colors hover:border-primary/30"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
