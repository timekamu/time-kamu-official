
"use client";

import { motion } from "framer-motion";
import type { showReelI } from "@/data/show-reel";
import { CARD_VARIANTS } from "./constants";
import { padIndex } from "./utils";
import { ScrambleText } from "./scramble-text";

interface ReelCardProps {
  item: showReelI;
  index: number;
  total: number;
  direction: number;
  onOpen: () => void;
}

export function ReelCard({
  item,
  index,
  total,
  direction,
  onOpen,
}: ReelCardProps) {
  return (
    <motion.div
      key={item.title}
      custom={direction}
      variants={CARD_VARIANTS}
      initial="enter"
      animate="active"
      exit="exit"
      className="absolute inset-0 z-10 cursor-none"
      onClick={onOpen}
    >
      <motion.span
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="pointer-events-none absolute bottom-0 right-6 select-none font-mono font-black leading-none text-white"
        style={{ fontSize: "clamp(160px, 26vw, 340px)", lineHeight: 0.85 }}
      >
        {padIndex(index)}
      </motion.span>

      <div className="absolute inset-x-0 top-0 flex items-start justify-between px-8 pt-7 md:px-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-mono text-[10px] font-semibold tracking-[0.4em] text-white/35 uppercase"
          >
            TIME KAMU
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="font-mono text-xl font-black uppercase tracking-tight text-white md:text-2xl"
          >
            Show Reel
          </motion.h2>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.24 }}
          className="font-mono text-[10px] font-semibold tracking-[0.3em] text-white/50"
        >
          {padIndex(index + 1)} / {padIndex(total)}
        </motion.span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 px-8 pb-10 md:px-14">
        <div className="flex max-w-xl flex-col gap-4">
          <h3
            className="font-mono font-black uppercase leading-tight tracking-wider text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textShadow: "0 4px 40px rgba(0,0,0,0.95)",
            }}
          >
            <ScrambleText
              text={item.title}
              trigger
              className="whitespace-nowrap"
            />
          </h3>

          <p className="font-mono text-xs tracking-[0.25em] text-white/60 uppercase">
            Click to watch video
          </p>
        </div>
      </div>
    </motion.div>
  );
}
