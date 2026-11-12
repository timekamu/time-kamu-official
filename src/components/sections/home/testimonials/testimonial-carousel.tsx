
"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AvatarCarousel } from "./avatar-carousel";
import { MessageCard } from "./message-card";
import { UserData } from "@/data/user-data";

interface TestimonialCarouselProps {
  users: UserData[];
}

export const TestimonialCarousel = ({
  users,
}: TestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    duration: 20,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Sync Active Slide
  useEffect(() => {
    if (!emblaApi) return;

    const rafId = requestAnimationFrame(onSelect);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      cancelAnimationFrame(rafId);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Automatic Carousel Scroll
  useEffect(() => {
    if (!emblaApi || users.length <= 1) return;

    const autoScroll = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      window.clearInterval(autoScroll);
    };
  }, [emblaApi, users.length]);

  // Avatar Click Navigation
  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Empty State
  if (!users || users.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto w-full space-y-4 sm:space-y-6 md:space-y-8">
      {/* Avatar Navigation */}
      <AvatarCarousel
        users={users}
        activeIndex={activeIndex}
        onAvatarClick={scrollTo}
      />

      {/* Testimonial Carousel */}
      <div
        className="embla overflow-hidden px-4 sm:px-0"
        ref={emblaRef}
      >
        <div className="embla__container flex cursor-grab active:cursor-grabbing touch-pan-y select-none">
          {users.map((user, index) => (
            <MessageCard
              key={user.id}
              message={user.message}
              name={user.name}
              avatar={user.avatar}
              role={user.role}
              vimeoId={user.vimeoId}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
