
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import PhraseAnimation from "@/components/common/phrase-reveal";

export function TimelineDemo() {
  const data = [
    {
      title: "Video Editing",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Cinematic Editing. Powerful Storytelling." />
          </h3>
          <p className="mb-6 mt-2 text-xs text-muted-foreground md:text-lg">
            Professional video editing, cinematic transitions, visual effects and storytelling designed to make every frame unforgettable.
          </p>
          <img
            src="/gallery/video-editing.png"
            alt="TIME KAMU Video Editing"
            className="w-full rounded-sm border border-primary/40 object-cover"
          />
        </div>
      ),
    },
    {
      title: "2D Animation",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Bringing Imagination To Life." />
          </h3>
          <p className="mb-6 mt-2 text-xs text-muted-foreground md:text-lg">
            Original animation, character movement and visual storytelling that transform creative ideas into engaging experiences.
          </p>
          <img
            src="/gallery/2d-animation.png"
            alt="TIME KAMU 2D Animation"
            className="w-full rounded-sm border border-primary/40 object-cover"
          />
        </div>
      ),
    },
    {
      title: "Graphic Design",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Design That Makes You Stand Out." />
          </h3>
          <p className="mb-6 mt-2 text-xs text-muted-foreground md:text-lg">
            Unique thumbnails, posters, digital artwork and branding crafted with creativity and attention to detail.
          </p>
          <img
            src="/gallery/graphic-design.png"
            alt="TIME KAMU Graphic Design"
            className="w-full rounded-sm border border-primary/40 object-cover"
          />
        </div>
      ),
    },
    {
      title: "Motion Graphics",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Typography Meets Motion." />
          </h3>
          <p className="mb-6 mt-2 text-xs text-muted-foreground md:text-lg">
            Dynamic typography, motion effects, visual transitions and energetic animations that bring visuals to life.
          </p>
          <img
            src="/gallery/motion-graphics.png"
            alt="TIME KAMU Motion Graphics"
            className="w-full rounded-sm border border-primary/40 object-cover"
          />
        </div>
      ),
    },
    {
      title: "Creative Projects",
      content: (
        <div>
          <h3 className="text-xs font-normal text-neutral-800 md:text-3xl dark:text-neutral-200">
            <PhraseAnimation phrase="Ideas Beyond Imagination." />
          </h3>
          <p className="mb-6 mt-2 text-xs text-muted-foreground md:text-lg">
            Original creative experiments, visual concepts and imaginative projects made with passion and a unique artistic vision.
          </p>
          <img
            src="/gallery/creative-projects.png"
            alt="TIME KAMU Creative Projects"
            className="w-full rounded-sm border border-primary/40 object-cover"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="relative mt-10 w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
