"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
}

const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-indigo to-electric-bright text-white shadow-glow hover:brightness-110",
  outline:
    "border border-line text-ink-primary hover:border-electric-bright/60 hover:bg-ink-primary/[0.06]",
  ghost: "text-ink-muted hover:text-ink-primary hover:bg-ink-primary/[0.06]",
};

const sizes: Record<string, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, onClick, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<
      { x: number; y: number; id: number }[]
    >([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 650);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/35 animate-ripple"
            style={{
              left: r.x,
              top: r.y,
              width: 10,
              height: 10,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </button>
    );
  }
);
Button.displayName = "Button";
