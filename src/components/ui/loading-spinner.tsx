"use client";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  message?: string;
}

const sizeClasses = {
  sm: "h-6 w-6 border",
  md: "h-12 w-12 border-2",
  lg: "h-16 w-16 border-2"
};

export function LoadingSpinner({ 
  size = "md", 
  className,
  message 
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-muted border-t-primary",
          sizeClasses[size]
        )}
        aria-label="Loading"
      />
      {message && (
        <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
      )}
    </div>
  );
}