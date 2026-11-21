
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
}: MessageCardProps) => {
  return (
    <div
      className="embla__slide group relative flex flex-col select-none"
      style={{
        flex: "0 0 calc(100vw - 80px)",
        marginRight: "12px",
        minWidth: "280px",
        maxWidth: "520px",
      }}
    >
      <figure
        className={cn(
          "relative flex h-full flex-col overflow-hidden",
          "border border-border/40 bg-background/40 backdrop-blur-md",
          "transition-all duration-500",
          "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
          isActive ? "opacity-100" : "opacity-60"
        )}
      >
        {/* Gallery Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={avatar}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <div className="absolute bottom-3 left-4 z-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90">
              TIME KAMU
            </span>
          </div>
        </div>

        {/* Compact Content */}
        <div className="relative flex flex-1 flex-col p-4 md:p-5">
          <Quote className="absolute -right-3 -top-3 size-16 rotate-12 text-muted/10 transition-colors duration-500 group-hover:text-primary/10" />

          <div className="relative z-10">
            <h3 className="text-lg font-bold leading-tight text-foreground md:text-xl">
              {name}
            </h3>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-primary md:text-xs">
              {role}
            </p>

            <blockquote className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:text-sm">
              {message}
            </blockquote>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </figure>

      {/* Red Corner Decorations */}
      {isActive && (
        <div className="pointer-events-none absolute inset-0 z-30">
          <span className="absolute left-0 top-0 h-7 w-1 bg-primary" />
          <span className="absolute left-0 top-0 h-1 w-7 bg-primary" />

          <span className="absolute right-0 top-0 h-7 w-1 bg-primary" />
          <span className="absolute right-0 top-0 h-1 w-7 bg-primary" />

          <span className="absolute bottom-0 left-0 h-7 w-1 bg-primary" />
          <span className="absolute bottom-0 left-0 h-1 w-7 bg-primary" />

          <span className="absolute bottom-0 right-0 h-7 w-1 bg-primary" />
          <span className="absolute bottom-0 right-0 h-1 w-7 bg-primary" />
        </div>
      )}
    </div>
  );
};
