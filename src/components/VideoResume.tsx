import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";

export function VideoResume() {
  return (
    <section id="video-resume" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">Video Resume</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Watch my introduction</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A short video where I introduce myself, my skills, and what drives me as a junior
            software developer.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <Card className="overflow-hidden border-border bg-card shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/e9D7nnoCbQ0?rel=0&playsinline=1"
                  title="Abdullateef Mujidat Omoyeni — Video Resume"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-muted-foreground">
              Prefer to read? Download my full CV below.
            </p>
            <Button size="lg" asChild>
              <a href={cvAsset.url} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
