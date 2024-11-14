import { Button } from "@/view/components/ui/button";
import { Input } from "@/view/components/ui/input";
import { Search } from "lucide-react";
import { useSearchInputController } from "./useSearchInputController";

export function SearchInput() {
  const { handleSearch } = useSearchInputController();

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 items-center max-w-80 w-full"
    >
      <Input
        name="search"
        placeholder="Qual filme Deseja pesquisar?"
        autoComplete="off"
      />

      <Button>
        <Search className="size-4" />
      </Button>
    </form>
  );
}
