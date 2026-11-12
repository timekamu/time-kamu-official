
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import PhraseAnimation from "@/components/common/phrase-reveal";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "919475140848";

const MESSAGE =
  "Hello TIME KAMU! I want to discuss a creative project. Please share the details.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  MESSAGE
)}`;

const CalBooking = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Logic
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yContent = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full py-10 md:py-20 overflow-hidden px-4 md:px-8"
    >
      {/* Heading */}
      <div
        ref={headerRef}
        className="container relative z-10 mb-16 px-6 text-center mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={
            headerInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-4 w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary uppercase tracking-widest"
        >
          LET'S CONNECT
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={
            headerInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h3 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <PhraseAnimation phrase="Let's Create " />
            <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              <PhraseAnimation
                phrase="Something Awesome"
                className="text-primary"
              />
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ originX: 0 }}
          className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-primary/60 via-primary/20 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.38,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Have a creative idea? Let's discuss your next project and bring
          your imagination to life with TIME KAMU.
        </motion.div>
      </div>

      {/* Main Booking Section */}
      <div className="relative flex flex-col items-center lg:block max-w-7xl mx-auto">
        {/* Profile Image */}
        <motion.div
          style={{ y: yImage }}
          className="relative z-0 w-full max-w-[400px] lg:max-w-none lg:mx-auto"
        >
          <img
            src="/ichigo2.png"
            alt="TIME KAMU Creative Profile"
            className="block mx-auto object-cover w-full h-auto"
          />
        </motion.div>

        {/* Gradient Overlays */}
        <motion.div
          style={{ y: yImage }}
          className="absolute -top-1 w-full h-32 md:h-60 bg-gradient-to-b from-background to-transparent pointer-events-none z-10"
        />

        <motion.div
          style={{ y: yImage }}
          className="absolute -bottom-1 w-full h-32 md:h-60 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"
        />

        {/* WhatsApp Booking Card */}
        <motion.div
          style={{ y: yContent }}
          className="
            relative z-20 mt-6 w-full max-w-md
            lg:absolute lg:top-14 lg:right-0 lg:mt-0 lg:w-[450px]
          "
        >
          <div className="rounded-xl border border-primary/20 bg-background/80 backdrop-blur-md p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
                <MessageCircle className="h-7 w-7 text-[#25D366]" />
              </div>

              <div>
                <h4 className="text-lg font-bold">
                  Book a Creative Discussion
                </h4>
                <p className="text-sm text-muted-foreground">
                  Connect directly with TIME KAMU
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-muted-foreground mb-7">
              Tell us about your idea, project requirements or editing needs.
              Let's create something amazing together.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#20bd5a]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Book Now on WhatsApp</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Direct WhatsApp connection • TIME KAMU
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalBooking;
