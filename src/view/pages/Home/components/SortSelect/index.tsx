import { ArrowUpDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/view/components/ui/select";

import { useSortSelectController } from "./useSortSelectController";

export function SortSelect() {
  const { sortBy, handleSort } = useSortSelectController();

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="size-4 shrink-0" />

      <label htmlFor="sortSelect" className="text-sm sm:text-base">
        Ordenar por:
      </label>

      <Select
        defaultValue={sortBy ?? "primary_release_date.desc"}
        onValueChange={handleSort}
      >
        <SelectTrigger id="sortSelect" className="w-[180px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="primary_release_date.desc">
            Mais recentes
          </SelectItem>
          <SelectItem value="primary_release_date.asc">Mais antigos</SelectItem>
          <SelectItem value="popularity.desc">Mais Populares</SelectItem>
          <SelectItem value="popularity.asc">Menos Populares</SelectItem>
          <SelectItem value="vote_average.desc">Maior avaliação</SelectItem>
          <SelectItem value="vote_average.asc">Menor avaliação</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
