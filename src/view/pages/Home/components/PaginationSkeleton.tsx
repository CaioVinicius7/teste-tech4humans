import { Skeleton } from "@/view/components/ui/skeleton";

export function PaginationSkeleton() {
  return (
    <div className="flex items-center justify-between px-4">
      <span className="text-sm text-muted-foreground">
        <Skeleton className="h-6 w-40" />
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <span className="hidden whitespace-nowrap text-sm font-medium md:block">
          <Skeleton className="h-6 w-28" />
        </span>

        <div className="flex items-center gap-1">
          <Skeleton className="size-10" />
          <Skeleton className="size-10" />
          <Skeleton className="size-10" />
          <Skeleton className="size-10" />
        </div>
      </div>
    </div>
  );
}
