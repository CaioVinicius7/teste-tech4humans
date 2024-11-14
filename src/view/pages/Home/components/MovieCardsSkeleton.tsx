import { Skeleton } from "@/view/components/ui/skeleton";

export function MovieCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md-custom:grid-cols-cards">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton key={index} className="aspect-[2/3] w-full rounded-md" />
      ))}
    </div>
  );
}
