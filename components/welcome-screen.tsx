"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[9999] flex cursor-pointer flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--color-void)" }}
        >
          {/* Aurora blobs — same radial palette as the site */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 20% 0%, rgba(79,70,229,0.22) 0%, transparent 70%)," +
                "radial-gradient(50% 40% at 80% 10%, rgba(56,189,248,0.16) 0%, transparent 65%)," +
                "radial-gradient(40% 35% at 55% 100%, rgba(139,92,246,0.14) 0%, transparent 65%)",
            }}
          />

          {/* Subtle grid */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

          {/* Ripple rings */}
          {[0, 0.3, 0.6].map((delay, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.35, scale: 0 }}
              animate={{ opacity: 0, scale: 4.5 }}
              transition={{
                duration: 2.2,
                delay,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
              className="pointer-events-none absolute h-48 w-48 rounded-full border border-indigo-soft/30"
            />
          ))}

          {/* Content card */}
          <div className="relative flex flex-col items-center gap-6 px-8 text-center">
            {/* Monogram badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(79,70,229,0.9) 0%, rgba(56,189,248,0.7) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(99,102,241,0.3), 0 0 40px rgba(79,70,229,0.45)",
              }}
            >
              <span
                className="font-display text-2xl font-bold text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                SS
              </span>
            </motion.div>

            {/* Welcome line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="eyebrow text-electric-bright"
            >
              Welcome to my Portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38 }}
              className="font-display text-5xl font-semibold tracking-tight text-ink-primary sm:text-6xl"
            >
              Sujal Sahu
            </motion.h1>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="h-px w-32 origin-left"
              style={{
                background:
                  "linear-gradient(90deg, #4F46E5, #38BDF8, transparent)",
              }}
            />

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-sm text-ink-muted"
            >
              Computer Science Engineering Undergraduate
            </motion.p>


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
