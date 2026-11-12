
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa6";
import { motion, useMotionValue, useSpring } from "framer-motion";

const BRAND_NAME = "TIME KAMU";
const FOUNDER_NAME = "Indrajit Bhunia";

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@timekamu",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/time.kamu/",
    icon: FaInstagram,
  },
];

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-2 overflow-hidden rounded border border-border/50 bg-background/50 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10 cursor-pointer"
    >
      <Icon className="relative z-10 size-4 text-muted-foreground transition-colors group-hover:text-primary" />

      <span className="relative z-10 text-muted-foreground transition-colors group-hover:text-primary">
        {label}
      </span>

      <div className="absolute inset-0 -translate-x-[105%] bg-gradient-to-r from-primary/10 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-0" />
    </Link>
  );
};

// Magnetic Button
const MagneticButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  const ySpring = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { left, top, width, height } =
      ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
    >
      {children}
    </motion.div>
  );
};

export default function CreativeFooter() {
  const currentYear = new Date().getFullYear();

  const handleContactClick = () => {
    window.location.href = "mailto:timekamu@gmail.com";
  };

  return (
    <footer className="relative w-full overflow-hidden border-t pt-20 md:pt-32 pb-10">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute inset-0 opacity-[0.03] mix-blend-hard-light" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/30 blur-[100px]"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6">

        {/* CTA Section */}
        <div className="mb-24 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">

          <div className="max-w-2xl overflow-hidden">
            <motion.h2
              initial={{
                opacity: 0,
                y: 60,
                clipPath: "inset(0 0 100% 0)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
            >
              Let&apos;s make <br />
              <span className="text-primary/80">
                imagination.
              </span>
            </motion.h2>
          </div>

          <MagneticButton>
            <button
              onClick={handleContactClick}
              className="group relative cursor-pointer flex h-32 w-32 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-primary md:h-40 md:w-40"
            >
              <span className="absolute z-10 text-lg font-medium transition-opacity duration-300 group-hover:opacity-0">
                Let&apos;s Talk
              </span>

              <FaArrowRight className="absolute z-10 size-8 -translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-white" />
            </button>
          </MagneticButton>

        </div>

        {/* Links & Branding */}
        <div className="grid grid-cols-1 gap-12 border-t border-border/40 pt-12 md:grid-cols-12 md:gap-6">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-1 md:col-span-5 flex flex-col gap-6"
          >

            <Link href="/" className="flex w-fit items-center gap-3">

              <div className="relative size-12 overflow-hidden rounded-xl bg-linear-to-br from-background to-muted border border-border shadow-sm flex items-center justify-center">

                <Image
                  src="/md-red-logo.svg"
                  alt="TIME KAMU Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />

              </div>

              <span className="text-xl font-bold tracking-tight">
                {BRAND_NAME}
              </span>

            </Link>

            <p className="max-w-xs text-muted-foreground text-sm leading-relaxed">
              TIME KAMU is a creative brand founded by{" "}
              {FOUNDER_NAME}, professionally known as INDRA.
              Focused on video editing, graphic design,
              2D animation and visual storytelling.
            </p>

            <span className="text-xs tracking-wider text-muted-foreground">
              FRAME WITH IMAGINATION
            </span>

          </motion.div>

          {/* Sitemap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-1 md:col-span-3 flex flex-col gap-4"
          >

            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
              Sitemap
            </h3>

            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item, i) => (

              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                <Link
                  href={item.href}
                  className="w-fit text-foreground/80 hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {item.label}
                </Link>

              </motion.div>

            ))}

          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-1 md:col-span-4 flex flex-col gap-4"
          >

            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
              Follow TIME KAMU
            </h3>

            <div className="flex flex-wrap gap-2">

              {SOCIAL_LINKS.map((social) => (
                <SocialLink
                  key={social.name}
                  href={social.href}
                  icon={social.icon}
                  label={social.name}
                />
              ))}

            </div>

          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 py-6 text-xs text-muted-foreground md:flex-row"
        >

          <p>
            © {currentYear} TIME KAMU. All rights reserved.
          </p>

          <p>
            Founded by Indrajit Bhunia (INDRA)
          </p>

          <p>
            Made with creativity.
          </p>

        </motion.div>

      </div>
    </footer>
  );
}
