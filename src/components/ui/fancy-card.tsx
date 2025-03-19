import type React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FancyCardProps extends React.ComponentProps<typeof Card> {
  gradient?: boolean;
  hover?: boolean;
  glass?: boolean;
}

export function FancyCard({
  children,
  className,
  gradient = false,
  hover = true,
  glass = false,
  ...props
}: FancyCardProps) {
  return (
    <Card
      className={cn(
        "fancy-card",
        gradient ? "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-purple-600/50 before:to-pink-400/50 before:-z-10" : "",
        hover && "transition-all duration-300 hover:-translate-y-1" || "",
        glass && "bg-background/60 backdrop-blur-md" || "",
        className ?? ""
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
