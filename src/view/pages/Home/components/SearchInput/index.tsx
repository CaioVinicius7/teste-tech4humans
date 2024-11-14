import { Button } from "@/view/components/ui/button";
import { Input } from "@/view/components/ui/input";
import { Search, X } from "lucide-react";
import { useSearchInputController } from "./useSearchInputController";

export function SearchInput() {
  const { search, handleChangeSearch, handleClearSearch, handleSearch } =
    useSearchInputController();

  return (
    <form
      onSubmit={handleSearch}
      className="rounded flex items-center max-w-[350px] w-full relative focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2
"
    >
      <Input
        value={search}
        onChange={(e) => handleChangeSearch(e.target.value)}
        name="search"
        placeholder="Qual filme Deseja pesquisar?"
        autoComplete="off"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <Button className="rounded-l-none">
        <Search className="size-4" />
      </Button>

      {!!search && (
        <button
          type="button"
          onClick={handleClearSearch}
          className="absolute right-12 p-2 h-full"
        >
          <X className="size-4" />
        </button>
      )}
    </form>
  );
}
