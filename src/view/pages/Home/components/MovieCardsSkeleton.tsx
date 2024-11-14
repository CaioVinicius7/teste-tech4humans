import { Skeleton } from "@/view/components/ui/skeleton";

export function MovieCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md-custom:grid-cols-cards gap-6 sm:gap-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton key={index} className="w-full aspect-[2/3]  rounded-md" />
      ))}
    </div>
  );
}
