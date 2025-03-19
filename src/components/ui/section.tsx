import type React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: boolean;
  glow?: boolean;
  container?: boolean;
  as?: React.ElementType;
}

export function Section({
  children,
  className,
  pattern = false,
  glow = false,
  container = true,
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "fancy-section",
        pattern ? "fancy-section-pattern" : "",
        glow ? "fancy-glow" : "",
        className ?? ""
      )} 
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Component>
  );
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
  badge,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badge?: string;
}) {
  return (
    <div className={cn("mb-12", centered ? "text-center" : "", className ?? "")}>
      {badge && (
        <span className="inline-block text-sm uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-gradient font-bold mb-4 tracking-wide",
          titleClassName ?? ""
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-muted-foreground max-w-2xl mx-auto",
            subtitleClassName ?? ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
