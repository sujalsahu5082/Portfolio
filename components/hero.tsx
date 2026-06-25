"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Phone, Github, Linkedin } from "lucide-react";
import { profile, heroMetrics } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* backdrop */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-grid-fade" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* ── Left: text content ── */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow inline-flex items-center gap-2 text-electric-bright"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-electric-bright" />
              </span>
              Available for analytics &amp; SDE internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-primary sm:text-6xl md:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-gradient mt-3 font-display text-xl font-medium sm:text-2xl"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href={profile.resumeFile} download>
                <Button variant="primary">
                  <Download size={16} />
                  Download Resume
                </Button>
              </a>
              <a href={`mailto:${profile.email}`}>
                <Button variant="outline">
                  <Mail size={16} />
                  Email
                </Button>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Button variant="outline">
                  <Phone size={16} />
                  Call
                </Button>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Button variant="ghost">
                  <Github size={16} />
                  GitHub
                </Button>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Button variant="ghost">
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
              </a>
            </motion.div>
          </div>

          {/* ── Right: profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div
              className="absolute -inset-1 rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg, #6366f1, #06b6d4, #a855f7, #6366f1)",
                filter: "blur(2px)",
                animation: "spin 6s linear infinite",
              }}
            />
            {/* White gap ring */}
            <div className="absolute -inset-[3px] rounded-full bg-void" />
            {/* Photo */}
            <div className="relative h-60 w-60 overflow-hidden rounded-full sm:h-72 sm:w-72">
              <Image
                src="/PHOTO.jpeg"
                alt={`${profile.name} — profile photo`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* signature element: live KPI ticker, echoing the dashboards he builds */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-16 w-full overflow-hidden bg-elevated/60 py-4 backdrop-blur-sm"
      >
        <div className="flex w-max animate-ticker gap-12">
          {[...heroMetrics, ...heroMetrics].map((m, i) => (
            <div key={i} className="flex items-center gap-3 px-2">
              <span className="font-mono text-lg font-medium text-electric-bright">
                {m.value}
              </span>
              <span className="text-sm text-ink-muted">{m.label}</span>
              <span className="ml-9 h-1 w-1 rounded-full bg-line" />
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
