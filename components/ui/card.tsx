import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass group relative rounded-2xl p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-glow hover:border-indigo-soft/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
