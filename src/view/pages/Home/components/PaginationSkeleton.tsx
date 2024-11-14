import { Skeleton } from "@/view/components/ui/skeleton";

export function PaginationSkeleton() {
  return (
    <div className="flex items-center justify-between px-4">
      <span className="text-sm text-muted-foreground">
        <Skeleton className="w-40 h-6" />
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <span className="hidden text-sm font-medium md:block whitespace-nowrap">
          <Skeleton className="w-28 h-6" />
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
