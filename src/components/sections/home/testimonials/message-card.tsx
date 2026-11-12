
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface MessageCardProps {
  message: string;
  name: string;
  isActive: boolean;
  avatar: string;
  role: string;
  vimeoId?: string;
}

export const MessageCard = ({
  message,
  name,
  isActive,
  avatar,
  role,
  vimeoId,
}: MessageCardProps) => {
  return (
    <div
      className={cn(
        "embla__slide group relative flex flex-col transition-opacity duration-300 select-none"
      )}
      style={{
        flex: "0 0 calc(100vw - 80px)",
        marginRight: "12px",
        minWidth: "320px",
        maxWidth: vimeoId ? "800px" : "400px",
      }}
    >
      {/* Inner Card */}
      <figure
        className={cn(
          "relative flex h-full overflow-hidden transition-all duration-300 items-center",
          vimeoId ? "flex-col md:flex-row" : "flex-col",
          "border border-border/40 bg-background/40 backdrop-blur-md",
          "hover:border-primary/50 hover:bg-primary/5",
          "shadow-sm hover:shadow-lg hover:shadow-primary/10",
          isActive ? "opacity-100" : "bg-muted/10 opacity-60"
        )}
      >
        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 z-20 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />

        {/* Video Section */}
        {vimeoId && (
          <div className="relative w-full md:w-1/2 lg:w-2/5 overflow-hidden bg-black">
            <div className="aspect-square relative">
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&muted=1&background=1`}
                title={`${name} testimonial video`}
                allow="autoplay; fullscreen"
                className={cn(
                  "absolute aspect-auto inset-0 bg-black h-full w-full pointer-events-none transition-all duration-500",
                  isActive ? "scale-100" : "scale-105 opacity-80"
                )}
                style={{ border: "none" }}
              />

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-linear-to-r from-background/80 via-background/20 to-transparent" />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div
          className={cn(
            "relative flex flex-col justify-between p-6",
            vimeoId ? "w-full md:w-1/2 lg:w-3/5" : "w-full"
          )}
        >
          {/* Decorative Quote Icon */}
          <Quote className="absolute -right-4 -top-4 size-24 rotate-12 text-muted/10 transition-colors duration-500 group-hover:text-primary/10" />

          {/* Avatar & Name */}
          <div className="relative z-10 flex flex-row items-center gap-3">
            <div className="relative size-10 overflow-hidden rounded-full border border-border/50">
              <img
                src={avatar}
                alt={`${name} avatar`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <figcaption className="text-base font-semibold text-foreground">
                {name}
              </figcaption>

              <p className="text-xs font-medium text-muted-foreground">
                {role}
              </p>
            </div>
          </div>

          {/* Testimonial Message */}
          <blockquote className="relative z-10 mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            &quot;{message}&quot;
          </blockquote>
        </div>
      </figure>

      {/* Active Card Corner Decorations */}
      {isActive && (
        <div className="pointer-events-none absolute inset-0 z-50">
          {/* Top Left */}
          <div className="absolute -left-1 -top-1 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
            <div className="absolute left-0 top-0 h-6 w-1 bg-primary sm:h-7 md:h-8" />
            <div className="absolute left-0 top-0 h-2 w-6 bg-primary sm:h-2 sm:w-7 md:w-8" />
          </div>

          {/* Top Right */}
          <div className="absolute -right-1 -top-1 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
            <div className="absolute right-0 top-0 h-6 w-1 bg-primary sm:h-7 md:h-8" />
            <div className="absolute right-0 top-0 h-2 w-6 bg-primary sm:h-2 sm:w-7 md:w-8" />
          </div>

          {/* Bottom Left */}
          <div className="absolute -bottom-1 -left-1 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
            <div className="absolute bottom-0 left-0 h-6 w-1 bg-primary sm:h-7 md:h-8" />
            <div className="absolute bottom-0 left-0 h-2 w-6 bg-primary sm:h-2 sm:w-7 md:w-8" />
          </div>

          {/* Bottom Right */}
          <div className="absolute -bottom-1 -right-1 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
            <div className="absolute bottom-0 right-0 h-6 w-1 bg-primary sm:h-7 md:h-8" />
            <div className="absolute bottom-0 right-0 h-2 w-6 bg-primary sm:h-2 sm:w-7 md:w-8" />
          </div>
        </div>
      )}
    </div>
  );
};
