import { cn } from "@/lib/utils";

interface SectionSkeletonProps {
  className?: string;
  showTitle?: boolean;
  showSubtitle?: boolean;
  itemCount?: number;
}

export function SectionSkeleton({ 
  className,
  showTitle = true,
  showSubtitle = true,
  itemCount = 3
}: SectionSkeletonProps) {
  return (
    <section className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-6xl mx-auto">
        {/* Section header skeleton */}
        <div className="text-center mb-12 space-y-4">
          {showTitle && (
            <div className="h-10 bg-muted rounded-lg max-w-sm mx-auto animate-pulse" />
          )}
          {showSubtitle && (
            <div className="h-6 bg-muted rounded-lg max-w-2xl mx-auto animate-pulse" />
          )}
        </div>

        {/* Content skeleton */}
        <div className="space-y-6">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 space-y-4 animate-pulse"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
                <div className="h-4 bg-muted rounded w-24" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
                <div className="h-4 bg-muted rounded w-4/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}