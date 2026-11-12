
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section
      id="projects"
      className="py-16 md:py-32 dark:bg-transparent"
    >
      {/* Main Heading */}
      <h2 className="text-center text-5xl font-semibold mb-10">
        Bringing Imagination To Life
      </h2>

      <p className="text-muted-foreground mx-auto text-center mb-2 text-xl">
        Selected Creative Works
      </p>

      <p className="text-muted-foreground max-w-md text-center mx-auto mb-16 px-6 lg:max-w-3xl">
        Welcome to TIME KAMU — a creative space by Indrajit Bhunia,
        known as INDRA. Explore visual storytelling through video
        editing, 2D animation and graphic design. Every frame is
        crafted with imagination and attention to detail.
      </p>

      {/* Video Grid */}
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-4 lg:grid-cols-2">

          {/* Featured Video 01 */}
          <FeatureCard className="p-0 w-full">
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/V2EXXr-pXoo"
              title="TIME KAMU - Featured Work 01"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="aspect-76/59"
            />
          </FeatureCard>

          {/* Featured Video 02 */}
          <FeatureCard className="p-0 w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kQEkhtC6-n0"
              title="TIME KAMU - Featured Work 02"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </FeatureCard>

          {/* Featured Video 03 */}
          <FeatureCard className="p-0 w-full lg:col-span-2">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/TTXl9zEUuzU"
              title="TIME KAMU - Featured Work 03"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}

// Feature Card Props
interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

// Feature Card Component
export const FeatureCard = ({
  children,
  className,
}: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative rounded-none shadow-zinc-950/5",
      className
    )}
  >
    <CardDecorator />
    {children}
  </Card>
);

// Decorative Corner Borders
const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-0.5 -top-0.5 block size-2 border-l-2 border-t-2" />

    <span className="border-primary absolute -right-0.5 -top-0.5 block size-2 border-r-2 border-t-2" />

    <span className="border-primary absolute -bottom-0.5 -left-0.5 block size-2 border-b-2 border-l-2" />

    <span className="border-primary absolute -bottom-0.5 -right-0.5 block size-2 border-b-2 border-r-2" />
  </>
);
