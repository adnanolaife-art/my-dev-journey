import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Video } from "lucide-react";

export function VideoResume() {
  return (
    <section id="video-resume" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">Video Resume</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Video Resume</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch my professional introduction and learn more about my skills, experience, and
            career aspirations.
          </p>

        </div>

        <div className="mt-12">
          <Card className="overflow-hidden border-border bg-card shadow-sm">
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-muted">
                <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary sm:h-20 sm:w-20">
                    <Video className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-foreground sm:text-lg">
                      Your video resume will appear here
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Upload your video to a platform like YouTube or Vimeo and replace this
                      placeholder with the embed link.
                    </p>
                  </div>
                  <Button asChild>
                    <a
                      href="https://www.youtube.com/upload"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Upload Video
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "2+", label: "Years of coding experience" },
              { stat: "10+", label: "Projects completed" },
              { stat: "5+", label: "Technologies learned" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-primary">{item.stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
